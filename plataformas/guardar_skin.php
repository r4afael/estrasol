<?php
include ("conexion.php");
$mysqli->set_charset('utf8');

  $nombre_skin = $_POST["nombre_skin"];
  $link_skin = $_POST["link_skin"];
  $path = "../".$nombre_skin;
  $url_skin="";

  if (!file_exists($path)) {
    $nombre_skin=eliminar_acentos($nombre_skin);

    $source ='../NUEVO_SKIN/';
    $destination = '../'.$nombre_skin;
    full_copy($source, $destination);

    $query = "INSERT INTO linkspbi (skin, link)VALUES('$nombre_skin','$link_skin')";
    $result = $mysqli->query($query);
    
    $url_skin="https://pricepointmonitor.com/".$nombre_skin."/index.php";
    envio_correo($url_skin);
    
    echo json_encode(array('error' => false,'tipo' =>$url_skin));

    }else{
        echo json_encode(array('error' => true,'tipo' =>'1'));
    }


    function full_copy( $source, $target ) {
        if ( is_dir( $source ) ) {
            @mkdir( $target );
            $d = dir( $source );
            while ( FALSE !== ( $entry = $d->read() ) ) {
                if ( $entry == '.' || $entry == '..' ) {
                    continue;
                }
                $Entry = $source . '/' . $entry; 
                if ( is_dir( $Entry ) ) {
                    full_copy( $Entry, $target . '/' . $entry );
                    continue;
                }
                copy( $Entry, $target . '/' . $entry );
            }
     
            $d->close();
        }else {
            copy( $source, $target );
        }
    }
    function eliminar_acentos($cadena){
		
		//Reemplazamos la A y a
		$cadena = str_replace(
		array('Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'),
		array('A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'),
		$cadena
		);

		//Reemplazamos la E y e
		$cadena = str_replace(
		array('É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'),
		array('E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'),
		$cadena );

		//Reemplazamos la I y i
		$cadena = str_replace(
		array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'),
		array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'),
		$cadena );

		//Reemplazamos la O y o
		$cadena = str_replace(
		array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
		array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
		$cadena );

		//Reemplazamos la U y u
		$cadena = str_replace(
		array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
		array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
		$cadena );

		//Reemplazamos la N, n, C y c
		$cadena = str_replace(
		array('Ñ', 'ñ', 'Ç', 'ç'),
		array('N', 'n', 'C', 'c'),
		$cadena
		);
		
		return $cadena;
	}
    function envio_correo($url){
        $para  = 'expansion04@inmega.com';

        $título = 'CREACION DE SKIN';
        
        // mensaje
        $mensaje = '
        <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>holi</title>
            </head>
            <body style="background-color: rgb(255, 255, 255) ">
            
            <!--Copia desde aquí-->
            <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
                <tr>
                    <td style="background-color: #000000; text-align: left; padding: 0">
                        <a href="https://www.inmega.com/">
                            <img width="40%" style="display:block; margin: 5% 3%" src="https://na4as.voxco.com/Media/3/correo.png">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #33533B; text-align: left; padding: 0">
                        <a href="https://www.inmega.com/">
                            <img width="5%" style="display:block; margin: 1.5% 3%" src="https://na4as.voxco.com/Media/3/correo3.png">
                        </a>
                    </td>
                </tr>
                
                <tr>
                    <td style="background-color: #ecf0f1">
                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: center;font-family: sans-serif">
                            <h2 style="color: #309e04; margin: 0 0 7px">Se a creado correctamente el skin</h2>
                            <h3 style="color: #000000; margin: 0 0 7px">La URL es la siguiente:</h3>
                            <h2 style="color: #309e04; margin: 0 0 7px"><a href="'.$url.'" style="color: #309e04; margin: 0 0 5px">'.$url.'</a></h2>			
                            <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                <img style="padding: 0; width: 200px; margin: 5px" src="https://na4as.voxco.com/Media/3/correo2.png">
                                <!--<img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">-->
                            </div>
                            <br>
                            <p style="margin: 2px; font-size: 12px">

                                Por favor no responder a este email. Este buzón no está monitoreado y no recibirá una
                                respuesta.
                            </p>
                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Powered by INMEGA</p>
                        </div>
                    </td>
                </tr>
            </table>
            <!--hasta aquí-->
            
            </body>
            </html>
        ';
        
        // Para enviar un correo HTML, debe establecerse la cabecera Content-type
        $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
        $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        // Cabeceras adicionales
        $cabeceras .= 'From: NOTIFICACIONES SKIN <notificaciones.skin@pricepointmonitor.com>' . "\r\n";
        $cabeceras .= 'Cc: programador05@inmega.com,webmaster@inmega.com' . "\r\n";

        // Enviarlo
        mail($para, $título, $mensaje, $cabeceras);
    }
