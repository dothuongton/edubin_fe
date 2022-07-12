$(document).on('ready', function () {
    $(".img-slide").slick({
        
        dots: false,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,   
        autoplaySpeed:5000
    });
});

$(document).on('ready', function () {
    $(".platform_slide").slick({
        infinite:true,
        prevArrow: $('.platform_slide-prev'),
        nextArrow: $('.platform_slide-next'),
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});