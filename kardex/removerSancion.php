<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $tipo = $decoded_json->tipo;

    $query = "delete from sanciones where id=".$id." and tipo='".$tipo."'";
    $result = mysqli_query(conex(), $query);

    if($result){
        echo 'eliminado';
    }
?>