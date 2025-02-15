// init Isotope
var $products = $('.all-products').isotope({
  // options
  originLeft: false,
  filter: '.new',
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $products.isotope({ filter: filterValue });

  // Remove 'active' class from all buttons and add to the clicked button
  $('.filter-button-group .btn').removeClass('active');
  $(this).addClass('active');
});


// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 25,
    // },
  },
});