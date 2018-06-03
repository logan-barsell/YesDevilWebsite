// const Product = require('../../db').Product 
// 	route = require('express').Router()


// route.get('/', (req, res) => {

// 	Product.findAll()
// 		.then((products) => {
// 			res.status(200).send(products)
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				error: "could not retrieve products"
// 			})
// 		})
// })


// 	.post('/', (req, res) => {
// 		// validating the values
// 		if (isNaN(req.body.price)) {
// 			return res.status(403).send({
// 				error: "price is not valid number"
// 			})
// 		}
// 		// adds new product
// 		Product.create({
// 			name: req.body.name,
// 			description: req.body.description,
// 			img: req.body.img,
// 			quantity: req.body.quantity,
// 			price: parsefloat(req.body.price)
// 		}).then((product) => {
// 			res.status(201).send(product)
// 		}).catch((error) => {
// 			res.status(501).send({
// 				error: "error adding product"
// 			})
// 		})
// 	})

// exports = module.exports = route