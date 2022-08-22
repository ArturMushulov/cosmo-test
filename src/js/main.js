$(document).ready(function(){
    $('.slider__slides').slick({
        infinite: false
    });
    var slider = $('.trending__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        infinite: false,
        responsive: [
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
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
              breakpoint: 730,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.special__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
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

    $('.new_products_btn').click(function() {
        $('.trending__box_content').each(function() {
            if ($(this).hasClass('trending__new_products')) {
                $(this).removeClass('d-none');
                slider.slick('reinit');
            } else {
                $(this).addClass('d-none');
            }
        });
    });

    function slidersBtns(slideBox, target) {
        $(slideBox).each(function() {
            if ($(this).hasClass(target)) {
                $(this).removeClass('d-none');
                slider.slick('reinit');
            } else {
                $(this).addClass('d-none');
            }
        });
    }

    $('.view__btn').removeClass('btn-active');
    $('.view__btn').click(function() {
        slider.slick('reinit');
        $(this).addClass('btn-active');

        if ($(this).hasClass('new_products_btn')) {
            slidersBtns('.trending__box_content', 'trending__new_products');
        } else if ($(this).hasClass('top_selling_btn')) {
            slidersBtns('.trending__box_content', 'trending__top-selling');
        } else  if ($(this).hasClass('featured_btn')) {
            slidersBtns('.trending__box_content', 'trending__featured');
        }

        $('.view__btn').not(this).removeClass('btn-active');
    });

    $(window).scroll(function() {
    let height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
    });

    $(document).ready(function() {
        $("#back2Top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });
});








