<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $bono = $decoded_json->bono;

    $query = "insert into bonos(id, cantidad, visto) values('".$id."', '".$bono."', '0')";
    if(mysqli_query(conex(), $query)){
        echo 'Exito';
    }

    $query2 = "select * from usuarios where id='".$id."'";
    $result2 = mysqli_query(conex(), $query2);

    $fila2 = mysqli_fetch_array($result2, MYSQLI_ASSOC);

    $correo=$fila2["usuario"];
    $titulo='Bono Inmega';
    $mensaje='En hora buena '.$fila2["nombre"].' resibiras un bono de $'.$bono.' disfrutalo mucho! \n Saludos.';

    mail($correo, $titulo, $mensaje);
?>