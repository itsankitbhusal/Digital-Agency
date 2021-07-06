
   $('.responsive').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
              prevArrow:"<button type='button' class='slick-prev control-c1 pull-left center'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
              nextArrow:"<button type='button' class='slick-next control-c2 pull-right center'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
              responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });