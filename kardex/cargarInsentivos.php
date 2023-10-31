<?php
    include 'conexion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
    header('Content-Type:text/html; charset=utf-8');

    $query = "SELECT cantidad, visto, apellidop, apellidom, nombre, foto, area, usuarios.id from usuarios INNER JOIN bonos where bonos.id=usuarios.id";
    $result = mysqli_query(conex(), $query);
    
    $datos = array();
    while($fila = mysqli_fetch_array($result, MYSQLI_ASSOC)){

        $row = array(
            'cantidad' => $fila["cantidad"],
            'apellidom' => utf8_encode($fila["apellidom"]),
            'nombre' => utf8_encode($fila["nombre"]),
            'apellidop' => utf8_encode($fila["apellidop"]),
            'foto' => utf8_encode($fila["foto"]),
            'area' => utf8_encode($fila["area"]),
            'id' => $fila["id"],
            'visto' => $fila["visto"]
        );
        array_push($datos, $row);
    }
    
    echo json_encode($datos);
?>