<?php
    include 'conexion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
    header('Content-Type:text/html; charset=utf-8');
    date_default_timezone_set('America/Mexico_City');

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $jefe = $decoded_json->jefe;

    $query = "select usuarios.id, nombre, jefe, vacaciones, foto, fecha, comentario from usuarios INNER JOIN vacaciones where vacaciones.estatus='Pendiente' and vacaciones.id=usuarios.id";
    $result = mysqli_query(conex(), $query);
    
    $datos = array();
    while($fila = mysqli_fetch_array($result, MYSQLI_ASSOC)){

        if($fila["jefe"]>0){
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
    }
    
    echo json_encode($datos);
?>