 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
<meta http-equiv="Content-Language" content="ja" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="robots" content="noodp" />
<meta name="author" content="名古屋工業大学第54回工大祭実行委員会" />
<meta name="copyright" content="Copyright (C) 2016 名古屋工業大学第54回工大祭実行委員会 All Rights Reserved." />
<meta name="robots" content="ALL" />
<meta name="keywords" content="工大祭, 名工祭, 大学祭, 名古屋工業大学, 名工大, 名工" />
<meta name="description" content="名古屋工業大学の大学祭－工大祭の公式HP！" />
<link rel="shortcut icon" href="http://www.koudaisai.com/favicon.ico" />
<meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1" />
<link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="./css/tablet.css" rel="stylesheet" type="text/css" media="all" />
<link href="./css/smart.css" rel="stylesheet" type="text/css" media="all" />
<title>新入生歓迎ボウリング大会応募フォーム - 第54回工大祭</title>
</head>
<body>
<div id="wrapper">
<div id="container">

<!--mailsendtoparticipant-->

<?php
extract($_POST);
$name=htmlspecialchars($_POST["name"],ENT_QUOTES,"UTF-8");
$fname=htmlspecialchars($_POST["fname"],ENT_QUOTES,"UTF-8");
$group=htmlspecialchars($_POST["group"],ENT_QUOTES,"UTF-8");
$mailaddress=htmlspecialchars($_POST["mailaddress"],ENT_QUOTES,"UTF-8");
$member=htmlspecialchars($_POST["member"],ENT_QUOTES,"UTF-8");
$to=htmlspecialchars($_POST["mailaddress"],ENT_QUOTES,"UTF-8");
$to2="kazuki.matsuoka@koudaisai.com";
$to1="kazuki.matsuoka@koudaisai.com";

$title="模擬店募集応募について";
$all="応募ありがとうございました！
	今後に関することは担当者から
	ご連絡させていただきますのでしばらくお待ちください。
$to2
";

//mailsendtohead
$title2="模擬店募集応募情報";
$all2="
応募情報
氏名：$name
フリガナ：$fname
団体名：$group
メールアドレス：$mailaddress
メンバーに名工生がいるかどうか：$member
";

$from2="kazuki.matsuoka@koudaisai.com";


error_reporting(E_ALL);
ini_set('display_errors', 1);

//文字化け対策
mb_language('uni');
mb_internal_encoding('utf-8');

//文字列作成
$data[]=array("","$name","$fname","$sex","","$scorename","~$callnumber","$mailaddress","$department");

//文字化け回避関数
function arr2csv($fields) {
    $fp = fopen('php://temp', 'r+b');
    foreach($fields as $field) {
        fputcsv($fp, $field);
    }
    rewind($fp);
    $tmp = str_replace(PHP_EOL, "\r\n", stream_get_contents($fp));
    return mb_convert_encoding($tmp, 'SJIS-win', 'UTF-8');
}
//書き込み関数
function datawrite($d) {
	$fp = fopen("list.csv", "a");
	fwrite($fp,arr2csv($d));
	fclose($fp);
	return 1;
}

if(datawrite($data) && mb_send_mail($to2,$title2,$all2,"From:$from2","-f $to2") && mb_send_mail($to,$title,$all,"From:$to2","-f $to1"))
echo '<div class="text">
    <img src="./img/point.png" alt="" class="mark1">
    <h2 class="subtitle1">応募完了</h2>
<div class="bun">
<p class="matter">応募完了しました。<br />
登録されたメールアドレス宛に確認メールを送信致しましたので、ご確認をお願いします。<br />
</p>
</div>
</div>';
else
echo '<div class="text">
    <img src="./img/point.png" alt="" class="mark2">
    <h2 class="subtitle2">エラー</h2>
<div class="bun">
<p class="matter">
お手数ですが、もう一度最初から応募をお願いします。申し訳ございません。</p>
</div>
</div>';
?>
<br />
<div class="text">
<div class="bun">
<p class="matter">
ご不明な点は担当までお問い合わせ下さい。<br />
名古屋工業大学第54回工大祭実行委員会 <br />担当:<br />
<img src="./img/callsprt2.png" id="gazou1" alt=""></img>
</p>
</div>
</div>
<br /><br /><hr>
<center><font size="-1">Copyright (C) 2016 名古屋工業大学第54回工大祭実行委員会 All Rights Reserved.</font></center>

</div><!-- interior -->
</div><!-- container -->
<br /><br /><br />
<!-- style="background-color : rgb(248,182,45)" -->
<br /><br /><br />
</body>
</html>
