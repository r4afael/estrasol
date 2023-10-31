<?php
function enviarEmail($email,$url)
{

require_once 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'STARTTLS'; //Modificar
	$mail->Host = 'smtp.office365.com'; //Modificar
	$mail->Port = 587; //Modificar

	$mail->SMTPOptions = array(
		'ssl' => array(
			'verify_peer' => false,
			'verify_peer_name' => false,
			'allow_self_signed' => true
		)
	);

	$mail->Username = 'webmaster@inmega.com'; //Modificar
	$mail->Password = 'Desarrollo02'; //Modificar

	$mail->setFrom('webmaster@inmega.com', ' PLATAFORMAS Y DESARROLLO'); //Modificar
	$mail->addAddress($email, $email);
	$mail->CharSet = 'UTF-8';
	$mail->Subject = "ACTUALIZACIÓN CONTRASEÑA";
	$mail->Body    = '<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>holi</title>
	</head>
	<body style="background-color: rgb(255, 255, 255) ">
	
	<!--Copia desde aquí-->
	<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
		<tr>
			<td style="background-color: #000000; text-align: left; padding: 0">
				<a href="https://www.inmega.com/">
					<img width="40%" style="display:block; margin: 5% 3%" src="https://na4as.voxco.com/Media/3/correo.png">
				</a>
			</td>
		</tr>
		<tr>
			<td style="background-color: #33533B; text-align: left; padding: 0">
				<a href="https://www.inmega.com/">
					<img width="5%" style="display:block; margin: 1.5% 3%" src="https://na4as.voxco.com/Media/3/correo3.png">
				</a>
			</td>
		</tr>
		
		<tr>
			<td style="background-color: #ecf0f1">
				<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
					<h2 style="color: #309e04; margin: 0 0 7px">Hola!</h2>
					<p style="margin: 2px; font-size: 15px">
					Se ha actualizado correctamente tu contraseña para el acceso a JUNK IN COLONBIA.</p>
					
					<div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
						<img style="padding: 0; width: 200px; margin: 5px" src="https://na4as.voxco.com/Media/3/correo2.png">
						<!--<img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">-->
					</div>
					<div style="width: 100%; text-align: center">
						<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="'.$url.'">Iniciar sesión</a>	
					</div>
					<br>
					<p style="margin: 2px; font-size: 12px">

						Por favor no responder a este email. Este buzón no está monitoreado y no recibirá una
						respuesta.
					</p>
					<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Powered by INMEGA</p>
				</div>
			</td>
		</tr>
	</table>
	<!--hasta aquí-->
	
	</body>
	</html>
	';
	$mail->IsHTML(true);

	if ($mail->send()){
		return true;
	}
	else{
		return false;
	}
	return false;
}

