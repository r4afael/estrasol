<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $estatus = $decoded_json->estatus;

    $query = "delete from vacaciones where id='".$id."' and estatus='".$estatus."'";
    $result = mysqli_query(conex(), $query);

    if($result){
        echo 'cancelada';
    }
?>