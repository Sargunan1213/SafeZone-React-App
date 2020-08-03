"use strict";
const log = console.log;
const path = require("path");

const express = require("express");
const app = express();

const cors = require("cors");

const { mongoose } = require("../database/mongoose");
mongoose.set("bufferCommands", false);

const { Homeowner } = require("../database/models/safezone");
const { Donation } = require("../database/models/donation");

const { ObjectID } = require("mongodb");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.use("/js", express.static(path.join(__dirname, "/pub/js")));

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

app.post("/homeowner", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  const homeowner = new Homeowner({
    name: req.body.name,
    age: req.body.age,
    password: req.body.password,
    tel: req.body.tel,
    email: req.body.email,
    profilePic: "./static/favicon.ico",
  });

  homeowner
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

app.get("/homeowner", (req, res) => {
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  }

  Homeowner.find()
    .then((homeowners) => {
      res.send({ homeowners });
    })
    .catch((err) => {
      log(err);
      res.status(500).send("Internal Server Error");
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}`);
});
