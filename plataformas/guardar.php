<?php
include ("conexion.php");
$mysqli->set_charset('utf8');

  $nombre = $_POST["firstName"];
  $email = $_POST["email"];
  $pass = $_POST["pass"];
  $dashboard = $_POST["dashboard"];
  $sucursal_ban = $_POST["sucursal_ban"];
  $tuberia = 'tuberia';
  $tipouser= '2';
  $val = '1';
  //echo $dashboard;
  
  if ($dashboard == 16){
      
      $query = "INSERT INTO usuarios2020 (nombre, usuario, pass,skin,val,idtipoUser, idlink)VALUES('$nombre','$email','$pass','$tuberia','$val',$tipouser,$dashboard)";
      $result = $mysqli->query($query);
      echo json_encode(array('error' => false,'tipo' =>'Tuberia'));
      
  }elseif($dashboard == 20){
      
      $tuberia = '';
      $query2 = "INSERT INTO usuarios2020 (nombre, usuario, pass,skin,val,idtipoUser, idlink,sucursal)VALUES('$nombre','$email','$pass','$tuberia','$val',$tipouser,$dashboard,'$sucursal_ban')";
      $result2 = $mysqli->query($query2);
      echo json_encode(array('error' => false,'tipo' =>'Es NPS-Y-TTB'));
      
  }elseif($dashboard != 16){
      
      $tuberia = '';
      $query2 = "INSERT INTO usuarios2020 (nombre, usuario, pass,skin,val,idtipoUser, idlink)VALUES('$nombre','$email','$pass','$tuberia','$val',$tipouser,$dashboard)";
      $result2 = $mysqli->query($query2);
      echo json_encode(array('error' => false,'tipo' =>'No es tuberia'));
      
  
      
  }else{
      echo json_encode(array('error' => true, 'tipo' => 'Ocurrio un error'));
  }
  
  //echo $nombre;
  //echo $dashboard;
 
  

/*$query = "INSERT INTO usuarios2020 (nombre, usuario, pass,skin,idtipoUser, idlink)VALUES('$nombre','$email','$pass','$tuberia',$tipouser,$dashboard)";
$result = $mysqli->query($query);*/



?>