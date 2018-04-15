'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var functions = require('./functions');

/*
 * Exported in 'functions.js' functions can be used here:
 * functions.exportName()
 */

$(function () {

	// Code goes here
	console.log($(document).height());
	$('.dotter-section').css('height', $(document).height() + 'px');
	
	
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
	}, 2000);
	
});
