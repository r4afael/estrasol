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
	include_once 'val_skin.php';
	sleep(1);

	$mysqli->set_charset('utf8');

	$usuario = $mysqli->real_escape_string($_POST['usuariolg']);
	$pas = $mysqli->real_escape_string($_POST['passlg']);

	

	if($nueva_consulta = $mysqli->prepare("SELECT us.idUsuario, us.nombre, us.usuario, us.pass,us.skin, us.idtipoUser, us.idlink,us.val, lp.skin, lp.link from usuarios2020 us
INNER JOIN linkspbi lp ON lp.idlink = us.idlink
INNER JOIN  tipousuarios tu ON tu.idtipoUser = us.idtipoUser WHERE us.usuario = ? AND us.pass = ? AND lp.skin ="."'".$skin_global."'")){

		$nueva_consulta->bind_param('ss', $usuario,$pas); 

		$nueva_consulta->execute();

		$resultado = $nueva_consulta->get_result();

		if ($resultado->num_rows == 1){
			$datos = $resultado->fetch_assoc();
			echo json_encode(array('error' => false, 'tipo' => $datos['val']));
			$_SESSION['usuario'] = $usuario;

		}else{
			echo json_encode(array('error' => true));
		}
		$nueva_consulta->close();

	}

}


$mysqli->close();

?>