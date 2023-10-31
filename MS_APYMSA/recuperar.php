<?php
/*$usuarios = $mysqli -> query();

if($usuarios->num_rows == 1):
	$datos = $usuarios->fetch_assoc();
	echo json_encode(array('error' => false, 'tipo' => $datos['skin']));
else:
	echo json_encode(array('error' => true));
endif; */

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
	session_start();
	require 'conexion.php';
	include 'enviar.php';
	sleep(1);
	//global $mysqli;
	$mysqli->set_charset('utf8');
	//$_SESSION['usuario'] = $usuario;
	$correo = $mysqli->real_escape_string($_POST['correo']);
	$skin = $mysqli->real_escape_string($_POST['skin']);
	if (isEmail($correo)) {
	if (empty($correo)){
		echo json_encode(array('error' => true, 'tipo' => "1"));
	}else{
		if (emailExiste($correo,$skin)) {
		$user_id = getValor2('idUsuario', $correo,$skin);
		$token = generaTokenPass($user_id);
		//$subdominio=getValor('skin', $correo);
		$url = 'https://' . $_SERVER["SERVER_NAME"] . '/'.$skin.'/cambia_pass.php?user_id=' . $user_id . '&token=' . $token;
		if (enviarEmailR($correo, $url)) {
			echo json_encode(array('error' => false, 'tipo' => $subdominio));
			//$errors2[] = "Hemos enviado un correo electronico a las direcion $email para restablecer tu contraseña.";
		}else {
			echo json_encode(array('error' => true, 'tipo' => "1"));
		}
			
		}
		else{
			echo json_encode(array('error' => true, 'tipo' => "2"));
		}
	}
	}else{
		echo json_encode(array('error' => true, 'tipo' => "1"));
	}

	

	

}


$mysqli->close();

?>