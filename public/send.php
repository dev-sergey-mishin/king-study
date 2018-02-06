<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        
}

	$to = 'sergey.mishin.71@gmail.com, clients.kingstudy@gmail.com, getmoreleads@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = 'Обратный звонок'; //Загаловок сообщения
	$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Имя: '.$_POST['name'].'</p>
					<p>Телефон: '.$_POST['phone'].'</p>                        
					<p>email: '.$_POST['email'].'</p>                        
					<p>urlParams: '.$_POST['urlParams'].'</p>                        
				</body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	//$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
	return mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>