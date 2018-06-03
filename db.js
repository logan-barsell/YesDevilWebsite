// // Sets up a connection to communicate with the database 
// const Sequelize = require('sequelize')
// 	// Creates database 
// 	db = new Sequelize('shopdb', 'shopper', 'pass', {
// 		host: 'localhost',
// 		dialect: 'postgres',
// 		pool: {
// 			min: 0,
// 			max: 5,
// 		}
// 	})

// 	User = db.define('users', {
// 		id: {
// 			type: Sequelize.INTEGER,
// 			autoIncrement: true,
// 			primaryKey: true
// 		},
// 		name: {
// 			type: Sequelize.STRING,
// 			allowNull: false
// 		}
// 	})

// 	Product = db.define('products', {
// 		id: {
// 			type: Sequelize.INTEGER,
// 			autoIncrement: true,
// 			primaryKey: true
// 		},
// 		img: {
// 			type: Sequelize.STRING,
// 			allowNull: false
// 		},
// 		name: {
// 			type: Sequelize.STRING,
// 			allowNull: false
// 		},
// 		description: {
// 			type: Sequelize.STRING,
// 			allowNull: false
// 		},
// 		price: {
// 			type: Sequelize.FLOAT,
// 			allowNull: false,
// 			defaultValue: 0.0
// 		}
// 	})

// db.sync()
// 	.then(() => console.log("database has been synced"))
// 	.catch((err) => console.error("error creating database"))

// exports = module.exports = {
// 	User, Product
// }