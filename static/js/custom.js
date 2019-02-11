

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

	$('#navbarNavAltMarkup .navbar-nav').click( f => {
		$('#navbarNavAltMarkup').collapse('hide')
	})







	var windoww = $(window).width()

	if (windoww <= 992) {
			$('.nav.merchstore').css('top','81px')
			$('.nav.thcoll').css('top','81px')
			$('.nav.upcomingshows').css('top','81px')
			$('#blog .nav').css('top','81px')

		}
	if (windoww > 768) {
			$('#songs .list-group-item').addClass('d-flex')
		}

	if (windoww <= 768) {
		$('#songs .list-group-item').removeClass('d-flex')
	}

	$(window).resize( f => {
		var windoww = $(window).width() 

		// if (windoww <= 1200) {
		// 	$('.ghost').show()

		// }
		if (windoww <= 992) {
			$('.nav.thcoll').css('top','81px')
			$('.nav.merchstore').css('top','81px')
			$('.nav.upcomingshows').css('top','81px')
			$('#blog .nav').css('top','81px')
		} 
		console.log("nsdaf")

		if (windoww > 992) {
			$('.nav.thcoll').css('top','95.5px')
			$('.nav.merchstore').css('top','95.5px')
			$('.nav.upcomingshows').css('top','95.5px')
			$('#blog .nav').css('top','95.5px')
		}
		// }
		// i().css({windoww > 991) {
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





	var windowTop = $(window).scrollTop()
	var shows = $('.nav.upcomingshows')
	var showsNav = shows.offset().top - 95.5
	if (windowTop > showsNav && windoww > 992) {
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '95.5px', 'width': '100%'})
		}
	if (windowTop > showsNav && windoww <= 992) {
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '81px', 'width': '100%'})
		}

	// var carousel = $('.carousel')
	// var carouselHeight = carousel.height()
	// var shows = $('.nav.upcomingshows')
	// shows.css('margin-top', carouselHeight)

	$(window).scroll( f => {

		var windowTop = $(window).scrollTop()
		var showsNav = $('.nav.upcomingshows').offset().top - 95

		if (windowTop > showsNav && windoww > 992) {
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '95.5px', 'width': '100%'})
		}
		if (windowTop > showsNav && windoww <= 992) {
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '81px', 'width': '100%'})
		}

		// var carouselHeight = $('.carousel').height()

		// if()
		// shows.css('margin-top', carouselHeight)

	})










	// MEDIA.JS

	$('#videos').hide()

	$('.pictures').click( f=> {
		$('.nav-link').removeClass('active')
		$('.pictures').addClass('active')
		$('#pictures').show()
		$('#videos').hide()
	})

	$('.videos').click( f=> {
		$('.nav-link').removeClass('active')
		$('.videos').addClass('active')
		$('#videos').show()
		$('#pictures').hide()
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
	$('#credits').hide()

	$('.songs').click( f => {
		$('.album-tab .nav-link').removeClass('active')
		$('.songs').addClass('active')
		$('#songs').show()
		$('#lyrics').hide()
		$('#credits').hide()
	})

	$('.lyrics').click( f => {
		$('.album-tab .nav-link').removeClass('active')
		$('.lyrics').addClass('active')
		$('#lyrics').show()
		$('#songs').hide()
		$('#credits').hide()
	})

	$('.credits').click( f => {
		$('.album-tab .nav-link').removeClass('active')
		$('.credits').addClass('active')
		$('#lyrics').hide()
		$('#songs').hide()
		$('#credits').show()
	})


	$('#link2dfs').addClass('active')
	$('#lyrics .list-group-item').hide()
	$('#dfs').show()

	$('#songs').css('max-width','100%')

	

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

	



	// MERCH STORE JS


	// $.get('/products', (allProducts, status) => {
	// 	console.log(allProducts.data[0])
	// 	var wristband1 = allProducts.data[0]

	// })


	$('.shit button a').click( e => {
		e.preventDefault()
		window.open('https://itunes.apple.com/us/album/the-high-cost-of-living-low/1441189549', '_blank')
	})

	$('#buyalbum a').click( e => {
		e.preventDefault()
		window.open('https://itunes.apple.com/us/album/the-high-cost-of-living-low/1441189549', '_blank')
	})



	// function add2cart (product) {

	// 	if (product.name == "Wristbands") {
	// 		return $(`
	// 			<li id="wristband" class="list-group-item">
	// 				<div class="row justify-content-around">
	// 					<div class="col-auto">
	// 						<div class="container">
	// 							<img class="item-image" src="${product.img}">
	// 						</div>
	// 					</div>
	// 					<div class="row item-options">
	// 						<div class="col-auto">
	// 							<div class="form-group">
	// 								<select class="form-control quantity" id="item1">
	// 									<option value="1">1</option>
	// 									<option value="2">2</option>
	// 									<option value="3">3</option>
	// 									<option value="4">4</option>
	// 									<option value="5">5</option>
	// 								</select>
	// 							</div>
	// 						</div>

	// 						<div class="col-auto item-cost">$<span>${product.price}</span></div>

	// 						<div class="col-auto trash">
	// 							<img src="../static/css/images/trash.svg">
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</li>
	// 		`)
	// 	} else if (product.name == "Devil") {
	// 		return $(`
	// 			<li id="devil" class="list-group-item">
	// 				<div class="row justify-content-around">
	// 					<div class="col-auto">
	// 						<div class="container">
	// 							<img class="item-image" src="${product.img}">
	// 						</div>
	// 					</div>
	// 					<div class="row item-options">
	// 						<div class="col-auto">
	// 							<div class="form-group">
	// 								<select class="form-control quantity" id="item2">
	// 									<option value="1">1</option>
	// 									<option value="2">2</option>
	// 									<option value="3">3</option>
	// 									<option value="4">4</option>
	// 									<option value="5">5</option>
	// 								</select>
	// 							</div>
	// 						</div>

	// 						<div class="col-auto item-cost">$<span>${product.price}</span></div>

	// 						<div class="col-auto trash">
	// 							<img src="../static/css/images/trash.svg">
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</li>
	// 		`)
	// 	}

	// }

	// function confirmation (product) {

	// 	if (product.name == "Wristbands") {
	// 		return $(`
	// 			<li id="wristband-conf" class="list-group-item">
	// 				<div class="row justify-content-around">
	// 					<div class="col-auto">
	// 						<div class="container">
	// 							<img class="item-image" src="${product.img}">
	// 						</div>
	// 					</div>
	// 					<div class="row item-options">
	// 						<div class="howmany col-auto">
								
	// 						</div>

	// 						<div class="col-auto item-cost">$<span>${product.price}</span></div>

	// 					</div>
	// 				</div>
	// 			</li>
	// 		`)
	// 	} 

	// }



	// var products = []

	// var count = 0


	// $('.product a').click( e => {	


	// 	var count = Number($('.cart-button span').html())

	// 	var cartItems = $('#cart-items')

	// 	var item = $(e.target).parent().parent()

	// 	var itemImg = item.find('img').attr('src')

	// 	var itemName = item.find('.product-name').html()

	// 	var itemPrice = Number(item.find('.price span').html())

	// 	function Product(img, name, price) {
	// 		this.img = img
	// 		this.name = itemName
	// 		this.price = itemPrice
	// 	}

	// 	if(itemName == 'Wristbands') {
	// 		var wristband = new Product(itemImg, itemName, itemPrice)
	// 		products.push(wristband)
	// 		$('#addWristband').addClass('disabled').html('Added to Cart &nbsp &#10003')
	// 	} else if (itemName == 'Devil') {
	// 		var devil = new Product(itemImg, itemName, itemPrice)
	// 		products.push(devil)
	// 		$('#addDevil').addClass('disabled').html('Added to Cart &nbsp &#10003')
	// 	} 

	// 	var product = new Product(itemImg, itemName, itemPrice)

	// 	console.log(products)

	// 	cartItems.append(add2cart(product))

	// 	console.log(confirmation(product))

	// 	$('#billing-info #order-items').html(confirmation(product))



	// 	var items = $('#cart .list-group').children().length

	// 	if (items > 0) {
	// 		$('.emptymsg').hide()
	// 		$('.checkout').removeClass('disabled')
	// 	} else {
	// 		$('.emptymsg').show()
	// 		$('.checkout').addClass('disabled')
	// 	}

	// 	// var total = products.map(product => product.price).reduce((prev, next) => prev + next)

		
	// 	if ($('#item1').val() == undefined) {
	// 		var wbcost = 0
	// 	} else {
	// 		var wbcost = $('#item1').val() * 2
	// 	}

	// 	if ($('#item2').val() == undefined) {
	// 		var dcost = 0
	// 	} else {
	// 		var dcost = $('#item2').val() * 3
	// 	}

	// 	$('.total span').html(wbcost + dcost)

	// 	var finalprice = wbcost + dcost

			

	// 	$('#item1').change( f => {
	// 		$('.howmany').html('X' + $('#item1').val())
	// 		var wbcost = $('#item1').val() * 2
	// 		$('#wristband .item-cost span').html(wbcost)
	// 		$('#wristband-conf .item-cost span').html(wbcost)

	// 		if ($('#item2').val() == undefined) {
	// 			var dcost = 0
	// 		} else {
	// 			var dcost = $('#item2').val() * 3
	// 		}
			
			
	// 		console.log(wbcost, dcost, wbcost+dcost)
	// 		$('.total span').html(dcost + wbcost)
	// 	})

	// 	$('#item2').change( f => {
	// 		var dcost = $('#item2').val() * 3
	// 		$('#devil .item-cost span').html(dcost)

	// 		if ($('#item1').val() == undefined) {
	// 			var wbcost = 0
	// 		} else {
	// 			var wbcost = $('#item1').val() * 2
	// 		}
			
	// 		console.log(wbcost, dcost, wbcost+dcost)
	// 		$('.total span').html(dcost + wbcost)
	// 	})



	// 	count += 1

	// 	$('.cart-button span').html(count)

	// 	deleteItem(product, count)



	// })


	// var deleteItem = (product, count) => {
	// 	console.log(products)
	// 	$('.trash img').click( e => {

	// 		var cartItem = $(e.target).parent().parent().parent().parent()

	// 		cartItem.remove()

	// 		var items = $('#cart .list-group').children().length

	// 		if (items > 0) {
	// 			$('.emptymsg').hide()
	// 			$('.checkout').removeClass('disabled')
	// 		} else {
	// 			$('.emptymsg').show()
	// 			$('.checkout').addClass('disabled')
	// 		}
	// 		console.log(product)
	// 		console.log(products)
	// 		for (var i = products.length - 1; i >= 0; --i) {
	// 			console.log(product)
	// 		    if (products[i].name == product.name) {
	// 		        products.splice(i,1)
	// 		    }
	// 		}

	// 		console.log(products)

	// 		// var total = products.map(product => product.price).reduce((prev, next) => prev + next, 0)

	// 		if ($('#item1').val() == undefined) {
	// 			var wbcost = 0
	// 		} else {
	// 			var wbcost = $('#item1').val() * 2
	// 		}

	// 		if ($('#item2').val() == undefined) {
	// 			var dcost = 0
	// 		} else {
	// 			var dcost = $('#item2').val() * 3
	// 		}

	// 		$('.total span').html(wbcost + dcost)

	// 		count -= 1
	// 		console.log(count)
	// 		$('.cart-button span').html(count)
	// 		console.log(product)
	// 		if (cartItem.is('#wristband')) {
	// 			$('#addWristband').removeClass('disabled').html('Add to Cart')
	// 		} else if (cartItem.is('#devil')) {
	// 			$('#addDevil').removeClass('disabled').html('Add to Cart')
	// 		}

	// 	})
	// }

	// $('#breadcrumb').hide()
	// $('#personal-info').hide()
	// $('#shipping-info').hide()
	// $('#billing-info').hide()
	// $('#confirmation').hide()
	// $('#confirm').hide()
	// $('#cart .container').hide()

	// const wristband = {}

	// $('#section-1').submit( e => {

	// 	wristband.quantity = $('#item1.quantity').val()
	// 	$('.howmany').html('x ' + wristband.quantity)


	// 	e.preventDefault()
	// 	if (!$('#section-1 .checkout').hasClass('disabled')){
	// 		$('#section-1').hide()
	// 		$('#personal-info').show()
	// 		$('#breadcrumb').show()
	// 		$('#cart .container.orderInfo').show()
	// 		$('.breadcrumb-item').removeClass('active')
	// 		$('#personal.breadcrumb-item').addClass('active')
	// 	}
	// })

	// $('#personal-info .previous').click( e => {

	// 	e.preventDefault()
	// 	$('#personal-info').hide()
	// 	$('#section-1').show()
	// 	$('#breadcrumb').hide()
	// 	$('#cart .container.orderInfo').hide()

		

	// })

	

	// $('#personal-info').submit( e => {

	// 	$.post('/newCustomer', (customer, status) => {
	// 		console.log(customer)
	// 	})

	// 	const subtotal = wristband.quantity * 200



		
		

	// 	e.preventDefault()
	// 	$('#personal-info').hide()
	// 	$('#shipping-info').show()
	// 	$('.breadcrumb-item').removeClass('active')
	// 	$('#shipping.breadcrumb-item').addClass('active')
	// 	$('#paymentButton').remove()
	// 	$('#billing-info .nextPrev').append(`
	//     	<form action="/charge" method="POST" id="paymentButton">
	// 		  <script
	// 		    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
	// 		    data-key="pk_test_K3QH6a1oie72u4tR9dHKMj1I"
	// 		    data-amount=${subtotal}
	// 		    data-currency="usd"
	// 		    data-name="Yes Devil"
	// 		    data-description="Billing Information"
	// 		    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
	// 		    data-locale="auto"
	// 		    data-email=${customer.email}
	// 		    data-allow-remember-me="false"
	// 		    >
	// 		  </script>
			  
	// 		</form>

	// 	`)

	// })

	// function ajaxPost (customer, shipping){
    	
 //    	// DO POST
 //    	$.ajax({
	// 		type : "POST",
	// 		contentType : "application/json",
	// 		url: "/order",
	// 		data : JSON.stringify(customer, shipping),
	// 		dataType : 'json',
	// 		success : data => {
	// 			console.log(data)
	// 		},
	// 		error : e => {
	// 			console.log("ERROR: ", e)
	// 		}
	// 	})
 //    }

	// const shipping = {}

	// $('#shipping-info').submit( e => {
	// 	shipping.address = $('#inputAddress').val()
	// 	shipping.city = $('#inputCity').val()
	// 	shipping.state = $('#inputState').val()
	// 	shipping.zip = $('#inputZip').val()
	// 	shipping.aptSuite = $('#aptSuite').val() 

	// 	e.preventDefault()
	// 	$('#shipping-info').hide()
	// 	$('#billing-info').show()
	// 	$('.breadcrumb-item').removeClass('active')
	// 	$('#billing.breadcrumb-item').addClass('active')

	// 	// ajaxPost(shipping, customer)

	// 	$.post('/order', {customer_info: customer, shipping_info: shipping, order_info: wristband}, res => {
	// 		console.log("hello")
	// 	})
	// })

	// $('#shipping-info .previous').click( f => {
	// 	$('#shipping-info').hide()
	// 	$('#personal-info').show()
	// 	$('.breadcrumb-item').removeClass('active')
	// 	$('#personal.breadcrumb-item').addClass('active')
		
	// })


	// $('#billing-info .previous').click( f => {
	// 	$('#billing-info').hide()
	// 	$('#shipping-info').show()
	// 	$('.breadcrumb-item').removeClass('active')
	// 	$('#shipping.breadcrumb-item').addClass('active')
	// })


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