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
	$skin = $mysqli->real_escape_string($_POST['skin']);
	$patron="/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/";
	if ($pas != $pas_con){
		echo json_encode(array('error' => true, 'tipo' => "1"));
	
	}else if (!preg_match($patron, $pas)) {
		echo json_encode(array('error' => true, 'tipo' => "2")); 
	}
	else{
		
		$estado = '1';
		$id=$_SESSION['usuario'];

		$stmt = $mysqli->prepare("UPDATE usuarios2020 AS us
                                INNER JOIN linkspbi AS lp ON us.idlink = lp.idlink
                                SET us.val = ?,us.pass = ?
                                WHERE us.usuario = ? AND lp.skin = ?");
		$stmt->bind_param('ssss', $estado,$pas, $id,$skin);
		$result = $stmt->execute();
		$stmt->close();
		//$subdominio=getValor('skin', $id);
		$url = 'https://' . $_SERVER["SERVER_NAME"] . '/'.$skin.'/index.php';
		enviarEmail($id,$url);
		echo json_encode(array('error' => false, 'tipo' => $skin));
	}

	

	

}


$mysqli->close();

?>