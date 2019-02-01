
	// Requires the main express library
const express = require('express'),
	
	http = require('http')

	url = require('url')

	path = require('path')
	// Creates app from the library
	app = express (),
	// Creates a session middleware for making cookie settings
	session = require('express-session'),
	// // enables use of pug for view engine
	// pug = require('gulp-pug'),
	// enables fs module for file operations
	fs = require('fs'),
	// extracts data from request stream and exposes it on req.body
	bodyParser = require('body-parser'),
	// Enables hashing of passwords
	passwordHash = require('password-hash'),
	// Accesses Postgres server
	pg = require('pg'),

	keyPublishable = process.env.PUBLISHABLE_KEY,
	keySecret = process.env.SECRET_KEY,

	

	// var gulp = require('gulp')

	// gulp.task('views', buildHTML => {
	// 	return gulp.src(__dirname+'/views/*.pug')
	// 	.pipe(pug())
	// })

	app.set('views', __dirname+'/public')
	// Sets view engine to pug
	// app.set('view engine', 'pug')
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

	.get('/', (req, res) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		res.render('index')
	})


	// .get('/music', (req, res) => {
	// 	res.render("music")
	// })

	// .get('/store', (req, res) => {
	// 	res.render("store")
	// })

	// .get('/media', (req, res) => {
	// 	res.render("media")
	// })

	// .get('/aboutus', (req, res) => {
	// 	res.render("aboutus")
	// })

	// .get('/contact', (req, res) => {
	// 	res.render("contact")
	// })


http.createServer(app).listen(8080, 'localhost')