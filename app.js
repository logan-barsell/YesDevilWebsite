
	// Requires the main express library
const express = require('express'),
	
	http = require('http')

	url = require('url')

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


// app.set('views', __dirname+'/public')
   app.use(express.static(path.join(
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
		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            bb
		res.render("index")
	})

	.get('/home', (req, res) => {
		res.render("index")
	})

	

	.get('/products', (req, res) => {
		const allProducts = stripe.products.list( { limit: 3 }, (err, products) => {
			res.send(products)
		})
		
	})

	.post('/newCustomer', (req, res) => {
		const newCustomer = stripe.customers.create({
		  email: req.body.inputEmail,
		  source: "src_18eYalAHEMiOZZp1l9ZTjSU0",
		}, (err, customer) => {
			res.send(customer)
		})
	})



const wristband = stripe.products.create({
  name: 'Wristband',
  type: 'good',
  description: 'Yes Devil, The High Cost of Living Low',
  attributes: ['color', 'txt_color']
});





// (async () => {

//   const sku_1 = await stripe.skus.create({
//     currency: 'usd',
//     inventory: {'type': 'finite', 'quantity': 500},
//     price: 200,
//     product: 'prod_DLVedTElOKLEH9',
//     attributes: {'color': 'black', 'txt_color': 'red'}
//   })

// })().catch(console.log.bind(console))







app.post('/order', (req, res) => {

	const shipping = req.body.shipping_info
	const customer = req.body.customer_info

	console.log(customer, shipping)

	const order = stripe.orders.create({
	  currency: 'usd',
	  email: customer.email,
	  items: [
	    {
	      quantity: req.body.wbquantity,
	      type: 'sku',
	      parent: 'sku_DLWOgG7Z7LVWTe'
	    },
	  ],
	  shipping: {
	    name: customer.firstName + ' ' + customer.lastName,
	    address: {
	      line1: shipping.address,
	      city: shipping.inputCity,
	      state: shipping.inputState,
	      postal_code: shipping.inputZip,
	      country: 'US'
	    }
	  },
	}).catch(console.log.bind(console))

	res.send('hi')
})

 


.post('/charge', (req, res) => {
	const token = req.body.stripeToken
	
	if (req.body.wbquantity == 1) {
		const charge = stripe.charges.create({
			amount: 200,
			currency: 'usd',
			source: token,
			receipt_email: 'loganjbars@gmail.com'
		}).catch(console.log.bind(console))
	} else if (req.body.wbquantity == 2) {
		const charge = stripe.charges.create({
		amount: 400,
		currency: 'usd',
		source: token,
		receipt_email: 'loganjbars@gmail.com'
	}).catch(console.log.bind(console))
	} else if (req.body.wbquantity == 2) {
		const charge = stripe.charges.create({
		amount: 600,
		currency: 'usd',
		source: token,
		receipt_email: 'loganjbars@gmail.com'
	}).catch(console.log.bind(console))
	} else if (req.body.wbquantity == 2) {
		const charge = stripe.charges.create({
		amount: 800,
		currency: 'usd',
		source: token,
		receipt_email: 'loganjbars@gmail.com'
	}).catch(console.log.bind(console))
	} else if (req.body.wbquantity == 5) {
		const charge = stripe.charges.create({
		amount: 1000,
		currency: 'usd',
		source: token,
		receipt_email: 'loganjbars@gmail.com'
	}).catch(console.log.bind(console))
	} else {
		console.log("oh")
	}


	// console.log(req.body.)
	res.redirect('/')
})

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


http.createServer(app).listen(8080, 'localhost')