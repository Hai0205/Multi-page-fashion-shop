window.addEventListener("load", () => {
  window.dispatchEvent(new Event("resize"));
});
$(document).ready(function () {
  $(".our-instagram-list-slick").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 800,
      //   settings: "unslick",
      // },
    ],
  });
  $(".carousel-slick").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $(".carousel-slick-single").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $(".slick-trending-style").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
  //page-product1
  $(".slick-show").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slick-tab",
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow' title='btn-slick'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow' title='btn-slick'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
  $(".slick-tab").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slick-show",
    focusOnSelect: true,
    arrows: false,
    infinite: false,
  });
  $(".slick-carousel").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });

  $(".slick-shop-kids").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
  });
  $(".slick-view-shop-kids").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,

    customPaging: function (silder, i) {
      i = i + 1;
      var countSilde = $(silder.$slides[i]).data();
      return '<a class="dots">' + i + "</a>";
    },
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i>Prev</button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'>Next<i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
  $(".slick-shop-men").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  });
});
const btnToggle = document.querySelector(".toggle-menu");
const overlayMenu = document.querySelector(".overplay-menu-mobile");
const menuMobile = document.querySelector(".navigation-menu");
const menuMobileWrap = document.querySelector(".menu-mobile");
const btnClose = document.getElementById("btn-close-menu");

function openMenu() {
  overlayMenu.classList.add("activeAnimation");
  menuMobile.classList.add("activeMenuSidebar");
  menuMobileWrap.classList.add("activeAnimation");
}

function closeMenu() {
  overlayMenu.classList.remove("activeAnimation");
  menuMobile.classList.remove("activeMenuSidebar");
  menuMobileWrap.classList.remove("activeAnimation");
}

btnToggle.onclick = function () {
  openMenu();
};

overlayMenu.onclick = function () {
  closeMenu();
};

btnClose.onclick = function () {
  closeMenu();
};
function toggleNav(click_id) {
  if (click_id == "toggle-cate") {
    $("#toggle-cate-item").toggle(500);
  } else if (click_id == "toggle-color") {
    $("#toggle-color-item").toggle(500);
  } else if (click_id == "toggle-size") {
    $("#toggle-size-item").toggle(500);
  } else if (click_id == "toggle-price") {
    $("#toggle-price-item").toggle(500);
  }
  //category & price
}

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
