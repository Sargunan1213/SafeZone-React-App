const mongoose = require("mongoose");

const mongoURI =
  process.env.MONGODB_URI ||
  "mongodb+srv://groupprojectcsc:airbnb_8@cluster0.wxw0z.mongodb.net/SafeZoneAPI?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log("Error connecting to mongodb, timeout reached");
  });

module.exports = { mongoose };
