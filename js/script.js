
$(document).ready(function(){

  //Слайдер на главной странице
  $('.slider').slick({
      infinite: false,
      dots: true,
  });

  // Слайдер каталога
  $('.catalog__slider').slick({
        infinite: false,
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });


    // Меню бургер
    $('.burger').click(function() {
        $('.burger__nav').toggleClass('active')
    })
});