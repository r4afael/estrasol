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
	sleep(1);

	$mysqli->set_charset('utf8');

	$usuario = $mysqli->real_escape_string($_POST['usuariolg']);
	$pas = $mysqli->real_escape_string($_POST['passlg']);

	$_SESSION['usuario'] = $usuario;

	//if($nueva_consulta = $mysqli->prepare("SELECT nombre, skin,val FROM usuarios2020 WHERE usuario = ? AND pass = ? AND skin = 'PPM-Demo-Adhesivos'")){
	if($nueva_consulta = $mysqli->prepare("SELECT us.idUsuario, us.nombre, us.usuario, us.pass,us.skin, us.idtipoUser, us.idlink, lp.skin, lp.link from usuarios2020 us
INNER JOIN linkspbi lp ON lp.idlink = us.idlink
INNER JOIN  tipousuarios tu ON tu.idtipoUser = us.idtipoUser WHERE us.usuario = ? AND us.pass = ? AND lp.skin = 'PPM-Demo-Adhesivos'")){

		$nueva_consulta->bind_param('ss', $usuario,$pas); 

		$nueva_consulta->execute();

		$resultado = $nueva_consulta->get_result();

		if ($resultado->num_rows == 1){
			$datos = $resultado->fetch_assoc();
			echo json_encode(array('error' => false, 'tipo' => $datos['val']));

		}else{
			echo json_encode(array('error' => true));
		}
		$nueva_consulta->close();

	}

}


$mysqli->close();

?>