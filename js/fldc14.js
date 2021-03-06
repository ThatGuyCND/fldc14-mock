$(document ).ready(function() {

	// Necessary because IE10 and 11 do not support conditionals.
	if ($.browser.msie && $.browser.version == 10) {
	$("html").addClass("ie10");
	}

	if ($.browser.msie && $.browser.version == 11) {
	$("html").addClass("ie11");
	}  	

	$(window).scroll(function(){

		// Resize the header on scroll

		if($(window).scrollTop() >= $('#site-title').outerHeight()) {
			$( "#site-title" ).addClass( "scroll-down" );
			$( "#header-menu" ).addClass( "scroll-down" );
			$( "#hero" ).addClass( "scroll-down" );
		}

		if($(window).scrollTop() < $('#site-title').outerHeight()) {
			$( "#site-title" ).removeClass( "scroll-down" );
			$( "#header-menu" ).removeClass( "scroll-down" );
			$( "#hero" ).removeClass( "scroll-down" );
		}	

		// Slide in the location box on front page

		if($(window).scrollTop() >= $('#location-info').outerHeight()) {
			$( "#location-info" ).addClass( "scroll-down" );
		}	

		if($(window).scrollTop() < $('#location-info').outerHeight()) {
			$( "#location-info" ).removeClass( "scroll-down" );
		}				
	
	});

	// Show the mobile menu
	$('#mobile-menu').click(function(){

		$('#header-menu').toggleClass('header-menu-active');
		$('#mobile-menu').toggleClass('mobile-menu-active');

	});	

	// Expand sub-menus for mobile navigation
 	$('#primary-menu .expanded').click(function(){

		$(this).toggleClass('expanded-active');

		if( $(window).width() < 900 ) {
			$('ul',this).slideToggle();
		}
                 
    });

	// IE does not handle the aspect ratios of scaling SVGs, so this fixes it
	if ($.browser.msie && $.browser.version >= 9) {
		
	    var img = document.getElementById('main-img'); 
		var width = img.clientWidth;
		var height = width * 0.906;  // the ratio of width to height of the drupal diver svg
		$("#main-img").css("height", height);

	}

});

