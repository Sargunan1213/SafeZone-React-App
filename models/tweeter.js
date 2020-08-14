const mongoose = require("mongoose");

const TweeterSchema = new mongoose.Schema({
    image: String,
    twitterMsgs: {
        type: String,
        required: true,
        minlength: 1,
    }

})


const Tweeter = mongoose.model("Tweeter", TweeterSchema)

module.exports = { Tweeter };