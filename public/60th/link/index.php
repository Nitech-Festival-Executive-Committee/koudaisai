#! /usr/local/bin/php-cgi

<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">

<head>
    <meta http-equiv="Content-Language" content="ja" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="author" 　content="名古屋工業大学第60回工大祭実行委員会" />
    <meta name="copyright" content="Copyright (C) 2022 名古屋工業大学第60回工大祭実行委員会 All Rights Reserved." />
    <meta name="keywords" 　content="工大祭,第60回工大祭,名工祭,名古屋工業大学,名工大" />
    <meta name="description" content="名古屋工業大学の大学祭ー「工大祭」の公式HP! 第58回工大祭は2021年11月20日(土)・21日(日)に開催します!! 是非お越しください!!" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minmum-scale=1.0">
    <link rel="shortcut icon" href="http://www.koudaisai.com/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet prefetch" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://mplus-webfonts.sourceforge.jp/mplus_webfonts.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="./css/pc.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/pc.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/tablet.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/smart.css" rel="stylesheet" type="text/css" media="all" />
    <link rel="shortcut icon" href="https://www.koudaisai.com/favicon.ico">
    <link rel="apple-touch-icon" href="https://www.koudaisai.com/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="https://www.koudaisai.com/android-chrome-192x192.png">
    <!--画像クリックで拡大するcss-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js"
        type="text/javascript"></script>

    <script type="text/javascript" src="js/jquery.rwdImageMaps.min.js"></script>
    <script type="text/javascript" src="js/jquery.rwdImageMaps.js"></script>
    <script>
        $(function () {
            $('img[usemap]').rwdImageMaps();
        });
    </script>
    <!--<link href="./css/point.css" rel="stylesheet" type="text/css" media="all" />-->
    <title>協賛企業-第60回工大祭ホームページ</title>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <style>
        #container {
            /*background-image: url("../ppc/img/ppc1.png");*/
            background-size: cover;
        }

        .white {
            background: rgba(255, 255, 255, 0.5);
            height: 100%;
        }

        .bar_box {
            /*background-image: url("../ppc/img/ppc1.png");*/
            background-size: cover;
        }

        .pic_frame {
            display: inline-block;
            text-align: center;
            padding: 10px 0
        }

        table {
            text-align: center;
        }

        .popupBox {
            display: none;
            background: rgba(255, 140, 52, 100);
            overflow-y: scroll;
        }

        .modal-wrapper {
            z-index: 9999;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 10px 10px;
            text-align: center
        }

        .modal-wrapper:not(:target) {
            opacity: 0;
            visibility: hidden;
            transition: opacity .3s, visibility .3s;
        }

        .modal-wrapper:target {
            opacity: 1;
            visibility: visible;
            transition: opacity .4s, visibility .4s;
        }

        .modal-wrapper::after {
            display: inline-block;
            height: 100%;
            margin-left: -.05em;
            vertical-align: middle;
            content: ""
        }

        .modal-wrapper .modal-window {
            box-sizing: border-box;
            display: inline-block;
            z-index: 20;
            position: relative;
            width: 90vw;
            max-width: 90vw;
            padding: 30px 30px 15px;
            border-radius: 2px;
            background: #fff;
            box-shadow: 0 0 30px rgba(0, 0, 0, .6);
            vertical-align: middle
        }

        .modal-wrapper .modal-window .modal-content {
            max-height: 80vh;
            overflow-y: auto;
        }

        .modal-overlay {
            z-index: 10;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, .8)
        }

        .modal-wrapper .modal-close {
            z-index: 20;
            position: absolute;
            top: 0;
            right: 0;
            width: 35px;
            color: #95979c !important;
            font-size: 20px;
            font-weight: 700;
            line-height: 35px;
            text-align: center;
            text-decoration: none;
            text-indent: 0
        }

        .modal-wrapper .modal-close:hover {
            color: #2b2e38 !important
        }
    </style>
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
                    <h2 class="topic1">協賛企業</h2>
                    <h3 class="hihn"></h3>
                    <h3 class="topic2">LINK</h3>
                </div>
                <div class="card">
                    <h2 class="subtitle">協賛</h2>
                    <div class="content">
                        <center>
                            <!-- ロゴなし -->
                            <div class="pic_frame">
                                <input type="image" src="./img/trancomImg.jpg" alt="trancom" id="rogo">
                                <p>トランコム株式会社 さま</p></a>
                                トランコム株式会社さまのホームページは<a href="https://www.trancom.co.jp/" target="_blank"
                                    class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/woodFriendsLogo.png" alt="woodfriends" id="rogoW">
                                <p>株式会社　ウッドフレンズ さま</p></a>
                                株式会社ウッドフレンズさまのホームページは<a href="https://www.woodfriends.co.jp/" target="_blank"
                                    class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/toyotarentarice.png" alt="woodfriends" id="rogoW">
                                <p>トヨタレンタリース愛知 さま</p></a>
                                トヨタレンタリース愛知さまのホームページは<a href="https://www.trl-aichi.co.jp/" target="_blank"
                                    class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/noLogo.png" alt="nologo" id="rogoW">
                                <p>名古屋工業会名古屋支部 さま</p>
                                名古屋工業会名古屋支部さまのホームページは<a href="https://www.nagoya-kogyokai.jp/" target="_blank" class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/noLogo.png" alt="nologo" id="rogoW">
                                <p>つるまい耳鼻咽喉科 さま</p>
                                つるまい耳鼻咽喉科さまのホームページは<a href="https://tsurumai-ent.com/" target="_blank" class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/noLogo.png" alt="nologo" id="rogoW">
                                <p>Printlab Sutte さま</p>
                                Printlab Sutteさまのホームページは<a href="https://www.printlabsutte.com/" target="_blank" class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/noLogo.png" alt="nologo" id="rogoW">
                                <p>Café Sala さま</p>
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/noLogo.png" alt="nologo" id="rogoW">
                                <p>Cafe House LIEBE さま</p>
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/ueji.jpg" alt="ueji" id="rogoW">
                                <p>上地自動車学校 さま</p>
                                上地自動車学校さまのホームページは<a href="https://ueji-online.ne.jp/" target="_blank" class="underline">こちら</a>からご覧いただけます。
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/mainabi.jpg" alt="ueji" id="rogoW">
                                <p>マイナビ さま</p>
                            </div>

                            <div class="pic_frame">
                                <input type="image" src="./img/axonaaichi.png" alt="ueji" id="rogoW">
                                <p>愛知株式会社 さま</p>
                                愛知株式会社さまのホームページは<a href="https://www.axona-aichi.com/sdgs/" target="_blank" class="underline">こちら</a>からご覧いただけます。
                            </div>
                            <!--
                    <div class="pic_frame">
                    <a href="" target="_blank" class="underline">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
