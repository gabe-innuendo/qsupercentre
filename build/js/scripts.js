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
})

$(".header-navigation > ul > li:has(ul)").addClass("has-sub-menu");

$(".has-sub-menu > a").append("<i class='fa fa-caret-down inline-icon' aria-hidden='true'></i>");

$(".opening-times-container").click(function(){
	$(".opening-times-pop-out").toggleClass("open");
});

$(".opening-times-pop-out .close").click(function(){
	$(".opening-times-pop-out").removeClass("open");
});

$(".retailer-logo-container img").hover(function(){
	$(this).find(".retailer-opening-hours").toggleClass("visible");
});

$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".main-header").addClass("smaller");
        $(".logo-container img").addClass("smaller");
    }

    if (scroll <= 99) {
        $(".main-header").removeClass("smaller");
        $(".logo-container img").removeClass("smaller");
    }
});