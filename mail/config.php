<?php

require 'lib/class.phpmailer.php';
require 'lib/class.smtp.php';

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.bk.ru'; 
$mail->SMTPAuth   = true;
$mail->CharSet="UTF-8";
$mail->SMTPAuth = true; 
$mail->Username = 'taranenko.petr'; // Ваш логин
$mail->Password = 'phpmailer1'; // Ваш пароль
$mail->SMTPSecure = 'ssl'; 
$mail->Port = '465';	
$mail->SetFrom('taranenko.petr@bk.ru'); // Ваш Email
$mail->addAddress('petr.tarantul@gmail.com'); // Email получателя

$name= $_POST["name"];
$email= $_POST["email"];
$message= $_POST["message"];
 

$mail->Subject = "Тема письма";
 
// Подготовка шапки сообщения
$mail->Body.= "Имя: ";
$mail->Body.= $name;
$mail->Body.= "\n";
 
$mail->Body.= "Email: ";
$mail->Body.= $email;
$mail->Body.= "\n";
 
$mail->Body.= "Сообщение: ";
$mail->Body.= $message;
$mail->Body.= "\n";
 
/*// посылаем сообщение
$mail->success= mail($Subject, $Body, $email);*/
 

// редирект
if($mail->send()){
 echo 'ok';
}else{
 	echo "ERROR";	
}

 
?>

