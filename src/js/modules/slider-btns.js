$(document).ready(function(){
    function slidersBtns(slideBox, target) {
      $(slideBox).each(function() {
         if ($(this).hasClass(target)) {
             $(this).removeClass('d-none');
         } else {
             $(this).addClass('d-none');
         }
     });
     }
    
      $('.view__btn').removeClass('btn-active');
          $('.view__btn').click(function() {
              $(this).addClass('btn-active');
    
              if ($(this).hasClass('new_products_btn')) {
                  slidersBtns('.trending__box_content', 'trending__new_products');
              } else if ($(this).hasClass('top_selling_btn')) {
                  slidersBtns('.trending__box_content', 'trending__top-selling');
              } else  if ($(this).hasClass('featured_btn')) {
                  slidersBtns('.trending__box_content', 'trending__featured');
              } 
    
          $('.view__btn').not(this).removeClass('btn-active');
          initSlick('.trending__box');
    
      });
    
    });