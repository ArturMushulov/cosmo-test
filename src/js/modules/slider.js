$(document).ready(function(){
    $('.slider__slides').slick({
        infinite: false
    });
    $('.trending__box').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        infinite: false,
        responsive: [
          {   
            breakpoint: 1601,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
            },
            {
              
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });
    $('.brand__bar_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
            breakpoint: 1601,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
            },
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
              },
            {
              breakpoint: 730,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.special__box').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
              breakpoint: 1601,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });
    $('.blogs__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    });
});