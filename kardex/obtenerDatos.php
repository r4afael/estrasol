<?php
    include 'conexion.php';
    include 'sesion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
    header('Content-Type:text/html; charset=utf-8');

    $sesion = new sesionUsuario();

    $usuario=$sesion->obtenerVariableSesion();

    $query = "select * from usuarios where usuario='".$usuario."'";
    $result = mysqli_query(conex(), $query);
    
    $fila = mysqli_fetch_array($result, MYSQLI_ASSOC);

    $datos = array(
        'id' => $fila["id"],
        'nombre' => utf8_encode($fila["nombre"]),
        'apellidop' => utf8_encode($fila["apellidop"]),
        'apellidom' => utf8_encode($fila["apellidom"]),
        'sexo' => $fila["sexo"],
        'edad' => $fila["edad"],
        'direccion' => utf8_encode($fila["direccion"]),
        'fechaIngreso' => $fila["fechaIngreso"],
        'area' => utf8_encode($fila["area"]),
        'jefe' => $fila["jefe"],
        'foto' => utf8_encode($fila["foto"])
    );
    
    echo json_encode($datos);

?>