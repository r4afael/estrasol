<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: text/html;charset=utf-8');

    include ("conexion.php");
    $mysqli->set_charset('utf8');
    
    
    
      $nombres = $_POST['nombres'];
      $apellidos = $_POST['apellidos'];
      $fecha_nacimiento = $_POST['fecha_nacimiento'];
      $estado = $_POST['estado'];
      $ciudad = $_POST['ciudad'];
      $codigo_postal = $_POST['codigo_postal'];	
      $celular = $_POST['celular'];
      $telefono_fijo = $_POST['telefono_fijo'];
      $otro_telefono = $_POST['otro_telefono'];
      $email = $_POST['email'];
      $email2 = $_POST['email2'];
      $android = $_POST['android'];
      $wifi = $_POST['wifi'];
      $experiencia_campo = $_POST['experiencia_campo'];
      $experiencia_levantamiento = $_POST['experiencia_levantamiento'];
      $viajar = $_POST['viajar'];
      $a_ciudades = $_POST['a_ciudades'];
      $trabaja = $_POST['trabaja'];
      $cual = $_POST['cual'];
      $giro_tipo = $_POST['giro_tipo'];
      $ciudad_trabajo = $_POST['ciudad_trabajo'];
      $inmega = $_POST['inmega'];
      $medio = $_POST['medio'];

      //echo $nombres;



$sql3 = "INSERT INTO `informacionp` (`nombres`, `apellidos`, `fecha_nacimiento`, `estado`, `ciudad`, `codigo_postal`, `celular`, `telefono_fijo`, `otro_telefono`, `email`, `email2`, `android`, `wifi`, `experiencia_campo`, `experiencia_levantamiento`, `viajar`, `a_ciudades`, `trabaja`, `cual`, `giro_tipo`, `ciudad_trabajo`, `inmega`, `medio`) VALUES ('$nombres', '$apellidos', '$fecha_nacimiento', '$estado', '$ciudad', '$codigo_postal', '$celular', '$telefono_fijo', '$otro_telefono', '$email', '$email2', '$android', '$wifi', '$experiencia_campo', '$experiencia_levantamiento', '$viajar', '$a_ciudades', '$trabaja', '$cual', '$giro_tipo', '$ciudad_trabajo', '$inmega', '$medio')";

$resultado = $mysqli->query($sql3);


//echo"Guardado correctamente";

if($resultado){
  echo "Gracias por contestar";
}else{
  echo "Error".mysql_error();
}



?>