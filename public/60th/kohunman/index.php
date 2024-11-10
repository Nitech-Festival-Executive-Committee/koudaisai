#! /usr/local/bin/php-cgi
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
    <meta http-equiv="Content-Language" content="ja"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="author"　content="名古屋工業大学第60回工大祭実行委員会"/>
    <meta name="copyright" content="Copyright (C) 2022 名古屋工業大学第59回工大祭実行委員会 All Rights Reserved."/>
    <meta name="keywords"　content="工大祭,第60回工大祭,名工祭,名古屋工業大学,名工大"/>
    <meta name="description" content="名古屋工業大学の大学祭ー「工大祭」の公式HP! 第60回工大祭は2022年11月19日(土)・20日(日)に開催します!! 是非お越しください!!"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minmum-scale=1.0">
    <link rel="shortcut icon" href="http://www.koudaisai.com/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet prefetch" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://mplus-webfonts.sourceforge.jp/mplus_webfonts.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="./css/pc.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/pc.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/tablet.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/smart.css" rel="stylesheet" type="text/css" media="all" />
    <link rel="shortcut icon" href="https://www.koudaisai.com/favicon.ico">
    <link rel="apple-touch-icon" href="https://www.koudaisai.com/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="https://www.koudaisai.com/android-chrome-192x192.png">
    <script type="text/javascript" src="js/jquery.rwdImageMaps.min.js"></script>
<script type="text/javascript" src="js/jquery.rwdImageMaps.js"></script>
<script>
$(function(){
    $('img[usemap]').rwdImageMaps();
});
</script>
    <!--<link href="./css/point.css" rel="stylesheet" type="text/css" media="all" />-->
    <title>落単古墳マン-第60回工大祭ホームページ</title>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>

<style>
    #container{
            /*background-image: url("../ppc/img/ppc1.png");*/
            background-size:cover;
        }
        .white {
            background: rgba(255,255,255,0.5);
            height: 100%;
        }
        .bar_box{
            /*background-image: url("../ppc/img/ppc1.png");*/
            background-size:cover;
        }
    @media (min-width: 600px) {
        #parent {
            display: flex;
        }
        #child1 {
            flex-grow: 1;
        }
        #child2 {
            flex-grow: 1;
        }
    }
</style>
<body>
    <div id="wrapper">
        <div class="navbar navbar-inverse navbar-fixed-top" id="menu">
                <a href="../index.php">
                    <input type="image" src="../img/topiconImg.png" alt="工大祭ホームページ" id="rogo">
                </a>

                <ul id="menu-bar">
               
                <a href="../yoyaku">
                    <li>
                        <i class="fa fa-book fa-example fa-fw" aria-hidden="true"></i>
                        <p class="menutext">ご予約</p>
                    </li>
                </a>

