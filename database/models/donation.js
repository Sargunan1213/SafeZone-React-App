const mongoose = require("mongoose");

const Donation = mongoose.model("Donation", {
  donationAmount: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  cardExpiry: {
    type: String,
    required: true,
  },
  cvc: {
    type: Number,
    required: true,
  },
  donationType: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  donateTo: {
    type: String,
    required: true,
  },
});

module.exports = { Donation };
