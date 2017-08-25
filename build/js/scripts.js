$( document ).ready(function() {
	
	$('.front-page-slider').unslider({
		arrows: false,
		autoplay: true,
		infinite: true,
		delay: 6000
	});

});

$(".header-navigation > ul > li:has(ul)").addClass("has-sub-menu");

$(".has-sub-menu > a").append("<i class='fa fa-caret-down inline-icon' aria-hidden='true'></i>");

$(".opening-times-container").click(function(){
	$(".opening-times-pop-out").toggleClass("open");
});

$(".opening-times-pop-out .close").click(function(){
	$(".opening-times-pop-out").removeClass("open");
});

$(".retailer-logo-container").hover(function(){
	$(this).find(".retailer-opening-hours").toggleClass("visible");
});
