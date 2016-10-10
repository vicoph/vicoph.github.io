/*
	Class:    	dwProtector
	Author:   	David Walsh
	Website:    https://davidwalsh.name
	Version:  	1.0
	Date:     	08/03/2008
	Built For:  MooTools 1.2.0
	
	SAMPLE USAGE AT BOTTOM OF THIS FILE
	
*/


var dwProtector = new Class({

	//implements
	Implements: [Options],

	//options
	options: {
		image: 'blank.gif',
		elements: $$('img'),
		zIndex: 10
	},
	
	//initialization
	initialize: function(options) {
		//set options
		this.setOptions(options);
		
		//make it happen
		this.protect();
	},
	
	//a method that does whatever you want
	protect: function() {
		//for each image that needs be protected...
		this.options.elements.each(function(el) {
			//get the element's position, width, and height
			var size = el.getCoordinates();
			//create the protector
			var p = new Element('img', {
				src: this.options.image,
				width: size.width,
				height: size.height,
				styles: {
					'z-index': this.options.zIndex,
					'left': size.left + 'px',
					'top': size.top + 'px',
					'position': 'absolute'
				}
			}).inject($(document.body),'top');
		},this);
		
	}
});

/* sample usage */
/*
	//once the DOM is ready
	window.addEvent('domready', function() {
		var protector = new dwProtector({
			image: '/dw-content/blank.gif',
			elements: $$('.protect')
		});
	});
	
*/
