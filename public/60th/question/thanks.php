<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
    <meta http-equiv="Content-Language" content="ja"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="author"　content="名古屋工業大学第58回工大祭実行委員会"/>
    <meta name="copyright" content="Copyright (C) 2020 名古屋工業大学第58回工大祭実行委員会 All Rights Reserved."/>
    <meta name="keywords"　content="工大祭,第58回工大祭,名工祭,名古屋工業大学,名工大"/>
    <meta name="description" content="名古屋工業大学の大学祭ー「工大祭」の公式HP! 第58回工大祭は2020年11月21日(土)・22日(日)に開催します!! 是非お越しください!!"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minmum-scale=1.0">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@nitfec" />
    <meta property="og:url" content="http://www.koudaisai.com/" />
    <meta property="og:title" content="第58回工大祭Webページ" />
    <meta property="og:description" content="第58回工大祭のHPです。新着情報などを随時更新していきます！！" />
    <meta property="og:image" content="http://www.koudaisai.com/img/Twitter.png" />
    <!-- Twitter -->
    <link rel="shortcut icon" href="http://www.koudaisai.com/favicon.ico" />
    <link rel="stylesheet prefetch" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="http://mplus-webfonts.sourceforge.jp/mplus_webfonts.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="./css/pc.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/tablet.css" rel="stylesheet" type="text/css" media="all" />
    <link href="./css/smart.css" rel="stylesheet" type="text/css" media="all" />
    
    <!--画像クリックで拡大するcss-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js" type="text/javascript"></script>
    <title>工大祭アンケート-第58回工大祭ホームページ</title>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <style>
        #container{
            background-image: url("../ppc/img/ppc1.png");
            background-size:cover;
        }
        .white {
            background: rgba(255,255,255,0.5);
            height: 100%;
        }
        .bar_box{
            background-image: url("../ppc/img/ppc1.png");
            background-size:cover;
        }
        .waku{
            background: rgba(255,140,52,100);
            color: #ffffff;
        }
    @media (min-width: 600px) {
        #parent {
            display: flex;
        }
        #parent div {
        margin: 3px;
        }
        #child1 {
            flex-grow: 2;
        }
        #child2 {
            flex-grow: 1;
        }
        #new{
            background: rgba(238,122,9,100);
            color: #ffffff;
        }
        #more{
            color: #ffffff;
        }
    }
</style>
<style>
    .pic_frame {
        display: inline-block;
        text-align: center;
        padding: 10px 0
        width:100px;
    }
    .pic_frame img {
    height: 100%;
    }
    table {
        text-align: center;
    }
    .thumbnail {
    display: inline-block; /* ここがポイント */
    height: 20vw;
    margin-right: 1vm;
    margin-bottom: 5px;
}
.thumbnail img {
    height: 100%;
}
.kikaku {
    display: inline-block; /* ここがポイント */
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
        background: rgba(238,122,9,100);
        color: #ffffff;
    }
    .subtitle::before {
        position: absolute;
        left: -6px;
        bottom: 0;
        content: '';
        width: 6px;
        height: 50%;
        background: rgba(238,122,9,100);
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
        background: rgba(238,122,9,100);
        color:#ffffff;
    }
    </style>
</head>

