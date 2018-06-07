
	// Requires the main express library
const express = require('express'),
	
	http = require('http')

	path = require('path')
	// Creates app from the library
	app = express (),
	// Creates a session middleware for making cookie settings
	session = require('express-session'),
	// enables fs module for file operations
	fs = require('fs'),
	// extracts data from request stream and exposes it on req.body
	bodyParser = require('body-parser'),
	// Enables hashing of passwords
	passwordHash = require('password-hash'),
	// Accesses Postgres server
	pg = require('pg')


// app.set('views', __dirname+'/views')
   app.use('/', express.static(path.join(
		__dirname+"/public")))

	.use(session({
	  secret: 'secure as fuck',
	  saveUninitialized: false,
	  resave: false,
	  cookie: {
	  	secure: false,
	  	maxAge: 1000 * 60 * 60 * 60 * 60
	   }
	}))

	// Middleware that only parses urlencoded bodies
	.use(bodyParser.urlencoded({extended:true}))

	.use(express.json())
	.use(express.urlencoded({extended:true}))

	
	// Serves static files
	.use('/static', express.static(__dirname+"/static"))

	.use('/api', require('./routes/api').route)


http.createServer(app).listen(80, 'localhost')

// app.listen(8080, f=> {
// console.log('Server Running!')
// })