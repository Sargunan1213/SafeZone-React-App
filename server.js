"use strict";
const log = console.log;
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const cors = require("cors");

const { mongoose } = require("./database/mongoose");
mongoose.set("bufferCommands", false);

const { User, Home } = require("./models/safezone");
const { Donation } = require("./models/donation");
const { Tweeter } = require("./models/tweeter");
// const { Feedback } = require("./models/feedback");

const { ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/js", express.static(path.join(__dirname, "/pub/js")));
app.use(express.static(__dirname + "/client/build"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "drbionfdh",
  api_key: "442744121643477",
  api_secret: "uIBedUL7SU-bsFkoFkb9wTTFFn4",
});

function isError(err, res) {
  if (
    typeof err === "object" &&
    err !== null &&
    err.name === "MongoNetworkError"
  ) {
    res.status(500).send("Internal server error");
  } else {
    log(err);
    res.status(400).send("Bad Request");
  }
}

// Create a session cookie
app.use(
  session({
    secret: "oursecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60000,
      httpOnly: true,
    },
  })
);

const connectionChecker = (req, res, next) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  } else {
    next();
  }
};

const authenticate = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user) {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((err) => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const authenticateHomeowner = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user || user.type !== "Homeowner") {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((err) => {
        res.status(401).send("Unauthorized, log in as homeowner");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const authenticateFrontliner = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user|| user.type !== "Customer") {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((err) => {
        res.status(401).send("Unauthorized, log in as frontliner");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const authenticateAdmin = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user|| user.type !== "Admin") {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((err) => {
        res.status(401).send("Unauthorized, log in as admin");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

// User routes below
// app.post("/users", connectionChecker, (req, res) => {
//   log(req.body);

//   // Create a new user
//   const user = new User({
//     email: req.body.email,
//     password: req.body.password,
//   });

//   // Save the user
//   user.save().then(
//     (user) => {
//       res.send(user);
//     },
//     (error) => {
//       res.status(400).send(error);
//     }
//   );
// });

app.post("/signUpUser", connectionChecker, (req, res) => {
  // Create a new user
  console.log("request in sign up", req.body);
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    tel: req.body.contactNumber,
    homes: [],
    email: req.body.email,
    password: req.body.password,
    type: req.body.usertype,
    profilePic: "./client/build/static/media/favicon.6e1267d9.ico",
  });

  // Save the user
  user.save().then(
    (user) => {
      log(user);
      res.send(user);
      return;
    },
    (error) => {
      log(error);
      res.status(400).send(error);
    }
  );
});

// A route to login and create a session
app.post("/login", connectionChecker, (req, res) => {
  const name = req.body.username;
  const password = req.body.password;

  log(name, password);
  // Use the static method on the User model to find a user
  // by their email and password
  User.findByPassword(name, password)
    .then((user) => {
      // Add the user's id to the session cookie.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user._id;
      req.session.name = user.name;
      req.session.tel = user.tel;
      req.session.email = user.email;
      req.session.type = user.type;

      console.log(user);
      res.send({ currentUser: user });
      req.session.save();
    })
    .catch((error) => {
      res.send({ msg: "Wrong Credentials please try again." });
      // res.status(400).send(error);
    });
});

app.get("/users/check-session", (req, res) => {
  if (req.session.user) {
    res.send({ currentUser: req.session.user });
  } else {
    res.status(401).send();
  }
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
  // Remove the session
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

/*** API Routes below ************************************/

// What is student doing here?!

// app.get("/name", (req, res) => {
//   User.findById(id).then((user) => {
//     res.send(user);
//   });
// });

app.post("/changeprofilepic/:name", connectionChecker, authenticate, multipartMiddleware, (req, res) => {
  // Use uploader.upload API to upload image to cloudinary server.
  cloudinary.uploader.upload(req.files.image.path, function (result) {
    console.log(result.url);
    console.log(req.params.name);
    User.findOneAndUpdate(
      { name: req.params.name },
      { $set: { profilePic: result.url } },
      { new: true, useFindAndModify: false }
    )
      .then((user) => {
        console.log(user);
        if (!user) {
          res.status(404).send();
        } else {
          res.send({ user });
        }
      })
      .catch((error) => {
        res.status(400).send();
      });
  });
});

app.post("/donation", connectionChecker, (req, res) => {
  const donation = new Donation({
    donationAmount: req.body.donationAmount,
    cardNumber: req.body.cardNumber,
    cardExpiry: req.body.cardExpiry,
    cvc: req.body.cvc,
    donationType: req.body.donateTo,
    donateTo: req.body.donateTo,
  });

  donation
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      isError(err, res);
    });
});

// app.post("/users", connectionChecker, (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     age: req.body.age,
//     password: req.body.password,
//     tel: req.body.tel,
//     email: req.body.email,
//     profilePic: "./client/build",
//   });

//   user
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       if (
//         typeof err === "object" &&
//         err !== null &&
//         err.name === "MongoNetworkError"
//       ) {
//         res.status(500).send("Internal server error");
//       } else {
//         log(err);
//         res.status(400).send("Bad Request");
//       }
//     });
// });

// app.get("/users", connectionChecker, (req, res) => {
//   User.find()
//     .then((user) => {
//       res.send(user);
//     })
//     .catch((err) => {
//       log(err);
//       res.status(500).send("Internal Server Error");
//     });
// });

app.delete("/users/:id", connectionChecker, authenticateAdmin, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  User.findByIdAndRemove(id)
    .then((user) => {
      if (!user) {
        res.status(404).send();
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      log(err);
      res.status(500).send("Internal Server Error");
    });
});

// app.put("/users/:id", connectionChecker, (req, res) => {
//   const id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//     res.status(404).send();
//     return;
//   }

//   User.findById(id)
//     .then((user) => {
//       if (!user) {
//         res.status(404).send();
//       } else {
//         user.password = req.body.password;
//         user.save();
//         res.send(user);
//       }
//     })
//     .catch((err) => {
//       res.status(500).send();
//     });
//   const change = {
//     name: req.body.name,
//     age: req.body.age,
//     tel: req.body.tel,
//     email: req.body.email,
//     profilePic: "./static/favicon.ico",
//   };

//   User.findByIdAndUpdate(id, { $set: change }, { new: true })
//     .then((user) => {
//       if (!user) {
//         res.status(404).send();
//       } else {
//         res.send(user);
//       }
//     })
//     .catch((err) => {
//       res.status(500).send();
//     });
// });

app.get("/users/homeowners", connectionChecker, authenticateAdmin, (req, res) => {
  User.find({ type: "Homeowner" })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      log(err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/users/frontliners", connectionChecker, (req, res) => {
  User.find({ type: "Customer" })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      log(err);
      res.status(500).send("Internal Server Error");
    });
});

//Get homes
app.get("/users/home", connectionChecker, (req, res) => {
  if (req.session.user && req.session.type === "Homeowner") {
    Home.find({ creator: req.session.user }).then(
      (homes) => {
        res.send(homes);
      },
      (err) => {
        res.status(400).send(err);
      }
    );
  } else {
    Home.find().then(
      (homes) => {
        res.send(homes);
      },
      (err) => {
        res.status(400).send(err);
      }
    );
  }
});

// app.get("/users/home/:id", connectionChecker, (req, res) => {
//   const id = req.params.id;
//   if (!ObjectID.isValid(id)) {
//     res.status(404).send;
//   }

//   Home.findById(id).then(
//     (home) => {
//       if (!home) {
//         res.status(404).send();
//       } else {
//         res.send(home);
//       }
//     },
//     (err) => {
//       res.status(500).send(err);
//     }
//   );
// });

// Add home
app.post(
  "/users/home",
  connectionChecker,
  authenticateHomeowner,
  multipartMiddleware,
  (req, res) => {
    if (!ObjectID.isValid(req.session.user)) {
      res.status(404).send("User not valid");
      console.log("hererer ere user not valid");
      return;
    }
    console.log(req.body);
    cloudinary.uploader.upload(req.files.image.path, function (result) {
      const home = new Home({
        address: req.body.address,
        zip: req.body.zip,
        pic: result.url,
        description: req.body.description,
        price: req.body.price,
        lat: req.body.lat,
        lng: req.body.lng,
        creator: req.session.user,
        user: req.session.name,
        tel: req.session.tel,
        email: req.session.email,
      });

      home.save().then(
        (home) => {
          res.send(home);
        },
        (err) => {
          res.status(400).send(err);
        }
      );
    });
  }
);

//Edit home
app.put(
  "/users/home/:homeid",
  connectionChecker,
  authenticateHomeowner,
  multipartMiddleware,
  (req, res) => {
    const homeid = req.params.homeid;

    if (!ObjectID.isValid(homeid)) {
      res.status(404).send("Home not valid");
      return;
    }

    cloudinary.uploader.upload(req.files.image.path, function (result) {
      const change = {
        address: req.body.address,
        zip: req.body.zip,
        pic: result.url,
        description: req.body.description,
        price: req.body.price,
        creator: req.session.user,
        user: req.session.name,
        tel: req.session.tel,
        email: req.session.email,
      };

      Home.findByIdAndUpdate(homeid, { $set: change }, { new: true })
        .then((home) => {
          if (!home) {
            res.status(404).send();
          } else {
            res.send(home);
          }
        })
        .catch((err) => {
          res.status(500).send();
        });
    });
  }
);

//Add interested home
app.post(
  "/users/interest/:homeid",
  connectionChecker,
  authenticateFrontliner,
  (req, res) => {
    const homeid = req.params.homeid;

    if (!ObjectID.isValid(req.session.user) || !ObjectID.isValid(homeid)) {
      res.status(404).send();
      return;
    }

    Home.findById(homeid)
      .then((home) => {
        if (!home) {
          res.status(404).send();
        } else {
          const change = { homes: home };
          User.findByIdAndUpdate(
            req.session.user,
            { $push: change },
            { new: true }
          )
            .then((home) => {
              if (!home) {
                res.status(404).send();
              } else {
                res.send(home);
              }
            })
            .catch((err) => {
              res.status(500).send();
            });
        }
      })
      .catch((err) => {
        res.status(500).send();
      });
  }
);

app.get("/users/interest", connectionChecker, authenticateFrontliner, (req, res) => {
  if (!ObjectID.isValid(req.session.user)) {
    res.status(404).send();
    return;
  }
  User.findById(req.session.user)
  .then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send(user.homes)
    }
  })
  .catch((err) => {
    res.status(401).send("Unauthorized");
  });

});

//Delete Route
app.delete(
  "/users/home/:homeid",
  connectionChecker,
  authenticateAdmin,
  (req, res) => {
    const homeid = req.params.homeid;

    if (!ObjectID.isValid(homeid)) {
      res.status(404).send();
      return;
    }

    Home.findByIdAndRemove(homeid)
      .then((home) => {
        if (!home) {
          res.status(404).send();
        } else {
          res.send(home);
        }
      })
      .catch((err) => {
        res.status(500).send();
      });
  }
);

//Tweeter page post route
app.post("/userTwitterFeed", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }
  const tweeter = new Tweeter({
    image: req.body.image,
    twitterMsgs: req.body.twitterMsgs,
  });
  tweeter
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      isError(err, res);
    });
});

//Tweeter page delete route
app.delete(
  "/userTwitterFeed/:tweeterid",
  connectionChecker,
  authenticate,
  (req, res) => {
    const tweeterid = req.params.tweeterid;

    if (!ObjectID.isValid(tweeterid)) {
      res.status(404).send();
      return;
    }

    Tweeter.findByIdAndRemove(tweeterid)
      .then((tweeter) => {
        if (!tweeter) {
          res.status(404).send();
        } else {
          res.send(tweeter);
        }
      })
      .catch((err) => {
        res.status(500).send();
      });
  }
);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}`);
});
