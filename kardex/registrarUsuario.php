<?php
    include 'conexion.php';
    header('Content-Type:text/html; charset=utf-8');
    date_default_timezone_set('America/Mexico_City');

    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
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
    $jerarquia = utf8_decode($decoded_json->jerarquia);
    $foto = utf8_decode($decoded_json->foto);
    $source = $decoded_json->source;
    $oficinaAltaImms = utf8_decode($decoded_json->oficinaAltaImms);
    $oficinaFisica = utf8_decode($decoded_json->oficinaFisica);
    $periodicidadPago = utf8_decode($decoded_json->periodicidadPago);
    $modalidadTrabajo = utf8_decode($decoded_json->modalidadTrabajo);
    $fechaFirmaContrato = utf8_decode($decoded_json->fechaFirmaContrato);
    $fechaVencimientoContrato = utf8_decode($decoded_json->fechaVencimientoContrato);
    $estadoCivil = utf8_decode($decoded_json->estadoCivil);
    $nacionalidad = utf8_decode($decoded_json->nacionalidad);
    $fechaNacimiento = utf8_decode($decoded_json->fechaNacimiento);
    $fechaCumple = utf8_decode($decoded_json->fechaCumple);
    $horario = utf8_decode($decoded_json->horario);
    $celular = utf8_decode($decoded_json->celular);
    $escolaridad = utf8_decode($decoded_json->escolaridad);
    $salarioMensual = utf8_decode($decoded_json->salarioMensual);
    $otros = utf8_decode($decoded_json->otros);
    $antiguedad = utf8_decode($decoded_json->antiguedad);
    $salarioDiario = utf8_decode($decoded_json->salarioDiario);
    $salarioDiarioImms = utf8_decode($decoded_json->salarioDiarioImms);
    $documentosPendientes = utf8_decode($decoded_json->documentosPendientes);
    $observaciones = utf8_decode($decoded_json->observaciones);

    //echo $$_FILES['img']['name'];

    /*if(isset($_FILES['img'])){
        $nombreimg=$_FILES['img']['name'];
        echo $nombreimg;
        $ruta=$_FILES['img']['tmp_name'];
        $destino="img/fotos/".$nombreimg;
        if(copy($ruta,$destino)){*/
            $query = "insert into usuarios(usuario, pass, nombre, apellidop, apellidom, sexo, edad, direccion, fechaIngreso, area, jefe, oficina_alta_imms, oficina_fisicamente, periodicidad_de_pago, modalidad_trabajo, fecha_firma_de_contrato, fecha_vencimiento_de_contrato, estado_civil, nacionalidad, fecha_nacimiento, fecha_cumple, horario, numero_celular, escolaridad, salario_mensual, otros, antiguedad, salario_diario, salario_diario_imms, documentos_pendientes, observaciones) values('".$usuario."', '".$pass."', '".$nombre."', '".$apellidop."', '".$apellidom."', '".$sexo."', '".$edad."', '".$direccion."', '".$fecha."', '".$area."', '".$jerarquia."', '".$oficinaAltaImms."', '".$oficinaFisica."', '".$periodicidadPago."', '".$modalidadTrabajo."', '".$fechaFirmaContrato."', '".$fechaVencimientoContrato."', '".$estadoCivil."', '".$nacionalidad."', '".$fechaNacimiento."', '".$fechaCumple."', '".$horario."', '".$celular."', '".$escolaridad."', '".$salarioMensual."', '".$otros."', '".$antiguedad."', '".$salarioDiario."', '".$salarioDiarioImms."', '".$documentosPendientes."', '".$observaciones."')";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        /*}
    }*/

    
?>