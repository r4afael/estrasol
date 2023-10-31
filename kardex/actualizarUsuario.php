<?php
    include 'conexion.php';
    header('Content-Type:text/html; charset=utf-8');

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $id = $decoded_json->id;
    $usuario = utf8_decode($decoded_json->usuario);
    $pass = utf8_decode($decoded_json->pass);
    $nombre = utf8_decode($decoded_json->nombre);
    $apellidop = utf8_decode($decoded_json->apellidop);
    $apellidom = utf8_decode($decoded_json->apellidom);
    $sexo = $decoded_json->sexo;
    $edad = $decoded_json->edad;
    $direccion = utf8_decode($decoded_json->direccion);
    $fecha = $decoded_json->fecha;
    $area = utf8_decode($decoded_json->area);
    $jerarquia = $decoded_json->jerarquia;
    $oficina_alta_imms = utf8_decode($decoded_json->oficina_alta_imms);
    $oficina_fisicamente = utf8_decode($decoded_json->oficina_fisicamente);
    $periodicidad_de_pago = utf8_decode($decoded_json->periodicidad_de_pago);
    $modalidad_trabajo = utf8_decode($decoded_json->modalidad_trabajo);
    $uniformes = utf8_decode($decoded_json->uniformes);
    $fecha_firma_de_contrato = utf8_decode($decoded_json->fecha_firma_de_contrato);
    $fecha_vencimiento_de_contrato = utf8_decode($decoded_json->fecha_vencimiento_de_contrato);
    $estado_civil = utf8_decode($decoded_json->estado_civil);
    $nacionalidad = utf8_decode($decoded_json->nacionalidad);
    $fecha_nacimiento = utf8_decode($decoded_json->fecha_nacimiento);
    $fecha_cumple = utf8_decode($decoded_json->fecha_cumple);
    $horario = utf8_decode($decoded_json->horario);
    $numero_celular = utf8_decode($decoded_json->numero_celular);
    $escolaridad = utf8_decode($decoded_json->escolaridad);
    $salario_mensual = utf8_decode($decoded_json->salario_mensual);
    $otros = utf8_decode($decoded_json->otros);
    $antiguedad = utf8_decode($decoded_json->antiguedad);
    $salario_diario	= utf8_decode($decoded_json->salario_diario);
    $salario_diario_imms = utf8_decode($decoded_json->salario_diario_imms);
    $documentos_pendientes = utf8_decode($decoded_json->documentos_pendientes);
    $observaciones = utf8_decode($decoded_json->observaciones);

    $query = "update usuarios set usuario='".$usuario."', pass='".$pass."', nombre='".$nombre."', apellidop='".$apellidop."', apellidom='".$apellidom."', sexo='".$sexo."', edad='".$edad."', direccion='".$direccion."', fechaIngreso='".$fecha."', area='".$area."', jefe='".$jerarquia."', oficina_alta_imms='".$oficina_alta_imms."', oficina_fisicamente='".$oficina_fisicamente."', periodicidad_de_pago='".$periodicidad_de_pago."', modalidad_trabajo='".$modalidad_trabajo."', uniformes='".$uniformes."', fecha_firma_de_contrato='".$fecha_firma_de_contrato."', fecha_vencimiento_de_contrato='".$fecha_vencimiento_de_contrato."', estado_civil='".$estado_civil."', nacionalidad='".$nacionalidad."', fecha_nacimiento='".$fecha_nacimiento."', fecha_cumple='".$fecha_cumple."', horario='".$horario."', numero_celular='".$numero_celular."', escolaridad='".$escolaridad."', salario_mensual='".$salario_mensual."', otros='".$otros."', antiguedad='".$antiguedad."', salario_diario='".$salario_diario."', salario_diario_imms='".$salario_diario_imms."', documentos_pendientes='".$documentos_pendientes."', observaciones='".$observaciones."' where id=".$id;
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
?>