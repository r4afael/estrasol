<?php
    include 'conexion.php';

    
    
    
    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;

    $query = "select * from bonos where id=".$id." and visto=0";
    $result = mysqli_query(conex(), $query);
    $datos = array();
    while($fila = mysqli_fetch_array($result, MYSQLI_ASSOC)){

        $row = array(
            'msg' => 'Felicidades recibiras un bono de $'.$fila["cantidad"]
        );
        array_push($datos, $row);
    }
    
    echo json_encode($datos);
    
?>