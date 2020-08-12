const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    tennantName:{
        type: String,
        required: true,
        minlength: 1
    },
    propertyAddress: {
        required: true,
        minlength: 1,
    },
    tennantReview:{
        required: true,
        minlength: 1,
    },

    teamEmailReveiw:{
        type: String,
        minlength: 1,
    }

})


const Feedback = mongoose.model("Feedback", TweeterSchema)

module.exports = { Feedback };