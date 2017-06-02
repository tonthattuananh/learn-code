jQuery(document).ready(function($) {
	var window_width = $(window).width();

	// One page scroll animation
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  $(".nav-main.in").collapse("toggle", 1000);
	  $('body .navbar-toggle').addClass('collapsed');
	  var target = $(this.hash);
	  target = target.length ? target : $('[name="' + this.hash.slice(1) +'"]');
	  if (target.length) {
	      $('html,body').animate({
	      scrollTop: target.offset().top - $(".navbar .navbar-header").height()
	      }, 800);
	      return false;
	  }
	}
	});

	// Begin script - Hide menu when click outsite navbar
	$('body').click(function() {
		$(".nav-main.in").collapse("toggle", 1000);
		$('body .navbar-toggle').addClass('collapsed');
	});

	$('html').on('touchstart', function(e) {
	  $(".nav-main.in").collapse("toggle", 1000);
	})
	$(".navbar-collapse").on('touchstart',function(e) {
	  e.stopPropagation();
	});
	  

	$(window).scroll(function(event){
		$(".nav-main.in").collapse("toggle", 1000);
		$('body .navbar-toggle').addClass('collapsed');
	});
	// End script - Hide menu when click outsite navbar


    // Detect scroll for navbar-topbar
    $(window).scroll(function (event) {
        var height = $(window).scrollTop();   
        var isSmallWidth = ($(window).width() < 1281);  
        if (height >= 40 && !isSmallWidth) {            
            $('.topbar-info').addClass("fixed");
            $('.fluid.main-section').addClass("fixed");
        } else {          
            $('.topbar-info').removeClass("fixed");
            $('.fluid.main-section').removeClass("fixed");
        }
    });


    // Detect scroll for sidebar
    $(window).scroll(function (event) {
        var height = $(window).scrollTop();   
        var width = $(window).width();   
        var footer_height = $('#page-footer').outerHeight();
        console.log(footer_height);

        var isSmallWidth = (width < 961);     
        if(width > 1280) {
        	sidebar_vp = 640;
        } else {
        	sidebar_vp = 500;
        }

        if (height >= sidebar_vp && !isSmallWidth) {
            $('.sidebar-wrapper').addClass("fixed");
        } else {          
            $('.sidebar-wrapper').removeClass("fixed");
        }

        if($(window).scrollTop() + $(window).height() == $(document).height()) {
	    	$('.sidebar-wrapper').addClass("bottom");
	    } else {
	    	$('.sidebar-wrapper').removeClass("bottom");	
	    }
    });


	// ScrollSpy for sidebar secondary page
	$("body").scrollspy({
		target: ".sidebar-wrapper",
		offset: 110
	});

	$('.sub-menu-col ul').each( function() {
		var count = $(this).children().length;
		
		if(count < 1) {
			$(this).parent().hide();
		}
	});


	// Show and hide sub menu
	function show_hide_sub_menu() {
	if ( !(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) && window_width > 1280 ) {
	  $("ul.navbar-nav").mouseenter(function(){
	  	console.log('hi');
	    if($(".sub-menu-wrapper").is(':hidden')) {
	      $(".sub-menu-wrapper").hide();
	      $(".sub-menu-wrapper").removeClass('is_popup');
	      $(".sub-menu-wrapper").fadeIn('slow').addClass('is_popup');
	    }
	  });
	  var myTimeout;
	  $('ul.navbar-nav').mouseleave(function() {
	    myTimeout = setTimeout(function() {
	      if($(".sub-menu-wrapper.is_hover").length == 0) {
	        $(".sub-menu-wrapper").fadeOut();
	      }
	    }, 700);
	  }).mouseenter(function() {
	    clearTimeout(myTimeout);
	  });
	  $('.sub-menu-wrapper').mouseenter(function(){
	    $(this).addClass('is_hover');
	    $(this).unbind('mouseleave');
	    $(this).bind('mouseleave', function(){
	      $(this).fadeOut('slow');
	      $(this).removeClass('is_hover');
	    });
	  });
	}
	}

	show_hide_sub_menu();
	$(window).bind('resize', function() {
		show_hide_sub_menu();
	});


	// Calculate the amount of px an element (height) is in viewport
	function inViewport($el) {
	    var elH = $el.outerHeight(),
	        H   = $(window).height(),
	        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
	    return Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H));
	}

	$(window).on("scroll resize", function(){
	  console.log( inViewport($('#page-footer')) ); // n px in viewport
	});

});