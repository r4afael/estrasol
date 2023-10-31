<?php

$servidor = "localhost";
    $baseDatos = "censosmk_skins";
    $nombreUsuario = "censosmk_censosmk";
    $password = "]!0[rT^Plk[y_2023:*";
    
    $conexion = new mysqli($servidor, $nombreUsuario, $password, $baseDatos);
    
    if ($conexion->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->registro;
    $nombre = $decoded_json->nombre;
    $usuario = $decoded_json->usuario;
    $pass = $decoded_json->pass;

    $sql = "update usuarios2020 set nombre=$nombre, usuario=$usuario, pass=$pass where idUsuario=$id;";
    if(mysqli_query($conexion, $sql)){
        echo "Registro actualizado.";
    }else{
        echo "ERROR: No se ejecuto";
    }

?>