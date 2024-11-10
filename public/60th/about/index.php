#! /usr/local/bin/php-cgi
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
    <meta http-equiv="Content-Language" content="ja"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="author"　content="名古屋工業大学第60回工大祭実行委員会"/>
    <meta name="copyright" content="Copyright (C) 2022 名古屋工業大学第60回工大祭実行委員会 All Rights Reserved."/>
    <meta name="keywords"　content="工大祭,第60回工大祭,名工祭,名古屋工業大学,名工大"/>
    <meta name="description" content="名古屋工業大学の大学祭ー「工大祭」の公式HP! 第60回工大祭は2022年11月19日(土)・20日(日)に開催予定!! 是非お越しください!!"/>
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
<style>
    .pic_frame {
        display: inline-block;
        text-align: center;
    }
    table {
        text-align: center;
    }
    image-vw {
        width : 20vw ;
    }
    .thumbnail {
    display: inline-block; /* ここがポイント */
    height: 8vh;
    margin-right: 1vm;
    margin-bottom: 5px;
}
.thumbnail img {
    height: 100%;
}

span {
   display: inline-block;
}
    </style>
    <script type="text/javascript" src="js/jquery.rwdImageMaps.min.js"></script>
<script type="text/javascript" src="js/jquery.rwdImageMaps.js"></script>
<script>
$(function(){
    $('img[usemap]').rwdImageMaps();
});
</script>
    <!--<link href="./css/point.css" rel="stylesheet" type="text/css" media="all" />-->
    <title>工大祭とは-第60回工大祭ホームページ</title>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>

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
                <h2 class="topic1">工大祭とは？</h2>
                <h3 class="hihn"></h3>
                <h3 class="topic2">ABOUT</h3>
            </div>
            <div class="card">
            <div id="parent">
            <div id="child1">
                <h2 class="subtitle">工大祭</h2>
                <p>
                <div class="content">
                    名古屋工業大学で行われる大学祭、通称「工大祭」です。<br>
                    新型コロナウィルスの状況でまだ確定ではありませんが、対面での開催予定です
                </div>
                <h2 class="subtitle">開催概要</h2>
                <div class="content">
                    <dl>
                        <dt class="header">日付</dt>
                        <dd>2022年11月19日(土)・20日(日)に開催予定</dd>
                        <!--<dt class="header">場所</dt>
                        <dd>
                            名古屋工業大学<br>
                            <a href="../access" class="underline">アクセスはこちら</a>
                        </dd>-->
                    </dl>
                </div>
                <h2 class="subtitle">テーマ</h2>
                <p>
                <div class="content">
                    第60回のテーマは、『RING ~Record Innovative Nitech Gathering~』<br>
                    <br>
                </div>
                </p>
            </div>
            <div id="child2">
                <!--<img style="float:right" src="../ppc/img/back1.png" alt="" width="600">-->
            </div>
            </div>
            <h2 class="subtitle">過去の工大祭リンク</h2>
            <a class="thumbnail" href="https://www.koudaisai.com/59th/" target="_blank"><img src="./img/59th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/58th/" target="_blank"><img src="./img/58th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/57th/" target="_blank"><img src="./img/57th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/56th/" target="_blank"><img src="./img/56th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/55th/" target="_blank"><img src="./img/55th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/54th/" target="_blank"><img src="./img/54th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/53rd/" target="_blank"><img src="./img/53th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/52nd/" target="_blank"><img src="./img/52th.png" alt=""></a>
            <a class="thumbnail" href="https://www.koudaisai.com/51st/" target="_blank"><img src="./img/51th.png" alt=""></a>
                <!--
                <h2 class="subtitle">工大祭費納入のお願い</h2>
                <div class="content">
                    名古屋工業大学入学者及びご家族　各位<br>
                    この工大祭は、毎年新入生の方にご支援いただいている「工大祭費」によって運営しています。<br>
                    ご入学の前に大学生協の資料に、以下の2つの資料を同封させていただきました。<br>
                    ・工大祭費振込用紙<br>
                    ・<a href="./pdf/hiyou.pdf" download="./pdf/hiyou.pdf">工大祭費納入のお願い</a><br>
                    今年もたくさんの方々に楽しんでいただけるような工大祭を作り上げていくため、<br>
                    新入生の皆様に工大祭費のご支援をお願いしたく存じます。<br>
                    ご理解とご協力のほど、よろしくお願い致します。<br>
                    <br>
                        名古屋工業大学第57回工大祭実行委員会<br>
                        会計担当　梶 秀輔<br>
                </div>
                -->
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
