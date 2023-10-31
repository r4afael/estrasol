<?php
    include 'conexion.php';
    include 'sesion.php';

    $sesion = new sesionUsuario();

    $usuario=$sesion->obtenerVariableSesion();

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $vacaciones = $decoded_json->vacaciones;
    $fecha = $decoded_json->fecha;
    $area = utf8_decode($decoded_json->area);
    $comentario = utf8_decode($decoded_json->comentario);

    $query = "insert into vacaciones(id, area, vacaciones, fecha, comentario, estatus) values('".$id."', '".$area."', '".$vacaciones."', '".$fecha."', '".$comentario."', 'Pendiente')";
    if(mysqli_query(conex(), $query)){
        echo 'Exito';
    }
    
    

?>