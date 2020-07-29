'use strict';
const log = console.log
const path = require('path')

const express = require('express')
const app = express()

const { mongoose } = require('../database/mongoose')
mongoose.set('bufferCommands', false);

const { Homeowner } = require('../database/models/safezone')

const { ObjectID } = require('mongodb')

const bodyParser = require('body-parser') 
app.use(bodyParser.json())

app.use("/js", express.static(path.join(__dirname, '/pub/js')))

app.post('/homeowner', (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const homeowner = new Homeowner({
        name: req.body.name,
        age: req.body.age,
        password: req.body.password,
        tel: req.body.tel,
        email: req.body.email,
        profilePic: ''
	})

	homeowner.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		if (typeof error === 'object' && error !== null && error.name === "MongoNetworkError") { 
			res.status(500).send('Internal server error')
		} else {
			log(error)
			res.status(400).send('Bad Request') 
		}
	})
})


const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
});
