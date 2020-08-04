"use strict";
const log = console.log;
const path = require("path");

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

app.use("/js", express.static(path.join(__dirname, "/pub/js")));
app.use(express.static(__dirname + "/build"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
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

app.patch("/changeprofilepic", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  User.findOneAndUpdate(
    { name: req.body.name },
    { $set: req.body },
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
    donateTo,
  });

  donation
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

app.post("/users", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

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
app.post("/users/:id", (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    res.status(404).send()
    return
  }

  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  const home = {
    "homes": {
      address: req.body.address,
      city: req.body.city,
      province: req.body.province,
      country: req.body.country,
      zip: req.body.zip,
      pic: req.body.pic,
      description: req.body.description,
      price: req.body.price
    }
  }

  User.findByIdAndUpdate(id, { $push: home }, { new: true, useFindAndModify: false }).then((user) => {
    if (!user) {
      res.status(404).send("Resource not found")
    }
    else {
      res.send(user)
    }
  }).catch((err) => {
    isError(err, res)
  });
});

app.delete("/users/:id/:homeid", (req, res) => {
  const id = req.params.id
  const homeid = req.params.homeid

  if (!ObjectID.isValid(id) || !ObjectID.isValid(homeid)) {
    res.status(404).send()
    return
  }

  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  User.findById(id).then(user => {
    if (!user) {
      res.status(404).send("Resource not found")
    }
    else {
      const home = user.homes.id(homeid)
      if (!home) {
        res.status(404).send("Resource not found")
      }
      else {
        user.homes.pull(homeid)
        user.save().then(user => {
          res.send(user)
        }).catch((err) => {
          isError(err, res)
        })
      }
    }
  }).catch((err) => {
    isError(err, res)
  });

});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}`);
});