$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      320: {
        items: 2,
        dots: false,
      },

      767: {
        items: 3,
        dots: false,
      },
      990: {
        items: 4,
        dots: false,
      },
      1200: {
        items: 5,
      },
    },
  });
});
