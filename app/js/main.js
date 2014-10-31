'use strict';

/*global $*/
$(function() {
	var	win = $(window),
		windowWidth = win.width(),
		body = document.body,
		timer,
		nav = $('#nav'),
		navEl = $('#nav ul'),
		navToggle = $('#menu-toggle'),
		navOpen = false,
		closeNav = $('#closeNav');

	/*
	Lazy Images
	*/

	$('.lazy').lazyload({
		threshold : $(window).height() *2.5,
		effect : 'fadeIn',
		failure_limit : 30
	});

	/*
	Set up scrolling navigation
	*/

	// No more repaint craziness
	window.addEventListener('scroll', function() {
	  clearTimeout(timer);
	  if(!body.classList.contains('disable-hover')) {
	    body.classList.add('disable-hover')
	  }

	  timer = setTimeout(function(){
	    body.classList.remove('disable-hover')
	  },500);
	}, false);

	navToggle.click(function(e){
		e.preventDefault;
		navEl.hide();

		if (navOpen == false) {
			nav.slideDown('fast');
			navEl.fadeIn('slow');
			navOpen = true;
		}
		else {
			nav.slideUp('fast');
			navOpen = false;
		}
		navToggle.toggleClass('active');
	});

	closeNav.click(function(e){
		e.preventDefault;
		navEl.fadeOut('fast');
		if (navOpen == true) {
			nav.slideUp('fast');
			navOpen = false;
		}
		navToggle.toggleClass('active');
	});

	$('#nav').find('a').not('.blog').not('.language').click(function(e){
		var where = $(this).attr('href').replace('/', '');
		e.preventDefault();
		$.scrollTo('#' + where, 2000);
	});

	// Timeout Function for Mobile NAV
	if(windowWidth <= 1025) { $('#logo').fitText(0.8, { minFontSize: '60px', maxFontSize: '100px' }); }

	//Ajax

	$('.ajax').magnificPopup({
	  type: 'ajax',
	  callbacks: {
	  	beforeOpen: function() {
	  		console.log('hey!');
	  		//body.hide();
	  		//$(body).addClass('noscroll');
	  	},
	  	close: function() {
	  		console.log('ho!');
	  		//$(body).addClass('noscroll');
	  	}
	  },
	  alignTop: true,
	  overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	// Lazy Load Action
	$('.more').click(function(windowWidth, e){
		e.preventDefault();

		var nextAlbum = $('div.block').eq(1).find('li:first-of-type');

		if(windowWidth <= 680) {
			alert('m!');
			$('div.block').fadeIn(function(){
				$.scrollTo(nextAlbum,500);
			});
		}

		else {
			nextAlbum = $('div.block').eq(2).find('li:first-of-type');
			$('div.block').fadeIn(function(){
				$.scrollTo(nextAlbum,500);
			});
		}
		$(document.body).scroll();
		$(this).fadeOut('slow');
	});



	/*
	LetteringJS
	*/

	//$('.letteringjs-words').lettering('words');
	//$('.letteringjs-lines-words').lettering('lines').children('span').lettering('words');
});

//$('.letteringjs-lines-words').lettering('lines').children('span').lettering('words');



