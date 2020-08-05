const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const HomeSchema = new mongoose.Schema({
  address: String,
  city: String,
  province: String,
  country: String,
  zip: String,
  pic: String,
  description: String,
  price: Number,
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
  },
  age: {
    type: String,
    required: true,
    minlength: 1,
    validate: {
      validator: validator.isNumeric,
      message: "Not valid age",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
  tel: String,
  email: {
    type: String,
    required: true,
    minlength: 1,
    validate: {
      validator: validator.isEmail,
      message: "Not valid email",
    },
  },
  profilePic: String,
  homes: [HomeSchema],
  type: String,
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(19, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.statics.findByPassword = function (name, password) {
  const User = this;
  return User.findOne({ name: name }).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

UserSchema.statics.findByEmailPassword = function (email, password) {
  const User = this; // binds this to the User model

  // First find the user by their email
  return User.findOne({ email: email }).then((user) => {
    if (!user) {
      return Promise.reject(); // a rejected promise
    }
    // if the user exists, make sure their password is correct
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          console.log("resolved");
          resolve(user);
        } else {
          console.log("rejected");
          reject();
        }
      });
    });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = { User };
