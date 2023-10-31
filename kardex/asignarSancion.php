<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $opcion = $decoded_json->opcion;
    $nota = utf8_decode($decoded_json->nota);

    $query = "insert into sanciones(id, tipo, nota, visto) values('".$id."', '".$opcion."', '".$nota."', '0')";
    if(mysqli_query(conex(), $query)){
        echo 'Exito';
    }

    $query2 = "select * from usuarios where id='".$id."'";
    $result2 = mysqli_query(conex(), $query2);

    $fila2 = mysqli_fetch_array($result2, MYSQLI_ASSOC);

    $correo=$fila2["usuario"];
    $titulo='Sancion '.$opcion;
    $mensaje='Lo sentimos '.$fila2["nombre"].' pero resibiras una sancion de '.$opcion.' '.$nota;

    mail($correo, $titulo, $mensaje);
?>