<!--左に出てくるBOX-->
<body>
    <div id="wrapper">
        <div class="navbar navbar-inverse navbar-fixed-top" id="menu">
                <a href="../index.php">
                    <!--一番上の画像-->
                    <input type="image" src="../img/top.png" alt="工大祭ホームページ" id="rogo">
                </a>

            <ul id="menu-bar">
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
                        <p>企業の方へ</P>
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
            <img id="bar_sm" src="../img/bar1.png" alt=""> <!--スマホ-->
            <img id="bar_pc" src="../img/bar2.png" alt=""> <!--pc-->
        </div>
        <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
        </button>

        <div id="container">
            <div class="white" style="padding-top:100px">
            <div style="padding-bottom:20px">
            <center>
            <div class="topic_box">
                <h2 class="topic1">工大祭アンケート</h2>
            </div>
            </center>
            </div>
            <!--
            <div class="topic_box">
                <h2 class="topic1"></h2>
                <h3 class="topic2"></h3>
            </div>
            -->
            <h2 class="subtitle">アンケート</h2>
                <div id="new" style="background: rgba(238,122,9,100); color: #ffffff;">
                    <dl>
                    <small>
                    <div class="waku">
                        <div style="margin-left:10px">
                        送信が完了しました。<br/>
                        ご協力ありがとうございました。
                        <?php 

                            
                            // echo $_POST['jendar'];
                            // echo $_POST['age'];
                            // echo $_POST['enroll'];
                            // echo $_POST['know'];
                            // echo $_POST['know_other'];
                            // echo $_POST['target'];
                            // echo $_POST['satisfaction'];
                            // echo $_POST['genre'];
                            // echo $_POST['genre_other'];
                            // echo $_POST['good'];
                            // echo $_POST['opinion'];

                            mb_language("Japanese");
                            mb_internal_encoding("UTF-8");

                            $to = "info@koudaisai.com";
                            $subject = "工大祭アンケート結果";
                            $message = "";
                            $headers = "From: form@koudaisai.com";
                            $headers.= "\n";
                            $headers.= "Bcc: 30114056@stn.nitech.ac.jp";
                            
                            $message .= "性別\r\n";
                            if(isset($_POST['jendar'])){
                                $message .= $_POST['jendar']."\r\n\r\n";
                            }

                            $message .= "年齢\r\n";
                            if(isset($_POST['age'])){
                                $message .= $_POST['age']."\r\n\r\n";
                            }

                            $message .= "名工大に在籍したことはありますか？.\r\n";
                            if(isset($_POST['enroll'])){
                                $message .= $_POST['enroll']."\r\n\r\n";
                            }

                            $message .= "オンライン工大祭をどこで知りましたか？\r\n";
                            if(isset($_POST['know'])){
                                $message .= $_POST['know']."\r\n";
                            }
                            if(isset($_POST['know_other'])){
                                $message .= nl2br($_POST['know_other'])."\r\n";
                            }
                            $message .= "\r\n";

                            $message .= "目当ての企画は何ですか？\r\n";
                            if(isset($_POST['target'])){
                                $message .= nl2br($_POST['target'])."\r\n\r\n";
                            }

                            $message .= "工大祭に対する満足度はどのくらいですか？\r\n";
                            if(isset($_POST['satisfaction'])){
                                $message .= $_POST['satisfaction']."\r\n\r\n";
                            }

                            $message .= "今後工大祭に呼びたいゲストのジャンルはありますか？\r\n";
                            if(isset($_POST['genre'])){
                                $message .= $_POST['genre']."\r\n";
                            }
                            if(isset($_POST['genre_other'])){
                                $message .= nl2br($_POST['genre_other'])."\r\n";
                            }

                            $message .= "\r\n";

                            $message .= "良かった企画があれば理由も含めてお書きください\r\n";
                            if(isset($_POST['good'])){
                                $message .= nl2br($_POST['good'])."\r\n\r\n";
                            }

                            $message .= "ご意見ご感想をお書きください\r\n";
                            if(isset($_POST['opinion'])){
                                $message .= nl2br($_POST['opinion'])."\r\n\r\n";
                            }


                            // $jendar = $_POST['jendar'];
                            // $age = $_POST['age'];
                            // $enroll = $_POST['enroll'];
                            // $know = $_POST['know'];
                            // $know_other = $_POST['know_other'];
                            // $target = $_POST['target'];
                            // $satisfaction = $_POST['satisfaction'];
                            // $genre = $_POST['genre'];
                            // $genre_other = $_POST['genre_other'];
                            // $good = $_POST['good'];
                            // $opinion = $_POST['opinion'];

                            mb_send_mail($to, $subject, $message, $headers); 


                        ?>
                        
                        </div>
                        <div style="margin-left:30px; margin-right:10px;">
                        
                    </div>
                </div>

                    </small>

                <hr>
                <p id=right>Copyright (C) 2020 名古屋工業大学第58回工大祭実行委員会 All Rights Reserved.</p>
                </div>
            </div>
        </div> <!-- container -->
    </div> <!-- wrapper -->
    <script src="//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>
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
    <script>
        $(document).ready(function () {
            // Lift card and show stats on Mouseover
            $('.card').hover(function(){
                    $(this).addClass('animate');
                }, function(){
                    $(this).removeClass('animate');
            });
        });
    </script>
    <script>
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
    </script>
</body>
</html>
