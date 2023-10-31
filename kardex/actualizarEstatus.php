<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $solicitud = $decoded_json->solicitud;
    $respuesta = $decoded_json->respuesta;
    $responsable = $decoded_json->responsable;

    $query = "update vacaciones set estatus='".$respuesta."' where fecha='".$solicitud."' and id='".$id."'";
    $result = mysqli_query(conex(), $query);

    $query2 = "SELECT nombre, vacaciones from usuarios INNER JOIN vacaciones WHERE vacaciones.fecha='22/2/2023-24/2/2023' and usuarios.id=".$id." and usuarios.id=vacaciones.id";
    $result2 = mysqli_query(conex(), $query2);

    $fila = mysqli_fetch_array($result2, MYSQLI_ASSOC);

    $correo=$fila["usuario"];
    $titulo='Vacaciones '.$solicitud;
    $mensaje='En hora buena '.$fila["nombre"].' tus '.$fila["vacaciones"].' fueron aprobadas por '.$responsable.' disfrutalas mucho! \n Saludos.';

    mail($correo, $titulo, $mensaje);
    
    if($result){
        echo 'actualizado';
    }
?>