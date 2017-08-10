$( document ).ready(function() {
	
});

// Append dropdown indicator to menu items with submenus

// Target header-navigation element 
// Find any li item with a ul child
// Append the fontawesome caret down icon to the li element

$(".header-navigation > ul > li:has(ul)").addClass("has-sub-menu");
$(".has-sub-menu > a").append("<i class='fa fa-caret-down inline-icon' aria-hidden='true'></i>");
