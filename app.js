
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
	pg = require('pg'),

	keyPublishable = process.env.PUBLISHABLE_KEY,
	keySecret = process.env.SECRET_KEY,

	stripe = require("stripe")("sk_test_twTNGhW8q7c3a9Nnb3Truojt")


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


	


const product = stripe.products.create({
  name: 'Wristband',
  type: 'good',
  attributes: ['color', 'color2', 'text'],
  description: 'Yes Devil, The High Cost of Living Low',
});

// (async () => {
//   const sku1 = await stripe.skus.create({
//     currency: 'usd',
//     inventory: {'type': 'finite', 'quantity': 25},
//     price: 2,
//     product: 'Wristband',
//     attributes: {'color': 'black', 'color2': 'red', 'text':'Yes Devil The High Cost of Living Low'}
//   })
//   const sku2 = await stripe.skus.create({
//     currency: 'usd',
//     inventory: {'type': 'finite', 'quantity': 666},
//     price: 666,
//     product: 'devil',
//     attributes: {'the': 'devil', 'was': 'here'}
//   })
// })()


const apiKey = 'VcdkpUI3V1wRPTiRCdvuKQ'
const EasyPost = require('@easypost/api')

const api = new EasyPost(apiKey)

// set addresses
const toAddress = new api.Address({
  name: 'Dr. Steve Brule',
  street1: '179 N Harbor Dr',
  city: 'Redondo Beach',
  state: 'CA',
  zip: '90277',
  country: 'US',
  phone: '310-808-5243'
})

const fromAddress = new api.Address({
  name: 'Yes Devil',
  street1: '327 Cindy Ct.',
  street2: '',
  city: 'San Ramon',
  state: 'CA',
  zip: '94583',
  phone: '925-262-7761'
})

 // es5 with promises: 
// fromAddress.save().then(addr => {
//   console.log(addr.id)
// }).catch()



app.post('/charge', (req, res) => {
	const token = req.body.stripeToken
	const shipping = req.body.shipping
	const customer = req.body.customer
	const order = stripe.orders.create({
	  currency: 'usd',
	  email: customer.email,
	  items: [
	    {
	      object: 'Wristband',
	      type: 'good',
	      quantity: req.body.wbquantity,
	    },
	  ],
	  shipping: {
	    name: customer.firstName + ' ' + customer.lastName,
	    address: {
	      line1: shipping.inputAddress,
	      city: shipping.inputCity,
	      state: shipping.inputState,
	      postal_code: shipping.inputZip,
	      country: 'US',
	    },
	  },
	})
	const charge = stripe.charges.create({
		amount: req.body.wbquantity * 2 ,
		currency: 'usd',
		source: token,
		receipt_email: customer.email
	})
	// console.log(req.body.)
	res.redirect('/')
})


http.createServer(app).listen(8080, 'localhost')