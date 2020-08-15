const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const Image = new mongoose.Schema({
  data: Buffer,
  type: String,
});

const HomeSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    minlength: 1,
  },
  zip: {
    type: String,
    required: true,
    minlength: 1,
  },
  pic: String,
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  price: {
    type: Number,
    required: true,
    minlength: 1,
  },
  user: String,
  tel: String,
  lat: {
    type: Number,
    required: true,
    minlength: 1,
  },
  lng: {
    type: Number,
    required: true,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    validate: {
      validator: validator.isEmail,
      message: "Not valid email",
    },
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
  },
  username: {
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
  type: String,
  homes: [HomeSchema],
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.statics.findByPassword = function (username, password) {
  const User = this;
  return User.findOne({ username: username }).then((user) => {
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

const User = mongoose.model("User", UserSchema);
const Home = mongoose.model("Home", HomeSchema);

module.exports = { User, Home };
