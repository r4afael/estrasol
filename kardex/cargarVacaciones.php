<?php
    include 'conexion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
    header('Content-Type:text/html; charset=utf-8');

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;

    $query = "select * from vacaciones where id='".$id."'";
    $result = mysqli_query(conex(), $query);
    
    $datos = array();
    while($fila = mysqli_fetch_array($result, MYSQLI_ASSOC)){

    $row = array(
        'vacaciones' => $fila["vacaciones"],
        'fecha' => $fila["fecha"],
        'estatus' => $fila["estatus"]
    );
    array_push($datos, $row);
    }
    
    echo json_encode($datos);
?>