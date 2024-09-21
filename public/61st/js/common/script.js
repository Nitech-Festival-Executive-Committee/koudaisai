//smooth scroll
var scroll_end = true;
$(function(){
    var pagetop = $('.page_top');
    pagetop.hide();
    $(window).scroll(function (){
		if (scroll_end){
			if ($(this).scrollTop() > 800){
				pagetop.fadeIn(500);
			}else{
				pagetop.fadeOut(500);
			}
		}
    });
    $('a[href^="#"]').click(function(){
        var time = 500;
		var top_margin = 90;
        $("html, body").animate({scrollTop:$($(this).attr("href") == "#" ? 'html' : $(this).attr("href")).offset().top - top_margin}, time, "swing");
        return false;
    });
});

//header
(function($){
	$(function(){
		var header = $(".start-style");
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll >= 200){
				header.removeClass('start-style').addClass("scroll-on");
			}else{
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Menu On Hover
	$('body').on('mouseenter mouseleave', '.nav-item', function(e){
		if ($(window).width() > 750){
			var _d = $(e.target).closest('.nav-item');
			_d.addClass('show');
			setTimeout(function(){
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			},1);
		}
	});
})(jQuery);

$(document).ready(function(){
	if (scroll_end){
		setTimeout(function(){
			sns_icon_appear();
		}, 300)
	}
});

function sns_icon_appear(){
	var sns_float_count = document.getElementsByClassName("pc-sns-iconbox").length - 1;
	var sns_float_target = 0;
	var sns_float = setInterval(function(){
		document.getElementsByClassName("pc-sns-iconbox")[sns_float_target].classList.add("fadeRightTrigger");
		fadeAnime();
		sns_float_target++;
		if (sns_float_target > sns_float_count){
			clearInterval(sns_float);
		}
	}, 150);
}