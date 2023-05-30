$(function(){

    $('.slider-blog__inner').slick({
    dots:true,

    });

    $('.menu__btn').on('click', function(){
        $('.header__top-inner').toggleClass('.header__top-inner--active');
    });

    var mixer = mixitup('.portfolio__content')
});