function emailExiste($email,$skin)
{
	global $mysqli;

	$stmt = $mysqli->prepare("SELECT idUsuario FROM usuarios2020 WHERE usuario = ? and skin = ? LIMIT 1");
	$stmt->bind_param("ss", $email,$skin);
	$stmt->execute();
	$stmt->store_result();
	$num = $stmt->num_rows;
	$stmt->close();

	if ($num > 0) {
		return true;
	} else {
		return false;
	}
}
function isEmail($email)
{
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		return true;
	} else {
		return false;
	}
}
//NO FUNCIONA
function getValor($campo, $valor)
{
	global $mysqli;

	$stmt = $mysqli->prepare("SELECT $campo FROM usuarios2020 WHERE usuario = ? LIMIT 1");
	$stmt->bind_param('s', $valor);
	$stmt->execute();
	$stmt->store_result();
	$num = $stmt->num_rows;

	if ($num > 0) {
		$stmt->bind_result($_campo);
		$stmt->fetch();
		return $_campo;
	} else {
		return null;
	}
}
//EL CHIDO
function getValor2($campo, $valor,$skin)
{
	global $mysqli;

	$stmt = $mysqli->prepare("SELECT $campo FROM usuarios2020 WHERE usuario = ? AND skin = ? LIMIT 1");
	$stmt->bind_param('ss', $valor,$skin);
	$stmt->execute();
	$stmt->store_result();
	$num = $stmt->num_rows;

	if ($num > 0) {
		$stmt->bind_result($_campo);
		$stmt->fetch();
		return $_campo;
	} else {
		return null;
	}
}
function generaTokenPass($user_id)
{
	global $mysqli;

	$token = generateToken();

	$stmt = $mysqli->prepare("UPDATE usuarios2020 SET token_password=?, password_request=1 WHERE idUsuario = ?");
	$stmt->bind_param('ss', $token, $user_id);
	$stmt->execute();
	$stmt->close();

	return $token;
}
function generateToken()
{
	$gen = md5(uniqid(mt_rand(), false));
	return $gen;
}
function enviarEmailR($email,$url)
{

require_once 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'STARTTLS'; //Modificar
	$mail->Host = 'smtp.office365.com'; //Modificar
	$mail->Port = 587; //Modificar

	#$mail->SMTPSecure = 'SMTP'; //Modificar
	#$mail->Host = 'mail.censosmkd.com'; //Modificar
	#$mail->Port = 26; //Modificar

	$mail->SMTPOptions = array(
		'ssl' => array(
			'verify_peer' => false,
			'verify_peer_name' => false,
			'allow_self_signed' => true
		)
	);

	$mail->Username = 'webmaster@inmega.com'; //Modificar
	$mail->Password = 'Desarrollo02'; //Modificar

	$mail->setFrom('webmaster@inmega.com', ' PLATAFORMAS Y DESARROLLO'); //Modificar
	$mail->addAddress($email, $email);
	$mail->CharSet = 'UTF-8';
	$mail->Subject = "Recuperar contraseña";
	$mail->Body    = '<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>holi</title>
	</head>
	<body style="background-color: rgb(255, 255, 255) ">
	
	<!--Copia desde aquí-->
	<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
		<tr>
			<td style="background-color: #000000; text-align: left; padding: 0">
				<a href="https://www.inmega.com/">
					<img width="40%" style="display:block; margin: 5% 3%" src="https://na4as.voxco.com/Media/3/correo.png">
				</a>
			</td>
		</tr>
		<tr>
			<td style="background-color: #33533B; text-align: left; padding: 0">
				<a href="https://www.inmega.com/">
					<img width="5%" style="display:block; margin: 1.5% 3%" src="https://na4as.voxco.com/Media/3/correo3.png">
				</a>
			</td>
		</tr>
		
		<tr>
			<td style="background-color: #ecf0f1">
				<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
					<h2 style="color: #309e04; margin: 0 0 7px">Hola!</h2>
					<p style="margin: 2px; font-size: 15px">
						Se ha solicitado la recuperación de su contraseña para JUNK IN COLONBIA. <br/><br/>Haz clic en el siguiente botón:</p>
					<br>
					<div style="width: 100%; text-align: center">
						<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="'.$url.'">Recuperar contraseña</a>	
					</div>
					<br>
					<p style="margin: 2px; font-size: 15px">
						<strong>Si tu no realizaste la solicitud solo ignora este mensaje</strong></p>
						<div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
							<img style="padding: 0; width: 200px; margin: 5px" src="https://na4as.voxco.com/Media/3/correo2.png">
							<!--<img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">-->
						</div>
						<p style="margin: 2px; font-size: 12px">

						Por favor no responder a este email. Este buzón no está monitoreado y no recibirá una
						respuesta.
					</p>
					<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Powered by INMEGA</p>
				</div>
			</td>
		</tr>
	</table>
	<!--hasta aquí-->
	
	</body>
	</html>
	';
	$mail->IsHTML(true);

	if ($mail->send()){
		return true;
	}
	else{
		return false;
	}
	return false;
}
function verificaTokenPass($user_id, $token)
{

	global $mysqli;

	$stmt = $mysqli->prepare("SELECT val FROM usuarios2020 WHERE idUsuario = ? AND token_password = ? AND password_request = 1 LIMIT 1");
	$stmt->bind_param('ss', $user_id, $token);
	$stmt->execute();
	$stmt->store_result();
	$num = $stmt->num_rows;

	if ($num > 0) {
		$stmt->bind_result($activacion);
		$stmt->fetch();
		if ($activacion == '1') {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

?>