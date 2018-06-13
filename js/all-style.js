$(document).ready(function(){
	// For Mobile Menu
	$("#mobilemenu").click(function(){
		$("header .custnav ul.menus").slideToggle();
	});
	function nav(){
	    if ($(window).width() > 991) {
	        $("header .custnav ul.menus").css({"display":"block"});
	    }
	    else
	    {
	        $("header .custnav ul.menus").css({"display":"none"});
	    }
	}
	$(window).resize(function() {
		setTimeout(function(){nav();},0);
	});

	$("#imgslider, #projectslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        }
	    }
    });
    $("#fitemslider").owlCarousel({
    	center: true,
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1500:{
	            items:6,
	        }
	    }
    });
});
