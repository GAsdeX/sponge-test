'use strict';

var $ = require('jquery');

module.exports = {
	/*
	 * Functions to be exported go here. Format:
	 * exportName: functionName
	 */
	animatedList: animatedList
	
};

// Code goes here

function animatedList(el) {
	this.items = function(){
		return(document.querySelector(el));
	};
	this.initAnimation = function() {
		var block = Object.values(document.querySelector(el).childNodes);
		
		block.map(function(item) {
			item.classList.add('pre-animation');
		});
	};
	this.initSingleAnimation = function() {
		document.querySelector(el).classList.add('animate');
	};
	this.animateTitle = function() {
		// scale-in
		document.querySelector(el).classList.add('scale-in');
		
	};
	
	this.animateItestLoad = function () {
		interval(this.items(), 400);
	};
	
};

function interval(el, interval) {
	var counter =     0;
	var blockLength = el.childElementCount;
	var block =       Object.values(el.childNodes);
	var isChecked = block.some(function(item){
		var classes = Object.values(item.classList);
		console.log(classes);
		return classes.indexOf('animate') != -1;
	});
	
	console.log(isChecked);
	
	if (!isChecked) {
		var blockInterval = setInterval(function() {
			if (counter < blockLength) {
				block[counter].classList.add('animate');
				block[counter].classList.add('top-down');
				console.log(counter);
				counter++;
			} else {
				console.log('break');
				clearInterval(blockInterval);
			}
		}, interval);
	}
}