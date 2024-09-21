var scroll_end = true;
$(window).scroll(function (){
    if (scroll_end){
        fadeAnime();
    }
});

$(document).ready(function() {
    $('[id*="copy"]').find('[class*="fade"]').addClass('fade-dupe');
});


function fadeAnime(){
    var only_once = true;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var margin;
    if (screenWidth < 767){
        // スマホ
        margin = -10;
    }else{
        // PC
        margin = 50;
    }

    $(".fadeUpTrigger").each(function (){
        var elemPos = $(this).offset().top + margin + 100;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeUp");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 170) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeUp");
        }
    });

    $(".fadeDownTrigger").each(function (){
        var elemPos = $(this).offset().top + margin;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeDown");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 50) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeDown");
        }
    });

    $(".fadeRightTrigger").each(function (){
        var elemPos = $(this).offset().top + margin;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeRight");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 50) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeRight");
        }
    });

    $(".fadeLeftTrigger").each(function (){
        var elemPos = $(this).offset().top + margin;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeLeft");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 50) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeLeft");
        }
    });

    $(".fadeRightLeftTrigger").each(function (){
        var elemPos = $(this).offset().top + margin;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeRightLeft");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 50) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeRightLeft");
        }
    });

    $(".fadeLeftRightTrigger").each(function (){
        var elemPos = $(this).offset().top + margin;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeLeftRight");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 50) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeLeftRight");
        }
    });

    $(".fadeCenterTrigger").each(function (){
        var elemPos = $(this).offset().top + margin;
        if(scroll >= elemPos - windowHeight){
            $(this).addClass("fadeCenter");
        }else if(!$(this).hasClass('fade-only-once') && scroll <= elemPos - (windowHeight + 50) && (!only_once || $(this).hasClass('fade-dupe'))){
            $(this).removeClass("fadeCenter");
        }
    });
}