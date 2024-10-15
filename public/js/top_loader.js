var top_loader_finished = false;
var scroll_end = false;

$(document).ready(function(){
  //履歴移動, 同一ドメイン内移動 -> true / ページ更新, 外部サイト -> false
  if ((window.performance.navigation.type == 2) || ((window.performance.navigation.type == 0) && (window.location.hostname == (document.referrer ? new URL(document.referrer).hostname : null)))){
    $(".svganimeblock svg path").css("opacity", "0");
    $(".svganimeblock svg path").css("transition", "0s");
    setTimeout(function(){
      $(".svganimeblock svg path").css("stroke-dashoffset", "0");
      $(".svganimeblock svg path").css("fill-opacity", "1");
      svg_fill();
    }, 1)
    setTimeout(function(){
      $(".svganimeblock svg path").css("transition", "opacity 1.2s");
      $(".svganimeblock svg path").css("opacity", "1");
      setTimeout(function(){
        top_loader_finish();
      }, 1000)
    }, 100)
  }else{
    setTimeout(function(){
      $(".loading-text").css("opacity", "0");
      setTimeout(function(){
        $(".skip-button").css("opacity", "1");
      }, 500)
      $(".skip-button").click(function(){
        if (!top_loader_finished){
          top_loader_finished = !top_loader_finished;
          top_loader_finish();
        }
      });
    }, 100);
  }
});

function top_loader_start(){
  setTimeout(function(){
    setTimeout(function(){
      setTimeout(function(){
        if (!top_loader_finished){
          top_loader_finished = !top_loader_finished;
          top_loader_finish();
        }
      }, 1500);
      svg_fill();
    }, 2450);
    $(".svganimeblock svg path").css("stroke-dashoffset", "0");
  }, 300);
}

function svg_fill(){
  $(".loader_blue").each(function (){
    $(this).css("fill", "#4285f4");
    $(this).css("stroke", "#4285f4");
  });
  $(".loader_red").each(function (){
    $(this).css("fill", "#ea4335");
    $(this).css("stroke", "#ea4335");
  });
  $(".loader_yellow").each(function (){
    $(this).css("fill", "#fbbc05");
    $(this).css("stroke", "#fbbc05");
  });
  $(".loader_green").each(function (){
    $(this).css("fill", "#34a853");
    $(this).css("stroke", "#34a853");
  });
  $(".svganimeblock svg path").css("fill-opacity", "1");
}

function top_loader_finish(){
  $("body").css("overflow", "auto");
  setTimeout(function(){
    setTimeout(function(){
      setTimeout(function(){
        setTimeout(function(){
          sns_icon_appear();
        }, 300)
        $(".top-loader").css("display", "none");
      }, 500)
    }, 200)
    $(".canvas").css("opacity", "1");
    scroll_end = true;
    fadeAnime();
    }, 100);
  $(".top-loader > *").css("opacity", "0");
  $("header, main, footer").css("opacity", "1");
}

