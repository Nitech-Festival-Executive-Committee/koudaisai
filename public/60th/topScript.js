$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false,
        flag     = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
    $(window).off('.noScroll');
    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');

        if (!flag) {
            // スクロール禁止
            // $(window).on('touchmove.noScroll', function(e) {
            //     e.preventDefault();
            // });
            $('body,html').css({"overflow":"hidden","height":"100%"});
            flag = true;
        } else {
            // スクロール禁止 解除
            // $(window).off('.noScroll');
            $('body,html').css({"overflow":"visible","height":"auto"});
            flag = false;
        }
    });
});


$(document).ready(function () {
    // Lift card and show stats on Mouseover
    $('.card').hover(function(){
            $(this).addClass('animate');
        }, function(){
            $(this).removeClass('animate');
    });
});

var mySwiper = new Swiper ('.swiper-container', {
    effect: "slide",
    autoplay: 4000,
    autoplayDisableOnInteraction: false,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides : true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
})