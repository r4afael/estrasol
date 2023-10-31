<?php
include_once 'val_skin.php';
/*$usuarios = $mysqli -> query();

if($usuarios->num_rows == 1):
	$datos = $usuarios->fetch_assoc();
	echo json_encode(array('error' => false, 'tipo' => $datos['skin']));
else:
	echo json_encode(array('error' => true));
endif; */

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
    $link = mysqli_connect("localhost", "censosmk", "]!0[rT^Plk[y", "censosmk_skins");
    // Chequea coneccion
    if($link === false){
        die("ERROR: No pudo conectarse con la DB. " . mysqli_connect_error());
    }
	session_start();
	require 'conexion.php';
	sleep(1);

	$mysqli->set_charset('utf8');

	$usuario = $mysqli->real_escape_string($_POST['usuariolg']);
	$pas = $mysqli->real_escape_string($_POST['passlg']);

	

	
	//if($nueva_consulta = $mysqli->prepare("SELECT nombre, skin,val FROM usuarios2020 WHERE usuario = ? AND pass = ? AND skin = 'ENTENDIMIENTO-DE-INHIBIDORES-DE-COMPRA'")){
    if($nueva_consulta = $mysqli->prepare("SELECT us.idUsuario, us.nombre, us.usuario, us.pass,us.skin, us.idtipoUser, us.idlink,us.val,us.idtipoUser, lp.skin, lp.link from usuarios2020 us
    INNER JOIN linkspbi lp ON lp.idlink = us.idlink
    INNER JOIN  tipousuarios tu ON tu.idtipoUser = us.idtipoUser WHERE us.usuario = ? AND us.pass = ? AND lp.skin ="."'".$skin_global."'")){


		$nueva_consulta->bind_param('ss', $usuario,$pas); 

		$nueva_consulta->execute();

		$resultado = $nueva_consulta->get_result();

		if ($resultado->num_rows == 1){
		    $_SESSION['usuario'] = $usuario;
			$datos = $resultado->fetch_assoc();
			$_SESSION['tipoUser'] = $datos['idtipoUser'];
			echo json_encode(array('error' => false, 'tipo' => $datos['val']));
			//Con esta linea definimos la zona horaria en mi caso es México.
            date_default_timezone_set("America/Mexico_City");
            //Definimos la variable $mifecha y usamos la función date, entre paréntesis
            //le damos el formato de la fecha y la hora.
            $mifecha = date('Y-m-d H:i:s');
            //echo $mifecha;
            $idusuario=$datos['idUsuario'];
            // Ejecuta la actualizacion del registro
            $sql = "UPDATE usuarios2020 SET ultInico='$mifecha' WHERE idUsuario=$idusuario";
            if(mysqli_query($link, $sql)){
                //echo "Registro actualizado.";
            } else {
                //echo "ERROR: No se ejecuto $sql. " . mysqli_error($link);
            }
            // Cierra la conexion
            
            
            $sql = "INSERT INTO login (usuario) VALUES ($idusuario)";
            if(mysqli_query($link, $sql)){
                //echo "Registro actualizado.";
            } else {
                //echo "ERROR: No se ejecuto $sql. " . mysqli_error($link);
            }
            // Cierra la conexion
            mysqli_close($link);
                    

		}else{
			echo json_encode(array('error' => true));
		}
		$nueva_consulta->close();

	}

}


$mysqli->close();

?>