<?php
    include 'conexion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado

    $query = "select * from vacaciones where estatus='Aprobada'";
    $result = mysqli_query(conex(), $query);
    date_default_timezone_set('America/Mexico_City');
    $datos = array();
    while($fila = mysqli_fetch_array($result, MYSQLI_ASSOC)){

        $query2 = "select * from usuarios where id='".$fila["id"]."'";
        $result2 = mysqli_query(conex(), $query2);
        $fila2 = mysqli_fetch_array($result2, MYSQLI_ASSOC);

        $periodo = explode("-", $fila["fecha"]);
        $fechaObtenida = $periodo[1];
        $arregloFecha = explode("/", $fechaObtenida);
        $diabd = $arregloFecha[0];
        $mesbd = $arregloFecha[1];
        $yearbd = $arregloFecha[2];

        

        if(compararFechas($diabd, $mesbd, $yearbd)){
            $row = array(
                'id' => $fila["id"],
                'vacaciones' => $fila["vacaciones"],
                'nombre' => utf8_encode($fila2["nombre"]),
                'foto' => $fila2["foto"],
                'fecha' => $fila["fecha"]
            );
            array_push($datos, $row);
        }
    }

    function compararFechas($dia, $mes, $year){
        $fecha_actual = getdate();
        if($fecha_actual['year']>$year){
            return FALSE;
        }else if($fecha_actual['mon']>$mes){
            return FALSE;
        }else if($fecha_actual['mon']==$mes and $fecha_actual['mday']>$dia){
            return FALSE;
        }else{
            return TRUE;
        }

    }

    echo json_encode($datos);
?>