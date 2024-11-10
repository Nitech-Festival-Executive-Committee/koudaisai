<?php
session_start();
?>
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
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<title>新入生歓迎ボウリング大会応募フォーム - 第54回工大祭</title>
</head>
<body>
<div id="wrapper">
<div id="container">
<div class="text">
    <?php
    extract($_POST);
    $token=htmlspecialchars($_POST["token"],ENT_QUOTES,"UTF-8");
    if ($_SESSION['token']!=$token){
        echo "エラーです。最初からやり直してください。申し訳ありません。";
    }
    else {
        $TOKEN_LENGTH=16;
        $bytes=openssl_random_pseudo_bytes($TOKEN_LENGTH);
        $_SESSION['token']=bin2hex($bytes);
        echo '
    <img src="./img/point.png" alt="" class="mark3">
<h2 class="subtitle1">内容確認</h2>
<div class="bun">
<p class="matter">以下の内容を確認し、よろしければ送信してください。</p>
</div>
<table id="confirm" border="1" class="hyou">
	<tr>
		<th>氏名</th>
		<td>';
        if (htmlspecialchars($_POST["name"],ENT_QUOTES,"UTF-8")===""){
            echo '<font color="#ff0000">氏名を入力してください</font>';
        }
        else {
		echo htmlspecialchars($_POST["name"],ENT_QUOTES,"UTF-8");
        $num=1;
        }
		echo '</td>
	</tr>
	<tr>
		<th>フリガナ</th>
		<td>';
        if (htmlspecialchars($_POST["fname"],ENT_QUOTES,"UTF-8")==="") {
        echo '<font color="#ff0000">フリガナを入力してください</font>';
        }
        elseif (!preg_match("/^[ァ-ヶー]+$/u", htmlspecialchars($_POST["fname"],ENT_QUOTES,"UTF-8"))){
            echo '<font color="#ff0000">カタカナでお願いします</font>';
        }
        else {
		echo htmlspecialchars($_POST["fname"],ENT_QUOTES,"UTF-8");
        }
        $num++;
        echo '</td>
	</tr>
    <tr>
		<th>団体名</th>
		<td>';
        if (htmlspecialchars($_POST["group"],ENT_QUOTES,"UTF-8")===""){
        echo '<font color="#ff0000">団体名を入力してください</font>';
        }
        else {
		echo htmlspecialchars($_POST["group"],ENT_QUOTES,"UTF-8");
        $num++;
        }
		echo '
		</td>
	</tr>
	<tr>
		<th>メールアドレス</th>
		<td style="word-break: break-all;">';
        if (htmlspecialchars($_POST["mailaddress"],ENT_QUOTES,"UTF-8")===""){
        echo '<font color="#ff0000">メールアドレスを<br />入力してください</font>';
        }
        else {
		echo htmlspecialchars($_POST["mailaddress"],ENT_QUOTES,"UTF-8");
        $num++;
        }
		echo '
		</td>
	</tr>
	<tr>
		<th>メンバーに名工生がいるかどうか</th>
		<td>';
        if (htmlspecialchars($_POST["member"],ENT_QUOTES,"UTF-8")===""){
        echo '<font color="#ff0000">選択してください</font>';
        }
        else {
		echo htmlspecialchars($_POST["member"],ENT_QUOTES,"UTF-8");
        $num++;
        }
		echo '
		</td>
	</tr>
</table>
<form action="form3.php" method="post" class="entry">
<div class="button" style="text-align: center;">';
if ($num==5){
echo '
<input type="submit" value="送信する" />
<input type="button" onclick="self.history.back()" value="入力画面に戻る" />';
}
else {
    echo '<input type="button" onclick="self.history.back()" value="入力画面に戻る" />';
}
/*button_end*/
echo '
</div>
<input type="hidden" value="'.htmlspecialchars($_POST["name"],ENT_QUOTES,"UTF-8").'" name="name"/>
<input type="hidden" value="'.htmlspecialchars($_POST["fname"],ENT_QUOTES,"UTF-8").'" name="fname"/>
<input type="hidden" value="'.htmlspecialchars($_POST["mailaddress"],ENT_QUOTES,"UTF-8").'" name="mailaddress"/>
<input type="hidden" value="'.htmlspecialchars($_POST["department"],ENT_QUOTES,"UTF-8").'" name="member"/>
<input type="hidden" name="token" value="'.htmlspecialchars($_SESSION["token"],ENT_QUOTES,"UTF-8").'"/>
</form>';
echo '
<br /><br /><hr />
<center><font size="-1">Copyright (C) 2016 名古屋工業大学第54回工大祭実行委員会 All Rights Reserved.</font></center>
</div>
</div><!-- ./#container -->
</div><!-- ./#wrapper -->';
}
?>
</body>
</html>
