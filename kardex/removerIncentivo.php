<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $cantidad = $decoded_json->cantidad;
    
    if($id!='' and $cantidad!=''){

        $query = "delete from bonos where id=".$id." and cantidad='".$cantidad."'";
        $result = mysqli_query(conex(), $query);
    
        if($result){
            echo 'eliminado';
        }
    }else{
        $id2 = $_POST['id2'];
        $cantidad2 = $_POST['cantidad2'];
        
        $query = "delete from bonos where id=".$id2." and cantidad='".$cantidad2."'";
        $result = mysqli_query(conex(), $query);
    
        if($result){
            echo 'eliminado';
        }
    }
?>