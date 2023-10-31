<?php
    include 'conexion.php';
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
    header('Content-Type:text/html; charset=utf-8');

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;

    $query = "select * from usuarios where id=".$id;
    $result = mysqli_query(conex(), $query);
    $datos = array();
    $fila = mysqli_fetch_array($result, MYSQLI_ASSOC);

        $row = array(
            'usuario' => utf8_encode($fila["usuario"]),
            'pass'=> utf8_encode($fila["pass"]),
            'nombre' => utf8_encode($fila["nombre"]),
            'apellidop' => utf8_encode($fila["apellidop"]),
            'apellidom' => utf8_encode($fila["apellidom"]),
            'sexo' => $fila["sexo"],
            'edad' => $fila["edad"],
            'direccion' => utf8_encode($fila["direccion"]),
            'fecha' => $fila["fechaIngreso"],
            'area' => utf8_encode($fila["area"]),
            'jefe' => $fila["jefe"],
            'foto' => utf8_encode($fila["foto"]),
            'oficina_alta_imms' => utf8_encode($fila["oficina_alta_imms"]),
            'oficina_fisicamente' => utf8_encode($fila["oficina_fisicamente"]),
            'periodicidad_de_pago' => utf8_encode($fila["periodicidad_de_pago"]),
            'modalidad_trabajo' => utf8_encode($fila["modalidad_trabajo"]),
            'uniformes' => utf8_encode($fila["uniformes"]),
            'fecha_firma_de_contrato' => utf8_encode($fila["fecha_firma_de_contrato"]),
            'fecha_vencimiento_de_contrato' => utf8_encode($fila["fecha_vencimiento_de_contrato"]),
            'estado_civil' => utf8_encode($fila["estado_civil"]),
            'nacionalidad' => utf8_encode($fila["nacionalidad"]),
            'fecha_nacimiento' => utf8_encode($fila["fecha_nacimiento"]),
            'fecha_cumple' => utf8_encode($fila["fecha_cumple"]),
            'horario' => utf8_encode($fila["horario"]),
            'rfc' => utf8_encode($fila["rfc"]),
            'curp' => utf8_encode($fila["curp"]),
            'nss' => utf8_encode($fila["nss"]),
            'numero_celular' => utf8_encode($fila["numero_celular"]),
            'escolaridad' => utf8_encode($fila["escolaridad"]),
            'salario_mensual' => utf8_encode($fila["salario_mensual"]),
            'otros' => utf8_encode($fila["otros"]),
            'antiguedad' => utf8_encode($fila["antiguedad"]),
            'salario_diario' => utf8_encode($fila["salario_diario"]),
            'salario_diario_imms' => utf8_encode($fila["salario_diario_imms"]),
            'documentos_pendientes' => utf8_encode($fila["documentos_pendientes"]),
            'credito_infonavit' => utf8_encode($fila["credito_infonavit"]),
            'solicitud_de_empleo' => utf8_encode($fila["solicitud_de_empleo"]),
            'ine' => utf8_encode($fila["ine"]),
            'acta_de_nacimiento' => utf8_encode($fila["acta_de_nacimiento"]),
            'comprobante_domicilio' => utf8_encode($fila["comprobante_domicilio"]),
            'comprobante_de_estudios' => utf8_encode($fila["comprobante_de_estudios"]),
            'cartas_recomendacion' => utf8_encode($fila["cartas_recomendacion"]),
            'antecedentes_no_penales' => utf8_encode($fila["antecedentes_no_penales"]),
            'contratos' => utf8_encode($fila["contratos"]),
            'observaciones' => utf8_encode($fila["observaciones"]),
            'clave_banco' => utf8_encode($fila["clave_banco"]),
            'alta' => utf8_encode($fila["alta"]),
            'contrato_confidencialidad' => utf8_encode($fila["contrato_confidencialidad"]),
            'oficina_alta_imms' => utf8_encode($fila["oficina_alta_imms"]),
            'oficina_fisicamente' => utf8_encode($fila["oficina_fisicamente"]),
            'periodicidad_de_pago' => utf8_encode($fila["periodicidad_de_pago"]),
            'modalidad_trabajo' => utf8_encode($fila["modalidad_trabajo"]),
            'uniformes' => utf8_encode($fila["uniformes"])
        );
    
    
    echo json_encode($row);
?>