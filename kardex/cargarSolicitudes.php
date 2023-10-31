<?php
    include 'conexion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
    header('Content-Type:text/html; charset=utf-8');
    date_default_timezone_set('America/Mexico_City');

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $area = utf8_decode($decoded_json->area);
    $id = $decoded_json->id;

    $query = "SELECT vacaciones, nombre, foto, fecha, comentario, usuarios.id from usuarios INNER JOIN vacaciones where usuarios.area='".$area."' and usuarios.id!=".$id." and vacaciones.id=usuarios.id and vacaciones.estatus='Pendiente'";
    $result = mysqli_query(conex(), $query);
    
    $datos = array();
    while($fila = mysqli_fetch_array($result, MYSQLI_ASSOC)){

        $row = array(
            'id' => $fila["id"],
            'vacaciones' => $fila["vacaciones"],
            'nombre' => utf8_encode($fila["nombre"]),
            'foto' => utf8_encode($fila["foto"]),
            'fecha' => $fila["fecha"],
            'comentario' => utf8_encode($fila["comentario"])
        );
        array_push($datos, $row);
    }
    
    echo json_encode($datos);
?>