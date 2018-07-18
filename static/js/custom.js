$(document).ready( f => {


	$('#music').hide()
	$('#merch').hide()
	$('#blog').hide()
	$('#aboutus').hide()
	$('#contact').hide()

	$('.link2home').click( f => {
		$('#home').show()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
	})

	$('.link2music').click( f => {
		$('#home').hide()
		$('#music').show()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
	})

	$('.link2merch').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').show()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
	})

	$('.link2blog').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').show()
		$('#aboutus').hide()
		$('#contact').hide()
	})

	$('.link2aboutus').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').show()
		$('#contact').hide()
	})

	$('.link2contact').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').show()
	})

	$('.link2cart').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
	})



	$(window).resize( f => {
		var windoww = $(window).width() 

		// if (windoww <= 1200) {
		// 	$('.ghost').show()

		// }
		// if (windoww <= 992) {
		// 	$('.ghost').hide()

		// }
		// if (windoww > 991) {
		// 	$('.ghost').show()

		// }
		// if (windoww > 1200) {
		// 	$('.ghost').hide()

		// }

		if (windoww > 768) {
			$('#songs .list-group-item').addClass('d-flex')
		}

		if (windoww <= 768) {
			$('#songs .list-group-item').removeClass('d-flex')
		}
	})







	// $('.merch2 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })

	// $('.merch3 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })

	// $('.merch4 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })

	// $('.merch5 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })

	// $('.merch6 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })

	// $('.merch7 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })

	// $('.merch8 a').click( f => {
	// 	$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="../static/css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row item-options"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="item1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto trash"><img src="../static/css/images/trash.svg"></div></div></div></li>')
	// })




	
	$('#lyrics').hide()

	$('.songs').click( f => {
		$('.nav-link').removeClass('active')
		$('.songs').addClass('active')
		$('#songs').show()
		$('#lyrics').hide()
	})

	$('.lyrics').click( f => {
		$('.nav-link').removeClass('active')
		$('.lyrics').addClass('active')
		$('#lyrics').show()
		$('#songs').hide()
	})



	// $('.quantity option').click( f => {
	// 	$()
	// })

	// $('.quantity option.selected').val()

	
	
	// $('.newsletter').on('submit', e => {
	// 	e.preventDefault()
	// 	$('#thankyou').modal()
	// })

	// $('').click( f => {

	// 	var shirts = $('.quantity').children().val()
	// 	console.log(shirts)

	// })
	



	// MERCH STORE JS


	function add2cart (product) {

		if (product.name == "Wristbands") {
			return $(`
				<li id="wristband" class="list-group-item">
					<div class="row justify-content-around">
						<div class="col-auto">
							<div class="container">
								<img class="item-image" src="${product.img}">
							</div>
						</div>
						<div class="row item-options">
							<div class="col-auto">
								<div class="form-group">
									<select class="form-control quantity" id="item1">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>

							<div class="col-auto item-cost">$<span>${product.price}</span></div>

							<div class="col-auto trash">
								<img src="../static/css/images/trash.svg">
							</div>
						</div>
					</div>
				</li>
			`)
		} else if (product.name == "Devil") {
			return $(`
				<li id="devil" class="list-group-item">
					<div class="row justify-content-around">
						<div class="col-auto">
							<div class="container">
								<img class="item-image" src="${product.img}">
							</div>
						</div>
						<div class="row item-options">
							<div class="col-auto">
								<div class="form-group">
									<select class="form-control quantity" id="item2">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>

							<div class="col-auto item-cost">$<span>${product.price}</span></div>

							<div class="col-auto trash">
								<img src="../static/css/images/trash.svg">
							</div>
						</div>
					</div>
				</li>
			`)
		}

	}



	var products = []

	var count = 0


	$('.product a').click( e => {	


		var count = Number($('.cart-button span').html())

		var cartItems = $('#cart-items')

		var item = $(e.target).parent().parent()

		var itemImg = item.find('img').attr('src')

		var itemName = item.find('.product-name').html()

		var itemPrice = Number(item.find('.price span').html())

		function Product(img, name, price) {
			this.img = img
			this.name = itemName
			this.price = itemPrice
		}

		if(itemName == 'Wristbands') {
			var wristband = new Product(itemImg, itemName, itemPrice)
			products.push(wristband)
			$('#addWristband').addClass('disabled').html('Added to Cart &nbsp &#10003')
		} else if (itemName == 'Devil') {
			var devil = new Product(itemImg, itemName, itemPrice)
			products.push(devil)
			$('#addDevil').addClass('disabled').html('Added to Cart &nbsp &#10003')
		} 

		var product = new Product(itemImg, itemName, itemPrice)

		console.log(products)

		cartItems.append(add2cart(product))



		var items = $('#cart .list-group').children().length

		if (items > 0) {
			$('.emptymsg').hide()
			$('.checkout').removeClass('disabled')
		} else {
			$('.emptymsg').show()
			$('.checkout').addClass('disabled')
		}

		// var total = products.map(product => product.price).reduce((prev, next) => prev + next)

		
		if ($('#item1').val() == undefined) {
			var wbcost = 0
		} else {
			var wbcost = $('#item1').val() * 2
		}

		if ($('#item2').val() == undefined) {
			var dcost = 0
		} else {
			var dcost = $('#item2').val() * 3
		}

		$('.total span').html(wbcost + dcost)

		var finalprice = wbcost + dcost

			

		$('#item1').change( f => {

			var wbcost = $('#item1').val() * 2
			$('#wristband .item-cost span').html(wbcost)

			if ($('#item2').val() == undefined) {
				var dcost = 0
			} else {
				var dcost = $('#item2').val() * 3
			}
			
			
			console.log(wbcost, dcost, wbcost+dcost)
			$('.total span').html(dcost + wbcost)
		})

		$('#item2').change( f => {
			var dcost = $('#item2').val() * 3
			$('#devil .item-cost span').html(dcost)

			if ($('#item1').val() == undefined) {
				var wbcost = 0
			} else {
				var wbcost = $('#item1').val() * 2
			}
			
			console.log(wbcost, dcost, wbcost+dcost)
			$('.total span').html(dcost + wbcost)
		})



		count += 1

		$('.cart-button span').html(count)

		deleteItem(product, count)



	})


	var deleteItem = (product, count) => {
		console.log(products)
		$('.trash img').click( e => {

			var cartItem = $(e.target).parent().parent().parent().parent()

			cartItem.remove()

			var items = $('#cart .list-group').children().length

			if (items > 0) {
				$('.emptymsg').hide()
				$('.checkout').removeClass('disabled')
			} else {
				$('.emptymsg').show()
				$('.checkout').addClass('disabled')
			}
			console.log(product)
			console.log(products)
			for (var i = products.length - 1; i >= 0; --i) {
				console.log(product)
			    if (products[i].name == product.name) {
			        products.splice(i,1)
			    }
			}

			console.log(products)

			// var total = products.map(product => product.price).reduce((prev, next) => prev + next, 0)

			if ($('#item1').val() == undefined) {
				var wbcost = 0
			} else {
				var wbcost = $('#item1').val() * 2
			}

			if ($('#item2').val() == undefined) {
				var dcost = 0
			} else {
				var dcost = $('#item2').val() * 3
			}

			$('.total span').html(wbcost + dcost)

			count -= 1
			console.log(count)
			$('.cart-button span').html(count)
			console.log(product)
			if (cartItem.is('#wristband')) {
				$('#addWristband').removeClass('disabled').html('Add to Cart')
			} else if (cartItem.is('#devil')) {
				$('#addDevil').removeClass('disabled').html('Add to Cart')
			}

		})
	}

	$('#breadcrumb').hide()
	$('#personal-info').hide()
	$('#shipping-info').hide()
	$('#billing-info').hide()
	$('#confirmation').hide()
	$('#confirm').hide()
	$('#cart .container').hide()

	const product = {}
	$('#section-1').submit( e => {

		product.name = $('#firstName').val()
		product.lastname = $('#lastName').val()
		e.preventDefault()
		if (!$('#section-1 .checkout').hasClass('disabled')){
			$('#section-1').hide()
			$('#personal-info').show()
			$('#breadcrumb').show()
			$('#cart .container.orderInfo').show()
			$('.breadcrumb-item').removeClass('active')
			$('#personal.breadcrumb-item').addClass('active')
		}
	})

	$('#personal-info .previous').click( e => {

		e.preventDefault()
		$('#personal-info').hide()
		$('#section-1').show()
		$('#breadcrumb').hide()
		$('#cart .container.orderInfo').hide()

	})

	$('#personal-info').submit( e => {
		e.preventDefault()
		$('#personal-info').hide()
		$('#shipping-info').show()
		$('.breadcrumb-item').removeClass('active')
		$('#shipping.breadcrumb-item').addClass('active')

	})

	$('#shipping-info').submit( e => {
		e.preventDefault()
		$('#shipping-info').hide()
		$('#billing-info').show()
		$('.breadcrumb-item').removeClass('active')
		$('#billing.breadcrumb-item').addClass('active')
	})

	$('#shipping-info .previous').click( f => {
		$('#shipping-info').hide()
		$('#personal-info').show()
		$('.breadcrumb-item').removeClass('active')
		$('#personal.breadcrumb-item').addClass('active')
	})

	$('#billing-info').submit( f => {
		$('#billing-info').hide()
		$('#breadcrumb').hide()
		$('#confirmation').show()
		$('#confirm').show()
		$('.breadcrumb-item').removeClass('active')
	})

	$('#billing-info .previous').click( f => {
		$('#billing-info').hide()
		$('#shipping-info').show()
		$('.breadcrumb-item').removeClass('active')
		$('#shipping.breadcrumb-item').addClass('active')
	})

	$('#confirmation .previous').click( f => {
		$('#confirmation').hide()
		$('#confirm').hide()
		$('#billing-info').show()
		$('#breadcrumb').show()
		$('.breadcrumb-item').removeClass('active')
		$('#billing.breadcrumb-item').addClass('active')
	})



	// function fetchProducts (done) {
	// 	$.get('/api/products', data => {
	// 		done(data)
	// 	})
	// }

	

	// $(function () {

	// 	let cartItems = $('#cart-items')

	// 	fetchProducts(function (products) {
	// 		for (product of products) {
	// 			cartItems.append(add2cart(product))
	// 		}
	// 	})
	// })

	// function addProduct (price, img, done) {
	// 	$.post('/api/products', {
	// 		price: price,
	// 		img: img
	// 	}, function (data) {
	// 		done(data)
	// 	})
	// }

	$('#link2cs').addClass('active')
	$('#lyrics .list-group-item').hide()
	$('#cowboysong').show()

	

	$('#link2dfs').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#dfs').show()
		
		$('#lyrics .nav-link').removeClass('active')
		$('#link2dfs').addClass('active')

	})

	$('#link2ss').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#sosick').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2ss').addClass('active')

	})

	$('#link2brk').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#break').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2brk').addClass('active')

	})

	$('#link2gas').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#giveitashot').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2gas').addClass('active')

	})

	$('#link2d2d').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#d2d').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2d2d').addClass('active')

	})

	$('#link2cl').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#candlelight').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2cl').addClass('active')

	})

	$('#link2mp').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#mindpollution').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2mp').addClass('active')

	})

	$('#link2ls').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#loosescrew').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2ls').addClass('active')

	})

	$('#link2cs').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#cowboysong').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2cs').addClass('active')

	})

	$('#link2sm').click( f => {

		$('#lyrics .list-group-item').hide()
		$('#smokeandmirrors').show()

		$('#lyrics .nav-link').removeClass('active')
		$('#link2sm').addClass('active')

	})






















})