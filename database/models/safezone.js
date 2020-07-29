const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    address: String,
    city: String,
    province: String,
    country: String,
    zip: String,
    pic: String,
    description: String,
    price: Number
});

const HomeownerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    tel: String,
    email: String,
    profilePic: String,
    posts: [HomeSchema]
});

const Homeowner = mongoose.model('Homeowner', HomeownerSchema);

module.exports = { Homeowner };