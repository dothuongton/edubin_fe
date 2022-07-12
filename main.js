$(document).on('ready', function () {
    $(".img-slide").slick({
        
        dots: true,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed:700
    });
});
  