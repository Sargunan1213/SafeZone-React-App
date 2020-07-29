const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/SafeZoneAPI'

mongoose.connect(mongoURI, 
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
	.catch((err) => { 
		console.log('Error connecting to mongodb, timeout reached') 
	});

module.exports = {mongoose}