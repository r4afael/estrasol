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
	$pas = $mysqli->real_escape_string($_POST['passlg1']);
	$pas_con = $mysqli->real_escape_string($_POST['passlg2']);
	$user_id = $mysqli->real_escape_string($_POST['user_id']);
	$token = $mysqli->real_escape_string($_POST['token']);
	if ($pas != $pas_con){
		echo json_encode(array('error' => true, 'tipo' => '1'));
	}else{
		
		global $mysqli;

		$stmt = $mysqli->prepare("UPDATE usuarios2020 SET pass = ?, token_password='', password_request=0 WHERE idUsuario = ? AND token_password = ?");
		$stmt->bind_param('sis', $pas, $user_id, $token);

		if ($stmt->execute()) {
			echo json_encode(array('error' => false, 'tipo' => '2'));
		} else {
			echo json_encode(array('error' => true, 'tipo' => '3'));
		}
	}

	

	

}


$mysqli->close();

?>