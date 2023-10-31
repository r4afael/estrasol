<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $notificacion = utf8_decode($decoded_json->notificacion);
    $op = $decoded_json->op;

    if($op==1){

        $query = "update bonos set visto='1' where id='".$id."' and cantidad='".$notificacion."'";
        $result = mysqli_query(conex(), $query);

        if($result){
            echo 'actualizado';
        }
    }else{
        $query = "update sanciones set visto='1' where id='".$id."' and tipo='".$notificacion."'";
        $result = mysqli_query(conex(), $query);

        if($result){
            echo 'actualizado';
        }
    }
?>