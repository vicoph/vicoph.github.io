$(function() {
	
	dotsChange();
	menuBack();
	smoothScroll();
});

// $(document).ready(function() {
// 		$('#videoin').load();
// 		$('#videoin').play();
// 	});	




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
 
 function dotsChange() {
 		 	
 	$('.menuLight').parent().click(function() {
 		
 	    var $this = $(this).children('span'),
 	        $siblings = $this.parent().children(),
 	        position = $siblings.index($this);
 	        
 	    $this.first().removeClass('active-dot');
 	    $('.menuLight').removeClass('active-dot').eq(position);
 	    $this.addClass('active-dot');
 	  });
 }
	 
	 	 
// 	function movscroll(){
// 		$(window).bind("scroll",function(){
// 			var ubicaScroll = $(window).scrollTop();
//			var ubica0 = 0,
//				  ubica1 = $('#media').offset().top,
// 			// 					    ubica2 = $('#gran').offset().top,
// 			// 					    ubica3 = $('#prod').offset().top,
// 			// 					    ubica4 = $('#media').offset().top,
// 			// 					    ubica5 = $('#3ds').offset().top;
// 			 					
// 			 					
//			if (ubicaScroll >= ubica0){
//					$('.menuLight').removeClass('active-dot');
//					$('.menuLight').addClass('active-dot');				
//				}
//							
//			if (ubicaScroll >= ubica1){
//				$('.menuLight').removeClass('active-dot');
//				$('.menuLight').addClass('active-dot');				 							
//			}
// 		});		
// 	}
 					
 				 	
	
//		$('li.uno span.menuLight').css('background','white');
//		
//		$('.uno').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.uno span.menuLight').css('background','white');
//		});
//				
//		$('.dos').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.dos span.menuLight').css('background','white');
//		});
//		
//		$('.tres').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.tres span.menuLight').css('background','white');
//		});
//		
//		$('.cuatro').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.cuatro span.menuLight').css('background','white');
//		});
//		
//		$('.cinco').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.cinco span.menuLight').css('background','white');
//		});
//		
//		$('.seis').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.seis span.menuLight').css('background','white');
//		});
//		
//		$('.siete').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.siete span.menuLight').css('background','white');
//		});
//		
//		$('.ocho').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.ocho span.menuLight').css('background','white');
//		});
//		
//		$('.nueve').on("click", function(){
//			$('.menuLight').css('background','#fd0032');
//			$('li.nueve span.menuLight').css('background','white');
//		});

$("#intro").css("height", $(window).height());
$('#overlay').css('height', $(window).height());

function menuBack() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   	$("#main nav li").click(function() {
   	$("#sidebartoggler").prop('checked', false);
   	
   });
   document.getElementById("stream_vid").innerHTML='<img id="movie" class="stream" src="../assets/images/streamingp.jpg"	alt=""	/>';
   $('video').css('display', 'none')
  }
  else {
  	$('.section_vid').css('height', $(window).height());
  	
  }
}
		
		

