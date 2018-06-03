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

		if (windoww <= 1200) {
			$('.ghost').show()

		}
		if (windoww <= 992) {
			$('.ghost').hide()

		}
		if (windoww > 991) {
			$('.ghost').show()

		}
		if (windoww > 1200) {
			$('.ghost').hide()

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

		return $(`
			<li class="list-group-item">
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

						<div class="col-auto item-cost">$${product.price}</div>

						<div class="col-auto trash">
							<img src="../static/css/images/trash.svg">
						</div>
					</div>
				</div>
			</li>
		`)

	}


	var products = []



	$('.product a').click( e => {

	

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
		} else if (itemName == 'Devil') {
			var devil = new Product(itemImg, itemName, itemPrice)
			products.push(devil)
		} 

		var product = new Product(itemImg, itemName, itemPrice)
	
		// products.push(new Product(itemImg, itemName, itemPrice))

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

		var total = products.map(product => product.price).reduce((prev, next) => prev + next)

		$('.total span').html(total)





	})

	$('.trash img').click( e => {

			var cartItem = $(e.target).parent().parent().parent().parent()
			console.log(cartItem)
			cartItem.remove()

			var items = $('#cart .list-group').children().length
			console.log(items)

			if (items > 0) {
				$('.emptymsg').hide()
				$('.checkout').removeClass('disabled')
			} else {
				$('.emptymsg').show()
				$('.checkout').addClass('disabled')
			}

			 
			for (var i = products.length - 1; i >= 0; --i) {
				console.log(itemName)
			    if (products[i].name == itemName) {
			        products.splice(i,1);
			    }
			}

			console.log(products)

			var total = products.map(product => product.price).reduce((prev, next) => prev + next, 0)

			$('.total span').html(total)

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




















})