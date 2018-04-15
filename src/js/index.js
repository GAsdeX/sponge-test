'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var functions = require('./functions');

/*
 * Exported in 'functions.js' functions can be used here:
 * functions.exportName()
 */

$(function () {

	// Code goes here
	
	var advantagesBlock   = document.querySelector('.site-content .advantages-section .container');
	var offerBlock        = document.querySelector('.site-content .offers-section .container .row');
	var firstTitleBlock   = document.querySelector('.site-content .head-section');
	var secondTitleBlock  = document.querySelector('.site-content .offers-section .section-title');
	
	
	// Preload animation
	// lists
	var advantages = new functions.animatedList('.site-content .advantages-section .container');
	var offers = new functions.animatedList('.site-content .offers-section .container .row');
	
	
	// titles
	var firstTitle =  new functions.animatedList('.site-content .head-section');
	var secondTitle = new functions.animatedList('.site-content .offers-section .section-title');
	
	advantages.initAnimation();
	offers.initAnimation();
	
	firstTitle.initSingleAnimation();
	secondTitle.initSingleAnimation();
	
	
	// childNodes
	
	$('.dotter-section').css('height', $(document).height() + 'px');
	
	window.addEventListener('scroll', function() {
		cheeckAnimations();
	});
	window.addEventListener('load', function() {
		setTimeout(function(){
			document.querySelector('.pre-loader').classList.remove('active');
			cheeckAnimations();
			
		}, 2000);
	});
	
	function cheeckAnimations() {
		var offsetY = window.pageYOffset + window.innerHeight;
		
		if (advantagesBlock.offsetTop < offsetY) {
			advantages.animateItestLoad();
		}
		if (firstTitleBlock.offsetTop < offsetY) {
			firstTitle.animateTitle();
		}
		if (offerBlock.offsetTop < offsetY) {
			offers.animateItestLoad();
		}
		if (secondTitleBlock.offsetTop < offsetY) {
			secondTitle.animateTitle();
		}
	}
	
	var $mobileMenu = $('.mobile-menu-wrapper');
	
	$('[data-mobile]').click(function(){
		$mobileMenu.addClass('active');
	});
	
	$mobileMenu.click(function(e){
		if($(e.target).closest('.mobile-menu-wrapper .mobile-menu-box').length == 0) {
			$mobileMenu.removeClass('active');
		}
	});
	
	setTimeout(function(){
		document.querySelector('.pre-loader').classList.remove('active');
		cheeckAnimations();
		
	}, 2000);
	
});