-->
                            <!--
                    <div class="pic_frame">
                    <a href="" target="_blank" class="underline">
                    <input type="image" src="" alt="sala" id="rogo">
                    <p></p></a>
                    </div>
-->
                            <!-- 
                    <div class="modal-wrapper" id="seitetu">
<a href="#!" class="modal-overlay"></a>
<div class="modal-window">
    <div class="modal-content">
    <h2 class="subtitle"></h2>
                    <center>
                    <video class="" preload="metadata" src="" style="width:100%; height:100%;" controls></video>
                    </center>
    </div>
    <a href="#!" class="modal-close">×</a>
</div>
</div>
<!-- 
                    <div class="pic_frame">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
                    <div class="pic_frame">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
                    <div class="pic_frame">
                    <a href="" target="_blank" class="underline">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
                    <div class="pic_frame">
                    <a href="" target="_blank" class="underline">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
                    <div class="pic_frame">
                    <input type="image" src="" alt="liebe" id="rogo">
                    <p></p></a>
                    </div>
                    <div class="pic_frame">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
                    <div class="pic_frame">
                    <a href="" target="_blank" class="underline">
                    <input type="image" src="" alt="" id="rogo">
                    <p></p></a>
                    </div>
                    </center>
                    </div>
                    <hr width="100%" size="1" color="#eee" style="border-style:dashed">
                    <br>
                    <a href="" data-lightbox="group" target="_blank">
                    <input type="image" src="" alt="" id="rogo"></a>
                    <p></p>
                    <br>
                    <div class="pic_frame">
                    <a href="" data-lightbox="group" target="_blank">
                    <img class="image" src="" alt="" id="rogo"></a>
                    <p></p>
                    </div>
                    <div class="pic_frame">
                    <a href="" data-lightbox="group" target="_blank">
                    <input type="image" src="" alt="" id="rogo"></a>
                    <p></p>
                    </div>
                    <div class="pic_frame">
                    <a href="" data-lightbox="group" target="_blank">
                    <input type="image" src="" alt="" id="rogo"></a>
                    <p></p>
                    </div>
                    <div class="pic_frame">
                    <a href="" data-lightbox="group" target="_blank">
                    <input type="image" src="" alt="" id="rogo"></a>
                    <p></p>
                    </div>
-->
</body>
<!--
                </div>
                <h2 class="subtitle">相互リンク募集</h2>
                <div class="content">
                    相互リンクしてくださる大学祭Webページを募集しております。<br>
                    相互リンクを希望される大学祭実行委員会様は、お問い合わせページよりお願いします。<br>
                    <a href="../inquiry" class="underline">お問い合わせはこちら</a>
                </div>
                -->
</div>
<hr>
<p id=right>Copyright (C) 2022 名古屋工業大学第60回工大祭実行委員会 All Rights Reserved.</p>
</div>
</div> <!-- container -->
</div> <!-- wrapper -->
<script
    src="//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {
        var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false,
            flag = false;

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
                $('body,html').css({ "overflow": "hidden", "height": "100%" });
                flag = true;
            } else {
                // スクロール禁止 解除
                // $(window).off('.noScroll');
                $('body,html').css({ "overflow": "visible", "height": "auto" });
                flag = false;
            }
        });
    });
</script>
</body>

</html>
