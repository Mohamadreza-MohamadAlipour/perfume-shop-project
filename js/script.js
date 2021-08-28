$(document).ready(function () {
  $('#product-carousel').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    nav: true,
    smartSpeed: 1000,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      800: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })

  $('#testi-carousel').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    nav: true,
    smartSpeed: 1000,
    margin: 10,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })

  $('body').scrollspy({ target: '.navbar-nav' })
})
