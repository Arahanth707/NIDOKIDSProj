$(document).ready(function() {
    // Header fixed and Back to top button
    $(window).scroll(function() {
        let headSlide = $('.upper-header').innerHeight();
        if ($(this).scrollTop() > 50) {
            $('.back-to-top').fadeIn('slow');
            $('.header').addClass('header-fixed');
            $('.upper-header').css({'margin-top': '-'+headSlide+'px'});
        } else {
            $('.back-to-top').fadeOut('slow');
            $('.header').removeClass('header-fixed');
            $('.upper-header').css({'margin-top': '0px'});
        }
    });



})