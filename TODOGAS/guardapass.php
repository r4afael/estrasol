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
	$patron="/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/";
	if ($pas != $pas_con){
		echo json_encode(array('error' => true, 'tipo' => '1'));
	}else if (!preg_match($patron, $pas)) {
		echo json_encode(array('error' => true, 'tipo' => "2")); 
	}else{
		
		global $mysqli;

		$stmt = $mysqli->prepare("UPDATE usuarios2020 SET pass = ?, token_password='', password_request=0 WHERE idUsuario = ? AND token_password = ?");
		$stmt->bind_param('sis', $pas, $user_id, $token);

		if ($stmt->execute()) {
			$campo='usuario';
			$skin='skin';
			$stmt = $mysqli->prepare("SELECT us.$campo,lp.$skin from usuarios2020 us
			INNER JOIN linkspbi lp ON lp.idlink = us.idlink
			INNER JOIN  tipousuarios tu ON tu.idtipoUser = us.idtipoUser WHERE us.idUsuario = ? LIMIT 1");
			
			$stmt->bind_param('s',  $user_id);
			$stmt->execute();
			$stmt->store_result();
			$num = $stmt->num_rows;

			if ($num > 0) {
				$stmt->bind_result($_campo,$_skin);
				//$stmt->bind_result($_skin);
				$stmt->fetch();
				//$subdominio=getValor('skin', $_campo);
				$url = 'https://' . $_SERVER["SERVER_NAME"] . '/'.$_skin.'/index.php';
				enviarEmail($_campo,$url);
				
				echo json_encode(array('error' => false, 'tipo' => '2'));
			} else {
				echo json_encode(array('error' => true, 'tipo' => '2'));
			}
			
			
		} else {
			echo json_encode(array('error' => true, 'tipo' => '2'));
		}
	}

	

	

}


$mysqli->close();