<a href="../about">
                    <li>
                        <i class="fa fa-question fa-example fa-fw" aria-hidden="true"></i>
                        <p>工大祭とは？</p>
                    </li>
                </a>
                <a href="../news">
                    <li>
                        <i class="fa fa-commenting fa-example fa-fw" aria-hidden="true"></i>
                        <p>最新情報</p>
                    </li>
                </a>
                <a href="../project">
                    <li>
                        <i class="fa fa-university fa-example fa-fw" aria-hidden="true"></i>
                        <p>企画一覧</p>
                    </li>
                </a>
                <a href="../tt">
                    <li>
                        <i class="fa fa-table fa-example fa-fw" aria-hidden="true"></i>
                        <p>タイムテーブル</p>
                    </li>
                </a>
                
                <a href="../access">
                    <li>
                        <i class="fa fa-map-marker fa-example fa-fw" aria-hidden="true"></i>
                        <p>会場</p>
                    </li>
                </a>
                <a href="../kohunman">
                    <li>
                        <i class="fa fa-smile-o fa-example fa-fw" aria-hidden="true"></i>
                        <p>落単古墳マン</p>
                    </li>
                </a>
                <a href="../com">
                    <li>
                        <i class="fa fa-handshake-o fa-example fa-fw" aria-hidden="true"></i>
                        <p>企業の方へ</p>
                    </li>
                </a>
                <a href="../inquiry">
                    <li>
                        <i class="fa fa-envelope fa-example fa-fw" aria-hidden="true"></i>
                        <p>お問い合わせ</p>
                    </li>
                </a>
                <a href="../link">
                    <li>
                        <i class="fa fa-link fa-example fa-fw" aria-hidden="true"></i>
                        <p>協賛企業</p>
                    </li>
                </a>
                <a href="../daisai">
                    <li>
                        <i class="fa fa-users fa-example fa-fw" aria-hidden="true"></i>
                        <p>工大祭委員紹介</p>
                    </li>
                </a>
                <a href="https://twitter.com/nitfes" target="_blank">
                    <li>
                        <i class="fa fa-twitter fa-example fa-fw" aria-hidden="true"></i>
                        <p>Twitter</p>
                    </li>
                </a>
                <a href="https://www.instagram.com/koudaisai" target="_blank">
                    <li>
                        <i class="fa fa-instagram fa-example fa-fw" aria-hidden="true"></i>
                        <p>instagram</p>
                    </li>
                </a>
            </ul>

        </div> <!-- menu -->
        <div class="bar_box">
            <img id="bar_sm" src="../img/webBannerSm.png" alt="">
            <img id="bar_pc" src="../img/webBanner.png" alt="">
        </div>
        <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
        </button>
        <div id="container">
            <div class="white" style="padding-top:10px;">
            <div class="topic_box">
                <h2 class="topic1">落単古墳マン</h2>
                <h3 class="hihn"></h3>
                <h3 class="topic2">rakutann-kohunman</h3>
            </div>
            <div class="card">
            <div id="parent">
            <div id="child1">
                <h2 class="subtitle">落単古墳マンとは？</h2>
                <div class="content">
                    名古屋工業大学の大学祭「工大祭」の公式マスコットキャラクター<br>
                    今年も工大祭に遊びに来るよ！
                </div>
                <h2 class="subtitle">プロフィール</h2>
                <div class="content">
                    僕は落単古墳マン！！<br>
                    名古屋工業大学の一本松古墳の中で<br>
                    はにわ君たちと一緒に暮らしてるんだ～<br>
                    いつも寝てばっかりの僕と違って<br>
                    はにわ君たちはちゃんと授業に出て<br>
                    充実した名工LIFEを送っているんだ...<br>
                    寝てばっかりのせいなのかわからないけど<br>
                    僕は今年も単位が足りなくて卒業できないみたい...<br>
                    他の大学に編入しようかな...<br>
                    でもそのおかげで今年も工大祭に参加できるんだ！<br>
                    今年も盛り上げていくよ～!<br>
                </div>

                <h2 class="subtitle">LINEスタンプ</h2>
                <div class="content">
                    落単古墳マンのスタンプが新しくなって発売中！！<br>
                    みんなもぜひ買ってみてね！！<br>
                    お買い求めは</dt>
                    <a href="https://line.me/S/sticker/11170904?lang=ja&ref=lsh_stickerDetail#~" target="_blank" class="underline">こちら<br>
                    <img class="pc" src="../news/img/古墳マン01.png" alt=""
                    width="50%" height="50%"></a>
                </div>
                <!--
                <h2 class="subtitle">学園祭マスコット総選挙</h2>
                <div class="content">
                工大祭のマスコットキャラクターの落単古墳マンだよ〜！<br>
                今、学園祭マスコット総選挙が開催されていて、僕もエントリーしてるんだ！<br>
                11月30日まで毎日投票ができるから、みんな僕に投票してくれると嬉しいな〜。<br>
                URLからぜひ見に行ってみてね〜！<br>
                    <a href="https://gakumado.mynavi.jp/contests/mascot" class="underline">学園祭マスコット総選挙</a>
                </div>
                -->
                <h2 class="subtitle">Twitter</h2>
                <div class="content">
                    ↓古墳マンのTwitterはこちら<br>
                    <a href="https://twitter.com/rakutan_nitfes" class="underline">Twitter</a>
                </div>
                <h2 class="subtitle">TikTok</h2>
                <div class="content">
                    TikTok始めちゃった～<br>
                    みんなアプリをダウンロードして<br>
                    落単古墳マンで検索してみてね～!!<br>
                    画像をスキャンしてもいけるよ～<br>
                    <img class="tiktok" src="../img/tiktok.png" alt="">
            </div>
            </div>
            <div id="child2">
            <img style="float:right; width:50vh; padding-top:30px;" src="../img/kohunman2.png" alt="">
            </div>
            </div>
            <hr>
            <p id=right>Copyright (C) 2022 名古屋工業大学第60回工大祭実行委員会 All Rights Reserved.</p>
            </div>
        </div> <!-- container -->
    </div> <!-- wrapper -->
    <script src="//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script>
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
    </script>
</body>
</html>
