"use strict";
const log = console.log;
const path = require("path");
const fs = require('fs');
const express = require("express");
const app = express();

const cors = require("cors");

const { mongoose } = require("./database/mongoose");
mongoose.set("bufferCommands", false);

const { User } = require("./models/safezone");
const { Donation } = require("./models/donation");

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
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return
	} else {
		next()	
	}	
}

const authenticate = (req, res, next) => {
  log(req.session.user)
	if (req.session.user) {
		User.findById(req.session.user).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((err) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")
	}
}

// User routes below
app.post("/users", connectionChecker, (req, res) => {
  log(req.body);

  // Create a new user
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  // Save the user
  user.save().then(
    (user) => {
      res.send(user);
    },
    (error) => {
      res.status(400).send(error); // 400 for bad request
    }
  );
});

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
      res.status(400).send(error); // 400 for bad request
    }
  );
});

// A route to login and create a session
app.post("/login", connectionChecker, (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  log(email, password);
  // Use the static method on the User model to find a user
  // by their email and password
  User.findByEmailPassword(email, password)
    .then((user) => {
      // Add the user's id to the session cookie.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user._id;
      req.session.email = user.email;
      console.log(user);
      res.send({ currentUser: user });
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
app.patch("/changeprofilepic", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  User.findOneAndUpdate(
    { name: req.body.name },
    { $set: { "$.profilePic": req.profilePic } },
    { new: false }
  )
    .then((student) => {
      if (!student) {
        res.status(404).send();
      } else {
        res.send(student);
      }
    })
    .catch((error) => {
      res.status(400).send(); // bad request for changing the student.
    });
});

app.post("/donation", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }
  const donation = new Donation({
    donationAmount: req.body.donationAmount,
    cardNumber: req.body.cardNumber,
    cardExpiry: req.body.cardExpiry,
    cvc: req.body.cvc,
    donationType: req.body.cardNumber,
    donateTo: req.body.donateTo,
  });

  donation
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      isError(err, res);
      // I commented out the below codes as we can use the function instead.
      // if (
      //   typeof err === "object" &&
      //   err !== null &&
      //   err.name === "MongoNetworkError"
      // ) {
      //   res.status(500).send("Internal server error");
      // } else {
      //   log(err);
      //   res.status(400).send("Bad Request");
      // }
    });
});

app.post("/users", connectionChecker, (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    password: req.body.password,
    tel: req.body.tel,
    email: req.body.email,
    profilePic: "./static/favicon.ico",
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
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
    });
});

app.get("/users", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  User.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      log(err);
      res.status(500).send("Internal Server Error");
    });
});

// Add home to user
app.post("/users/home", connectionChecker, authenticate, (req, res) => {

  if (!ObjectID.isValid(req.session.user)) {
    res.status(404).send();
    return;
  }

  const home = {
    homes: {
      address: req.body.address,
      city: req.body.city,
      province: req.body.province,
      country: req.body.country,
      zip: req.body.zip,
      pic: { 
        data: fs.readFileSync(req.body.pic),
        type: "image/jpg"
        },
      description: req.body.description,
      price: req.body.price,
      creator: req.session.user
    },
  };
log(home)
  User.findByIdAndUpdate(
    req.session.user,
    { $push: home },
    { new: true, useFindAndModify: false }
  )
    .then((user) => {
      if (!user) {
        res.status(404).send("Resource not found");
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      isError(err, res);
    });
 });

//Edit home to user
app.put("/users/:id/:homeid", (req, res) => {
  const id = req.params.id;
  const homeid = req.params.homeid;

  if (!ObjectID.isValid(id) || !ObjectID.isValid(homeid)) {
    res.status(404).send();
    return;
  }

  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  User.findOneAndReplace(id, req.body, { new: true, useFindAndModify: false })
    .then((user) => {
      if (!user) {
        res.status(404).send("Resource not found");
      } else {
        const home = user.homes.id(homeid);
        if (!home) {
          res.status(404).send("Resource not found");
        } else {
          user.homes.pull(homeid);
          user
            .save()
            .then((user) => {
              res.send(user);
            })
            .catch((err) => {
              isError(err, res);
            });
        }
      }
    })

    .catch((err) => {
      isError(err, res);
    });
});

//Delete Route

app.delete("/users/:id/:homeid", (req, res) => {
  const id = req.params.id;
  const homeid = req.params.homeid;

  if (!ObjectID.isValid(id) || !ObjectID.isValid(homeid)) {
    res.status(404).send();
    return;
  }

  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send("Resource not found");
      } else {
        const home = user.homes.id(homeid);
        if (!home) {
          res.status(404).send("Resource not found");
        } else {
          user.homes.pull(homeid);
          user
            .save()
            .then((user) => {
              res.send(user);
            })
            .catch((err) => {
              isError(err, res);
            });
        }
      }
    })
    .catch((err) => {
      isError(err, res);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}`);
});
