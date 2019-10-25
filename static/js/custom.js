

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
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('.link2music').click( f => {
		$('#home').hide()
		$('#music').show()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('.link2merch').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').show()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('.link2blog').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').show()
		$('#aboutus').hide()
		$('#contact').hide()
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('.link2aboutus').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').show()
		$('#contact').hide()
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('.link2contact').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').show()
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('.link2cart').click( f => {
		$('#home').hide()
		$('#music').hide()
		$('#merch').hide()
		$('#blog').hide()
		$('#aboutus').hide()
		$('#contact').hide()
		document.body.scrollTop = document.documentElement.scrollTop = 0
	})

	$('#navbarNavAltMarkup .navbar-nav').click( f => {
		$('#navbarNavAltMarkup').collapse('hide')
	})







	var windoww = $(window).width()

	if (windoww <= 992) {
			$('.nav.merchstore').css('top','88px')
			$('.nav.thcoll').css('top','88px')
			$('.nav.upcomingshows').css('top','81px')
			$('#blog .nav').css('top','88px')

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
			$('.nav.thcoll').css('top','88px')
			$('.nav.merchstore').css('top','88px')
			$('.nav.upcomingshows').css('top','81px')
			$('#blog .nav').css('top','88px')
			console.log("nsdaf")
		} 
		

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
			console.log("IMHERE")
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '81px', 'width': '100%'})
		}

	$(window).scroll( f => {
		
		var windoww = $(window).width() 

		var windowTop = $(window).scrollTop()
		var showsNav = $('.nav.upcomingshows').offset().top - 95

		if (windowTop > showsNav && windoww > 992) {
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '95.5px', 'width': '100%'})
		}
		if (windowTop > showsNav && windoww <= 992) {
			console.log("hello")
			$('.nav.upcomingshows').css({'position':'sticky', 'z-index': '1', 'top': '81px', 'width': '100%'})
		}


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


	$('.lv').hide()
	$('.bv').hide()

	$('.live').click( f => {
		$('.live').addClass('select')
		$('.mvids').removeClass('select')
		$('.vlogs').removeClass('select')
		$('.lv').show()
		$('.bv').hide()
		$('.mv').hide()
	})

	$('.vlogs').click( f => {
		$('.live').removeClass('select')
		$('.mvids').removeClass('select')
		$('.vlogs').addClass('select')
		$('.lv').hide()
		$('.bv').show()
		$('.mv').hide()
	})

	$('.mvids').click( f => {
		$('.live').removeClass('select')
		$('.mvids').addClass('select')
		$('.vlogs').removeClass('select')
		$('.lv').hide()
		$('.bv').hide()
		$('.mv').show()
	})
	





	$('.shit button a').click( e => {
		e.preventDefault()
		window.open('https://itunes.apple.com/us/album/the-high-cost-of-living-low/1441189549', '_blank')
	})

	$('#buyalbum a').click( e => {
		e.preventDefault()
		window.open('https://itunes.apple.com/us/album/the-high-cost-of-living-low/1441189549', '_blank')
	})



	

	//Defers video loading until after rest of the page finishes loading
	// function init() {
	// var vidDefer = document.getElementsByTagName('iframe')
	// console.log(vidDefer.length)
	// for (var i=0; i<vidDefer.length; i++) {
	// if(vidDefer[i].getAttribute('data-src')) {
	// vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'))
	// } } }
	// window.onload = init

	function init() {
		var vidDefer = document.getElementsByTagName('iframe')
		var iframes = Array.prototype.slice.call(vidDefer)
		iframes.forEach(function(iframe) {
			if(iframe.getAttribute('data-src')) {
				iframe.setAttribute('src',iframe.getAttribute('data-src'))
			}
		})
	}
	window.onload = init






















})