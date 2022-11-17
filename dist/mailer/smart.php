<?php
$name = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$email .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$text .= "Сообщение: ".$_POST['text']."<br>"; //полученное из формы name=phone
$headers = 'From: zeywi@mail.ru';
mail("hiroto.development@gmail.com", "Заявка с сайта", $name, $email, $text, $headers);
header("Location: index.html");
exit();
?>