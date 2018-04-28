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

	$('.oi-trash').click( f => {

		$('.oi-trash').parent().parent().parent().remove()
		
	})



	$('.merch1 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item1"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch2 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch3 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item3"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch4 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item4"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch5 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item5"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch6 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item6"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch7 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item7"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})

	$('.merch8 a').click( f => {
		$('.modal-body ul.list-group').append('<li class="list-group-item"><div class="row justify-content-around"><div class="col-auto"><div class="container"><img class="item-image" src="css/images/devil.jpg"></div><div class="item-name">Cras justo odio</div></div><div class="row"><div class="col-auto"><div class="form-group"><select class="form-control quantity" id="q4item8"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="col-auto item-cost">$10.00</div><div class="col-auto"><span class="oi oi-trash"></span></div></div></div></li>')
	})


	$('.oi-trash').click( f => {
		console.log('hello')
		$(this).parent().parent().parent().remove()
	})

	
	$('#merch .card a').click( f => {

		var items = $('.list-group').children().length
		if (items > 0) {
			$('.emptymsg').hide()
		} else {
			$('.emptymsg').show()
		}

	})


	// $('.newsletter').on('submit', e => {
	// 	e.preventDefault()
	// 	$('#thankyou').modal()
	// })

	// $('').click( f => {

	// 	var shirts = $('.quantity').children().val()
	// 	console.log(shirts)

	// })
	




})