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
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@nitfec" />
    <meta property="og:url" content="http://www.koudaisai.com/" />
    <meta property="og:title" content="第60回工大祭Webページ" />
    <meta property="og:description" content="第60回工大祭のHPです。新着情報などを随時更新していきます！！" />
    <meta property="og:image" content="http://www.koudaisai.com/img/Twitter.png" />
    <!-- Twitter -->
    <link rel="shortcut icon" href="http://www.koudaisai.com/favicon.ico" />
    <link rel="stylesheet prefetch" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="http://mplus-webfonts.sourceforge.jp/mplus_webfonts.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="./css/pc.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/tablet.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/smart.css" rel="stylesheet" type="text/css" media="all" />

    <!-- icon -->
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" href="android-chrome-192x192.png">

    <!--画像クリックで拡大するcss-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js"
        type="text/javascript"></script>
    <title>NIT LIVE FES 2022 - 第60回工大祭ホームページ</title>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <style>
        #container {
            /*background-image: url("img/back.png");*/
            background-size: cover;
        }

        .white {
            background: rgba(255, 255, 255, 0.5);
            height: 100%;
        }

        .bar_box {
            /*background-image: url("../ppc/img/back1.png");*/
            background-size: cover;
        }

        .waku {
            background: rgba(255, 140, 52, 100);
            color: #ffffff;
        }

        @media (min-width: 600px) {
            #parent {
                display: flex;
                flex-direction: column;
            }

            #parent div {
                margin: 3px;
            }

            #child1 {
                flex-grow: 1;
            }

            #child2 {
                flex-grow: 1;
            }

            #child3 {
                flex-grow: 1;
            }

            #new {
                background: rgba(238, 122, 9, 100);
                color: #ffffff;
            }

            #more {
                color: #ffffff;
            }
        }
    </style>
    <style>
        .pic_frame {
            display: inline-block;
            text-align: center;
            padding: 10px 0 width:100px;
        }

        .pic_frame img {
            height: 100%;
        }

        table {
            text-align: center;
        }

        .thumbnail {
            display: inline-block;
            /* ここがポイント */
            height: 20vw;
            margin-right: 1vm;
            margin-bottom: 5px;
        }

        .thumbnail img {
            height: 100%;
        }

        .kikaku {
            display: inline-block;
            /* ここがポイント */
            height: 12vh;
            margin-right: 1vm;
            margin-bottom: 5px;
        }

        .kikaku img {
            height: 100%;
        }

        .header {
            background: url("./img/header.png") no-repeat;
            background-position: left center;
            background-size: auto 15px;
        }

        .subtitle {
            margin: 0 auto;
            padding: 8px 20px;
            position: relative;
            border-left: 6px solid #ccc;
            font-size: 25px;
            text-align: left;
            background: rgba(238, 122, 9, 100);
            color: #ffffff;
        }

        .subtitle::before {
            position: absolute;
            left: -6px;
            bottom: 0;
            content: '';
            width: 6px;
            height: 50%;
            background: rgba(238, 122, 9, 100);
            color: #ffffff;
        }

        .subtitle::after {
            position: absolute;
            left: 0;
            bottom: 0;
            content: '';
            width: 100%;
            height: 0;
            border-bottom: 1px solid #ccc;
            background: rgba(238, 122, 9, 100);
            color: #ffffff;
        }

        .dot {
            text-indent: -1em;
        }

        .kyoutyou {
            font-weight: bold;
            text-shadow: 1px 1px 0 #D35400, -1px 1px 0 #D35400, 1px -1px 0 #D35400, -1px -1px 0 #D35400;
        }
    </style>
</head>

<!--左に出てくるBOX-->

