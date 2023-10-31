<?php
    include 'conexion.php';

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    
    $query = "select * from usuarios where id='".$id."'";
    $result = mysqli_query(conex(), $query);
    
    $fila = mysqli_fetch_array($result, MYSQLI_ASSOC);
        
        $ruta='img/fotos/'.$fila["foto"];
        $destino='exColaboradores/fotos/'.$fila["foto"];
        if(copy($ruta,$destino)){
            
            $ruta='archivos/';
            $destino='exColaboradores/archivos/';
            $archivos=glob("archivos/*_".$id.".docx")+glob("archivos/*_".$id.".jpg")+glob("archivos/*_".$id.".jpge")+glob("archivos/*_".$id.".png")+glob("archivos/*_".$id.".xlsx");
            foreach ($archivos as $archivo){
                $archivo_copiar= str_replace($ruta, $destino, $archivo);
                copy($archivo, $archivo_copiar);
            }
            $query2 = "insert into exColaboradores(id, usuario, pass, nombre, apellidop, apellidom, sexo, edad, direccion, fechaIngreso, area, jefe, foto, fecha_firma_de_contrato, fecha_vencimiento_de_contrato, estado_civil, nacionalidad, fecha_nacimiento, fecha_cumple, horario, rfc, curp, nss, numero_celular, escolaridad, salario_mensual, otros, antiguedad, salario_diario, salario_diario_imms, documentos_pendientes, credito_infonavit, solicitud_de_empleo, ine, acta_de_nacimiento, comprobante_domicilio, comprobante_de_estudios, cartas_recomendacion, antecedentes_no_penales, contratos, observaciones, clave_banco, alta, contrato_confidencialidad, oficina_alta_imms, oficina_fisicamente, periodicidad_de_pago, modalidad_trabajo, uniformes, fechaRegistro) values('".$fila["id"]."', '".$fila["usuario"]."', '".$fila["pass"]."', '".$fila["nombre"]."', '".$fila["apellidop"]."', '".$fila["apellidom"]."', '".$fila["sexo"]."', '".$fila["edad"]."', '".$fila["direccion"]."', '".$fila["fechaIngreso"]."', '".$fila["area"]."', '".$fila["jefe"]."', '".$fila["foto"]."', '".$fila["fecha_firma_de_contrato"]."', '".$fila["fecha_vencimiento_de_contrato"]."', '".$fila["estado_civil"]."', '".$fila["nacionalidad"]."', '".$fila["fecha_nacimiento"]."', '".$fila["fecha_cumple"]."', '".$fila["horario"]."', '".$fila["rfc"]."', '".$fila["curp"]."', '".$fila["nss"]."', '".$fila["numero_celular"]."', '".$fila["escolaridad"]."', '".$fila["salario_mensual"]."', '".$fila["otros"]."', '".$fila["antiguedad"]."', '".$fila["salario_diario"]."', '".$fila["salario_diario_imms"]."', '".$fila["documentos_pendientes"]."', '".$fila["credito_infonavit"]."', '".$fila["solicitud_de_empleo"]."', '".$fila["ine"]."', '".$fila["acta_de_nacimiento"]."', '".$fila["comprobante_domicilio"]."', '".$fila["comprobante_de_estudios"]."', '".$fila["cartas_recomendacion"]."', '".$fila["antecedentes_no_penales"]."', '".$fila["contratos"]."', '".$fila["observaciones"]."', '".$fila["clave_banco"]."', '".$fila["alta"]."', '".$fila["contrato_confidencialidad"]."', '".$fila["oficina_alta_imms"]."', '".$fila["oficina_fisicamente"]."', '".$fila["periodicidad_de_pago"]."', '".$fila["modalidad_trabajo"]."', '".$fila["uniformes"]."', '".$fila["fechaRegistro"]."')";
            $result2 = mysqli_query(conex(), $query2);
        }
        
    $query3 = "select * from vacaciones where id='".$id."'";
    $result3 = mysqli_query(conex(), $query3);
    
    while($fila3 = mysqli_fetch_array($result3, MYSQLI_ASSOC)){
        $query4 = "insert into exColaboradoresVacaciones(id, area, vacaciones, fecha, estatus) values('".$fila3["id"]."', '".$fila3["area"]."', '".$fila3["vacaciones"]."', '".$fila3["fecha"]."', '".$fila3["estatus"]."')";
        $result4 = mysqli_query(conex(), $query4);
    }
    
    $query5 = "select * from bonos where id='".$id."'";
    $result5 = mysqli_query(conex(), $query5);
    
    while($fila5 = mysqli_fetch_array($result5, MYSQLI_ASSOC)){
        $query6 = "insert into exColaboradoresBonos(id_bono, id, cantidad, visto) values('".$fila5["id_bono"]."', '".$fila5["id"]."', '".$fila5["cantidad"]."', '".$fila5["visto"]."')";
        $result6 = mysqli_query(conex(), $query6);
    }
    
    $query7 = "select * from sanciones where id='".$id."'";
    $result7 = mysqli_query(conex(), $query7);
    
    while($fila7 = mysqli_fetch_array($result7, MYSQLI_ASSOC)){
        $query8 = "insert into exColaboradoresSanciones(id, tipo, nota, visto) values('".$fila7["id"]."', '".$fila7["tipo"]."', '".$fila7["nota"]."', '".$fila7["visto"]."')";
        $result8 = mysqli_query(conex(), $query8);
    }
    
    

    array_map('unlink', glob("archivos/*_".$id.".docx"));
    array_map('unlink', glob("archivos/*_".$id.".jpg"));
    array_map('unlink', glob("archivos/*_".$id.".jpge"));
    array_map('unlink', glob("archivos/*_".$id.".png"));
    array_map('unlink', glob("archivos/*_".$id.".xlsx"));
    array_map('unlink', glob("archivos/*_".$id.".pdf"));
    array_map('unlink', glob("img/fotos/foto_".$id.".jpg"));
    array_map('unlink', glob("img/fotos/foto_".$id.".jpge"));
    array_map('unlink', glob("img/fotos/foto_".$id.".png"));
    $query = "delete from usuarios where id=".$id;
    $result = mysqli_query(conex(), $query);

    if($result and $result2){
        echo 'eliminado';
    }
?>