'use strict';

var functions = require('./functions');

/*
 * Exported in 'functions.js' functions can be used here:
 * functions.exportName()
 */

(function () {

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
	
	document.querySelector('.dotter-section').style.height = document.body.scrollHeight + 'px';
	
	window.addEventListener('scroll', function() {
		checkAnimations();
	});
	window.addEventListener('load', function() {
		setTimeout(function(){
			checkAnimations();
			
		}, 2000);
	});
	
	function checkAnimations() {
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
	
	var mobileMenu = document.querySelector('.mobile-menu-wrapper');
	
	document.querySelector('[data-mobile]').addEventListener('click', function() {
		mobileMenu.classList.add('active');
	});
	mobileMenu.addEventListener('click', function(e){
		var isBackground = e.target.closest('.mobile-menu-wrapper .mobile-menu-box');
		
		if (!isBackground) {
			mobileMenu.classList.remove('active');
		}
	});
	
	
	setTimeout(function(){
		document.querySelector('.pre-loader').classList.remove('active');
		
	}, 2000);
	
})();
