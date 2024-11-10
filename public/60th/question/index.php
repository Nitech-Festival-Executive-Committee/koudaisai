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
                        
                        </div>
                        <div style="margin-left:30px; margin-right:10px;">
                        <form action="thanks.php" method="post">
                            <div class="header">　性別</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <label style="font-weight:inherit"><input type="radio" name="jendar" value="男">男</input></label>
                            <br/>
                            <label style="font-weight:inherit"><input type="radio" name="jendar" value="女">女</input></label>
                            <br/>
                            <label style="font-weight:inherit"><input type="radio" name="jendar" value="無回答">無回答</input></label>
                            </div>
                            <br/>
                            
                            <div class="header">　年齢</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <select name="age" size="1" style="color:#000000">
                                <option value="" selected></option>
                                <option value="10代未満">10代未満</option>
                                <option value="10代">10代</option>
                                <option value="20代">20代</option>
                                <option value="30代">30代</option>
                                <option value="40代">40代</option>
                                <option value="50代">50代</option>
                                <option value="60代以上">60代以上</option>
                            </select>
                            </div>
                            <br/>

                            <div class="header">　名工大に在籍したことはありますか？</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <label style="font-weight:inherit"><input type="radio" name="enroll" value="在籍している">在籍している</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="enroll" value="在籍していた">在籍していた</input></label></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="enroll" value="在籍したことはない">在籍したことはない</input></label>
                            </div>
                            <br/>

                            <div class="header">　オンライン工大祭をどこで知りましたか？</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <label style="font-weight:inherit"><input type="radio" name="know" value="ポスター" onclick="displayoff('know_other')">ポスター</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="know" value="Twitter" onclick="displayoff('know_other')">Twitter</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="know" value="Instagram" onclick="displayoff('know_other')">Instagram</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="know" value="知人" onclick="displayoff('know_other')">知人</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="know" value="ラジオ" onclick="displayoff('know_other')">ラジオ</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="know" value="地域挨拶" onclick="displayoff('know_other')">地域挨拶</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="know" value="新聞" onclick="displayoff('know_other')">新聞</input></label><br/>

                            <label style="font-weight:inherit"><input type="radio" name="know" value="その他" onclick="displayon('know_other')">その他</input></label>
                            <input type="text" id="know_other" name="know_other" style="color:#000000"></input>
                            </div>
                            <br/>

                            <div class="header">　目当ての企画は何ですか？</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <input type="text" name="target" style="color:#000000"></input>
                            </div>
                            <br/>

                            <div class="header">　工大祭に対する満足度はどのくらいですか？</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <label style="font-weight:inherit"><input type="radio" name="satisfaction" value="満足">満足</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="satisfaction" value="どちらかというと満足">どちらかというと満足</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="satisfaction" value="どちらかというと不満足">どちらかというと不満足</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="satisfaction" value="不満足">不満足</input></label>
                            </div>
                            <br/>

                            <div class="header">　今後、工大祭に呼びたいゲストのジャンルはありますか？</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="ミュージシャン" onclick="displayoff(genre_other)">ミュージシャン</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="芸人" onclick="displayoff('genre_other')">芸人</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="俳優" onclick="displayoff('genre_other')">俳優</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="声優" onclick="displayoff('genre_other')">声優</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="YouTuber" onclick="displayoff('genre_other')">YouTuber</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="アイドル" onclick="displayoff('genre_other')">アイドル</input></label><br/>
                            <label style="font-weight:inherit"><input type="radio" name="genre" value="その他" onclick="displayon('genre_other')">その他</input></label>
                            <input type="text" id="genre_other" name="genre_other" style="color:#000000"></input>
                            </div>
                            
                            <br/>

                            <div class="header">　良かった企画があれば理由も含めてお書きください</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <textarea name="good" rows="4" cols="40" style="color:#000000"></textarea>
                            </div>
                            <br/>

                            <div class="header">　ご意見ご感想をお書きください</div>
                            <div style="margin-left:10px; margin-right:10px;">
                            <textarea name="opinion" rows="4" cols="40" style="color:#000000"></textarea>
                            </div>
                            <style>
                            textarea {
                                font-size: 18px;
                                display: inline-block;
                                width: 100%;
                            }  
                            </style> 
                            
                            <br/>
                            <div style="margin-left:10px; margin-right:10px;">
                            <button type="submit" onclick="" style="color:#000000">送信</button> 
                            </div>
                            <script>
                            document.getElementById("know_other").style.display ="none";
                            document.getElementById("genre_other").style.display ="none";
                            function displayon(name){
                                document.getElementById(name).style.display ="block";
                            }
                            function displayoff(name){
                                document.getElementById(name).style.display = "none";
                            }

                            </script>
                            
                        </form>
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
