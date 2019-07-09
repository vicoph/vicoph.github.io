$(function() {
	smoothScroll();
});
 
 $(window).scroll(function() {
 
 		//var ubica0 = 0;
 		var ubica1 = $('#info').offset().top;	
 		
    $("#logo, .sec-fo").css({'opacity' : 1-(($(this).scrollTop())/250)}); 
     
       
    $(window).bind("scroll",function(){
    
    	var ubicaScroll = $(window).scrollTop();
    	
	    if(ubicaScroll >= (ubica1)){
	    	$('#main').animate({top: "0px"}, 300);
	    	
	    }
  	});        
}); 

function smoothScroll() {
	$('a[href^="#"]').on('click', function(event) {
	
	    var target = $( $(this).attr('href') );
	
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 800);
	     }	
	});
 }

