function swiper_load(){
    for (let i = 0; i < document.getElementsByClassName("swiper").length; i++) {
        var swiper = new Swiper(".swiper-" + (i + 1), {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: true
            },
            keyboard: {
                enabled: true
            },
            spaceBetween: 100,
            loop: true,
            pagination: {
                el: ".swiper-pagination-" + (i + 1),
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next-" + (i + 1),
                prevEl: ".swiper-button-prev-" + (i + 1)
            }
        });
    }
}

$(document).ready(function(){
    swiper_load();
});