<body>
    <div id="wrapper">
        <div class="navbar navbar-inverse navbar-fixed-top" id="menu">
            <a href="../index.php">
                <!--一番上の画像-->
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
        </div>

        <!-- menu -->
        <div class="bar_box">
            <!--一番上の画像-->
            <img id="bar_sm" src="../img/webBannerSm.png" alt="">
            <!--スマホ-->
            <img id="bar_pc" src="../img/webBannerSm.png" alt="">
            <!--pc-->
        </div>
        <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
        </button>

        <div id="container">
            <div class="white" style="padding-top:50px">
                <div class="topic_box">
                    <h2 class="topic1">NIT LIVE FES 2022</h2>
                    <h3 class="hihn"></h3>
                    <h3 class="topic2">NIT LIVE FES 2022</h3>
                </div>

                <center>
                    <div style="padding:50px 0px">
                        <a href="index.php"><img class="image" src="img/logo.png" alt="" width="600vw"></a>
                    </div>
                </center>

                <h2 class="subtitle">企画紹介</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                        <div class="waku">
                            <div style="margin-left:30px; margin-right:30px;">
                                <br>
                                今年のNIT LIVE FESでは、YENMA、WOMCADOLE、Half time Oldの3組のアーティストに出演していただきます!
                                <br>
                                協賛:<a href="https://www.sundayfolk.com">サンデーフォークプロモーション</a>
                                <br>
                                <br>
                            </div>
                        </div>
                </div>

                <h2 class="subtitle">開催概要</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                        <div class="waku">
                            <div id="parent">
                                <div id="child1">
                                    <div style="margin-left:10px">
                                        <dt class="header">日程</dt>
                                    </div>
                                    <div style="margin-left:30px; margin-right:10px;">
                                        11/20(日) 開場11:45 開演12:30
                                        <br>
                                    </div>
                                </div>

                                <div id="child2">
                                    <div style="margin-left:10px">
                                        <dt class="header">場所</dt>
                                    </div>
                                    <div style="margin-left:30px">
                                        NITech Hall<br><br>
                                        <a href="../map/" class="underline">マップはこちら</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <h2 class="subtitle">アーティスト紹介</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                        <div class="waku">
                            <div id="parent">
                                <div id="child1">
                                    <div style="margin-left:10px">
                                        <dt class="header">YENMA</dt>
                                    </div>
                                    <div style="margin-left:30px; margin-right:10px;">
                                        <img src="./img/YENMA.jpg" alt="YENMA" width="95%"><br>
                                        山本 武尊(Dr.Cho.) 深澤 希実(Key.Vo.) 池田 光(Vo.Gt.) 渡邉 麻美子(Ba.Cho.)<br>
                                        POPでキャッチーなサウンドでLIVEフロアを熱くする男女混声４人組バンドYENMA（エンマ）。2020年10月リリースの初の全国流通盤アルバム「Piñata」をひっさげ
                                        2020年12月、2021年4月と渋谷WWWでのワンマンライブを行いSOLDOUT！
                                        アルバム表題曲「シャンデリア」は、2021年1月にCXの音楽番組「Love Music」のOPとして起用され、2月に同番組にてTV初出演を飾った！
                                        2022年3月～3か月連続で開催した自主企画「春の大三角形」も大成功をおさめた。
                                        また、7月にリリースの90‘サウンドをとりいれたダンスナンバー
                                        「ロン・ロン・ロマンス」は、ライブで盛り上がること間違いなしの1曲！
                                        <br>
                                        <iframe width="95%" height="315vw"
                                            src="https://www.youtube.com/embed/Z_Ee0mQUwJs" title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                        <br>
                                        公式ホームページは<a href="https://www.yenma.jp/">こちら</a>
                                    </div>
                                </div>

                                <div id="child2">
                                    <div style="margin-left:10px">
                                        <dt class="header">WOMCADOLE</dt>
                                    </div>
                                    <div style="margin-left:30px">
                                        <img src="./img/WOMCADOLE.jpg" alt="WOMCADOLE" width="95%"><br>
                                        黒野滉大(Ba.) 安田吉希(Dr.Cho.) 樋口侑希(Vo.Gt.) マツムラユウスケ(Gt.Cho.)<br>
                                        2011年に滋賀県で結成。2013年には閃光ライオットでファイナリストに選出された。
                                        その後、数々のライブをこなし2019年にメジャーデビュー。
                                        ROCK IN JAPAN FESTIVALやVIVA LA
                                        ROCKなど数々の大型音楽フェスに出演し、今では日本のロックシーンを牽引するロックバンドとなった。2022年には、対バン形式、360度フロアライブ、ワンマン公演など形式を問わない形での自主企画「瀧昇」を行っている。
                                        <br>
                                        「アオキハルへ」MVは<a href="https://youtu.be/dYq1K7oduA8">こちら</a>
                                        <br>
                                        公式ホームページは<a href="https://womcadole.com">こちら</a>
                                    </div>
                                </div>

                                <div id="child3">
                                    <div style="margin-left:10px">
                                        <dt class="header">Half time Old</dt>
                                    </div>
                                    <div style="margin-left:30px">
                                        <img src="./img/HalfTimeOld.jpg" alt="Half Time Old" width="95%"><br>
                                        小鹿雄一朗(Gt.) 阪西暢(Dr.) 鬼頭大晴(Vo.Gt.) 内田匡俊(Ba.)<br>
                                        2011年に名古屋で結成した。音楽性の高さから着実にファンを増やし、ROCK IN JAPAN
                                        FESTIVALやTREASURE05Xなど数々の大型音楽フェスに出場している。
                                        2020年には、au三太郎シリーズ「みんな自由だ」篇TVCMソングを担当し、「みんな自由だ」TVCMはYouTubeにて1,000万回再生突破！
                                        2021年にはメジャーデビューを果たし、2022にはTVアニメ「惑星のさみだれ」のオープニングテーマとして、「暁光」を書き下ろした。そして、2022年10月12日に約4年ぶりのフルアルバム「身体と心と音楽について」を発売する。
                                        <br>
                                        <iframe width="95%" height="315vw"
                                            src="https://www.youtube.com/embed/aHgaq4Fa0r4" title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                        <br>
                                        公式ホームページは<a href="https://www.halftimeold.com">こちら</a>
                                        <br>
                                        <br>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>

                <h2 class="subtitle">チケットについて</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                        <div class="waku">
                            <div id="parent">
                                <div id="child1">
                                    <div style="margin-left:10px">
                                        <dt class="header">購入リンク</dt>
                                    </div>
                                    <div style="margin-left:30px; margin-right:10px;">
                                        ・名工大生は<a href="https://forms.office.com/r/1YKnjqXKGW">こちら</a><br>
                                        ・一般(名工大生以外)は<a
                                            href="https://eplus.jp/sf/detail/3718320001-P0030001">こちら</a><br>
                                    </div>
                                </div>

                                <div id="child1">
                                    <div style="margin-left:10px">
                                        <dt class="header">価格</dt>
                                    </div>
                                    <div style="margin-left:30px; margin-right:10px;">
                                        一般:¥2,500<br>
                                        名工大生:¥2,000<br>
                                        ・名工大生チケットを購入した方は、当日学生証の提示が必要です。<br>　名工大生と確認が取れなかった場合は差額をお支払いいただきます。<br>
                                        ・名工大生チケットの不正購入には厳正に対応します。<br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <h2 class="subtitle">注意事項</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                        <div class="waku">
                            <br>
                            　　1. 新型コロナウイルス感染拡大等の理由で工大祭の対面開催が中止になった場合はチケットの払い戻しを行います。<br>
                            　　2. 上記の場合を除き、チケットの払い戻しは致しません。<br>
                            　　3. 出演アーティストは変更となる場合があります。<br>
                            　　4. 録音・録画・写真撮影など本企画のいかなる形での記録行為を禁止します。<br>
                            　　5. 公演中は、スマートフォンなどの電子機器の電源を切っていただくか、<br>　　マナーモードにするなど周りのお客様へのご配慮をお願いいたします。<br>
                            　　6. 会場内での水分補給を除く飲食は禁止です。<br>
                            　　7. 会場内での飲酒・喫煙は禁止です。<br>
                            　　8. クロークはございませんので、各自での荷物の管理をお願いします。<br>
                            　　9. モッシュやダイブなどの危険行為や発声を伴う応援などの感染リスクを高める行為は禁止です。<br>
                            　　10. 主催者および出演者は、会場内外でのお荷物の紛失や盗難に対して一切の責任を負いません。<br>
                            　　11. 主催者および出演者は、会場内外でのお客様同士のトラブルの責任を一切負いません。<br>
                            　　12. 会場内ではマスクの着用が必要です。<br>
                            　　13. 工大祭STAFFの指示に従わない場合は、退場していただく場合や公演を中断または中止する場合もございます。<br>　　その際のチケットの払い戻しは行いません。
                            <br><br>
                        </div>
                </div>

                <h2 class="subtitle">お問い合わせ</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                        <div class="waku">
                            <div style="margin-left:30px; margin-right:10px;">
                                <br>
                                ご不明な点がございましたら、下記の連絡先までお問い合わせください。<br>
                                名古屋工業大学第60回工大祭 ステージ局 安藤 樹生
                            </div>
                            <div style="margin-left:10px; margin-right:10px;">
                                <dt class="header">
                                    <a href="mailto:itsuki.ando@koudaisai.com"
                                        class="underline">itsuki.ando@koudaisai.com</a><br>
                                </dt>
                            </div>
                            <br>
                        </div>
                </div>

            </div>

            </small>

            <hr>
            <p id=right>Copyright (C) 2022 名古屋工業大学第60回工大祭実行委員会 All Rights Reserved.</p>
        </div>
    </div>
    </div> <!-- container -->
    </div> <!-- wrapper -->
    <script
        src="//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>
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
    <script>
        $(document).ready(function () {
            // Lift card and show stats on Mouseover
            $('.card').hover(function () {
                $(this).addClass('animate');
            }, function () {
                $(this).removeClass('animate');
            });
        });
    </script>
    <script>
        var mySwiper = new Swiper('.swiper-container', {
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
    </script>
</body>

</html>