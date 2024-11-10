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
    <meta name="description" content="名古屋工業大学の大学祭ー「工大祭」の公式HP! 第60回工大祭は2022年11月19日(土)・20日(日)に開催します!! 是非お越しください!!" />
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
    <script type="text/javascript" src="js/jquery.rwdImageMaps.min.js"></script>
    <script type="text/javascript" src="js/jquery.rwdImageMaps.js"></script>
    <script>
        $(function () {
            $('img[usemap]').rwdImageMaps();
        });
    </script>
    <!--<link href="./css/point.css" rel="stylesheet" type="text/css" media="all" />-->
    <title>予約について - 第60回工大祭ホームページ</title>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>

<style>
    #container {
        background-image: url("../ppc/img/ppc1.png");
        background-size: cover;
    }

    .white {
        background: rgba(255, 255, 255, 0.5);
        height: 100%;
    }

    .bar_box {
        background-image: url("../ppc/img/ppc1.png");
        background-size: cover;
    }

    .youtube-re {
        position: relative;
        overflow: hidden;
        margin: 15px 0 20px 0;
        padding-bottom: 50%;
        padding-top: 65px;
    }

    .youtube-re iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>

<body>
    <div id="wrapper">
        <div class="navbar navbar-inverse navbar-fixed-top" id="menu">
            <a href="../index.php">
                <input type="image" src="../img/topiconImg.png" alt="工大祭ホームページ" id="rogo">
            </a>

            <ul id="menu-bar">
                <a href="../yoyaku/">
                    <li>
                        <i class="fa fa-book fa-example fa-fw" aria-hidden="true"></i>
                        <p>ご予約</p>
                    </li>
                </a>
                <a href="../about/">
                    <li>
                        <i class="fa fa-question fa-example fa-fw" aria-hidden="true"></i>
                        <p>工大祭とは？</p>
                    </li>
                </a>
                <a href="../news/">
                    <li>
                        <i class="fa fa-commenting fa-example fa-fw" aria-hidden="true"></i>
                        <p>最新情報</p>
                    </li>
                </a>
                <a href="../project/">
                    <li>
                        <i class="fa fa-university fa-example fa-fw" aria-hidden="true"></i>
                        <p>企画一覧</p>
                    </li>
                </a>
                <a href="../tt/">
                    <li>
                        <i class="fa fa-table fa-example fa-fw" aria-hidden="true"></i>
                        <p>タイムテーブル</p>
                    </li>
                </a>

                <a href="../access/">
                    <li>
                        <i class="fa fa-map-marker fa-example fa-fw" aria-hidden="true"></i>
                        <p>会場</p>
                    </li>
                </a>
                <a href="../kohunman/">
                    <li>
                        <i class="fa fa-smile-o fa-example fa-fw" aria-hidden="true"></i>
                        <p>落単古墳マン</p>
                    </li>
                </a>
                <a href="../com/">
                    <li>
                        <i class="fa fa-handshake-o fa-example fa-fw" aria-hidden="true"></i>
                        <p>企業の方へ</P>
                    </li>
                </a>
                <a href="../inquiry/">
                    <li>
                        <i class="fa fa-envelope fa-example fa-fw" aria-hidden="true"></i>
                        <p>お問い合わせ</p>
                    </li>
                </a>
                <a href="../link/">
                    <li>
                        <i class="fa fa-link fa-example fa-fw" aria-hidden="true"></i>
                        <p>協賛企業</p>
                    </li>
                </a>
                <a href="../daisai/">
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
                    <h2 class="topic1">工大祭入場予約</h2>
                    <h3 class="hihn"></h3>
                    <h3 class="topic2">Reserve</h3>
                </div>
                <div class="card">
                    <h2 class="subtitle">概要</h2>
                    <div class="content">
                        第60回工大祭が2022年11月19日、11月20日に開催予定です。<br>
                        第60回工大祭は工大祭アプリによる完全予約制です。<br>
                        事前予約をよろしくお願いします。<br>
                    </div>

                    <h2 class="subtitle">入場予約</h2>
                    <div class="content">
                        <dl>
                            <dt class="header">期間</dt>
                            <dd>11月12日23:59まで</dd>
                            <dt class="header">入場予約</dt>
                            <dd>予約(工大祭アプリインストール)は<a href="https://koudaisai.page.link/LsKR" target="_blank"
                                    class="underline">こちら</a>(スマートフォンからご覧ください。)</dd>
                            <dd>※第60回工大祭は完全予約制です。</dd>
                        </dl>
                    </div>

                    <h2 class="subtitle">予約方法について</h2>
                    <div class="content">
                        <dl>
                            工大祭アプリを用いた予約方法は以下のスライドを御覧ください。
                            <div class="youtube-re">
                            <iframe
                                src="https://docs.google.com/presentation/d/e/2PACX-1vR7OY1Mm9o-_7yNbGRJwV-669XZqNAJIXmcOWwRB0FP1fMUEEWPjybdezbc0ruISIOgWCuwgIZExiR4/embed?start=false&loop=false&delayms=3000"
                                frameborder="0" width="960" height="569" allowfullscreen="true"
                                mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </dl>
                    </div>


                    <h2 class="subtitle">注意事項</h2>
                    <div class="content">
                        <dl>
                            <dt class="header">予約期間は10月30日(日）〜11月12日（土）です。入場を希望される方は、その期間内に工大祭アプリからご予約をお願いします。</dt>
                            <dt class="header">1日あたりの来訪者は最大2000人となります。(※予約は先着順となります。)</dt>
                            <dt class="header">中止の連絡は、工大祭公式SNS及び工大祭公式webを通して行います。</dt>
                            <dt class="header">工大祭から送られるメールが迷惑メールに入らないような設定をお願いします。</dt>
                            <dd class="header">　工大祭参加日２日前(11月17日または18日)からの体温・体調結果</dd>
                            <dd>　※入場には、工大祭参加日２日前(11月17日または18日)からの体温・体調結果が必要です。忘れず記録をお願いいたします。</dd>
                            <dd class="header">　目の見えない方や車いすで来訪される方など、特別な配慮が必要な方は事前に、工大祭実行委員会にご連絡ください</dd>
                            <dt class="header">工大祭当日における注意事項</dt>
                            <dd>①運営者の指示に従ってください。</dd>
                            <dd>②委員会が提示する新型コロナウイルス感染症対策に従ってください。</dd>
                            <dd>③入場後に体調を崩した場合は、速やかにスタッフに申し出てください。</dd>
                            <dd>④マスクを着用してください。</dd>
                            <dd>⑤アルコール消毒にご協力ください。</dd>
                            <dd>⑥ソーシャルディスタンス確保にご協力ください。</dd>
                            <dd>⑦移動ルートおよび侵入禁止場所に従ってください。</dd>
                        </dl>
                    </div>
                    <h2 class="subtitle">プライバシーポリシーについて</h2>
                    <div class="content">
                        プライバシーポリシーについては<a href="https://60thkoudaisai-app.vercel.app/privacy">こちら</a>をご覧ください。
                    </div>

                    <h2 class="subtitle">お問い合わせ</h2>
                    <div class="content">
                        お問い合わせは<a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc9_Q4epNwcecI8spGvlitL2_zS4F1IvbWPcNf8l8BTPX8oHw/viewform">こちら</a>のフォームからお送りください。
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