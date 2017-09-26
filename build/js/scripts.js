$( document ).ready(function() {
	
	$('.front-page-slider').unslider({
		arrows: false,
		autoplay: true,
		infinite: true,
		delay: 6000
	});

});

$("#hamburger-menu").click(function(){
	$(this).toggleClass('open');
	$('.mobile-navigation').toggleClass('visible');
})

$(".header-navigation > ul > li:has(ul)").addClass("has-sub-menu");
$(".mobile-navigation > ul > li:has(ul)").addClass("has-sub-menu");

$(".has-sub-menu > a").append("<i class='fa fa-caret-down inline-icon' aria-hidden='true'></i>");

// Mobile submenu toggle
$(".mobile-navigation .has-sub-menu").click(function(){
	$(this).find("ul").toggleClass("active");
})

$(".opening-times-block").click(function(){
	$(".opening-times-pop-out").toggleClass("open");
});

$(".mobile-header .clock-icon").click(function(){
	$(".opening-times-pop-out").toggleClass("open");
});

$(".opening-times-pop-out .close").click(function(){
	$(".opening-times-pop-out").removeClass("open");
});

$(".retailer-logo-container img").hover(function(){
	$(this).parent().find(".retailer-opening-hours").toggleClass("visible");
});

$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $(".main-header").addClass("smaller");
        $(".logo-container img").addClass("smaller");
    }

    if (scroll <= 59) {
        $(".main-header").removeClass("smaller");
        $(".logo-container img").removeClass("smaller");
    }
});