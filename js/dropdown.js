let menuFilter = $(".menu-filter");
let menuTextSwitch = $(".open-mega-menu-filter span");
let menuSwitch = $(".product-filter-switch");
$(".sidebar-filter-top-category").click(function () {
  $(".sidebar-filter-categories-1").slideToggle();
  $(".sidebar-filter-top-category .icon-angle-down").toggleClass("active");
});
// $(".sidebar-filter-top-color").click(function () {
//     $(".sidebar-filter-categories-2").slideToggle();
//     $(".sidebar-filter-top-color .icon-angle-down").toggleClass("active");
// })
// $(".sidebar-filter-top-size").click(function () {
//     $(".sidebar-filter-categories-3").slideToggle();
//     $(".sidebar-filter-top-size .icon-angle-down").toggleClass("active");
// })
$(".sidebar-filter-top-price").click(function () {
  $(".sidebar-filter-categories-4").slideToggle();
  $(".sidebar-filter-top-price .icon-angle-down").toggleClass("active");
});

$(".open-mega-menu-filter").click(function () {
  menuFilter.toggleClass("active");
  if (menuFilter.hasClass("active")) {
    menuTextSwitch.text("OPEN");
    menuSwitch.css("border-color", "transparent");
  } else {
    menuTextSwitch.text("CLOSE");
    menuSwitch.css("border-color", "#eaeaea");
  }
});
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
