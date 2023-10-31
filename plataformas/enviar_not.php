<?php
include ("conexion.php");
$mysqli->set_charset('utf8');

if(!empty($_POST['correos'])){
    // Bucle para almacenar y mostrar los valores de la casilla de verificación comprobación individual.
    foreach($_POST['correos'] as $selected){
        //echo $selected;
        envio_correo($selected);
        sleep(1);
    }
    echo json_encode(array('error' => false,'tipo' =>'0'));
}else{
    echo json_encode(array('error' => true,'tipo' =>'1'));

}

function envio_correo($correo){
    $para  = $correo;
    $título = 'Notificación actualización dashboard NPS-Y-TTB';
        
    // mensaje
    $mensaje = '
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="utf-8">
        <title>holi</title>
    </head>
    <body style="background-color: #ECF0F1 ">
    
    <!--Copia desde aquí-->
    <table style="max-width: 600px; padding: 0px; margin:0 auto; border-collapse: collapse;">
        <tr>
            <td style="background-color: rgba(248, 248, 248, 0.979) ; text-align: left; padding: 0">
                <a href="https://www.inmega.com/">
                    <img width="20%" style="display:block; margin: 0% 0%" src="https://na4as.voxco.com/Media/3/LOGO2.png">
                </a>
            </td>
        </tr>
        
        <tr>
            <td style="background-color: #74ad82; text-align: left; padding: 0">
                <a href="https://www.inmega.com/">
                    <img width="0%" style="display:block; margin: 1.5% 3%" src="https://na4as.voxco.com/Media/3/correo3.png">
                </a>
            </td>
        </tr>
        
        <tr>
            <td style="background-color: rgba(248, 248, 248, 0.979)">
                <div style="color: #34495e; margin: 4% 10% 2%; text-align: center;font-family: sans-serif">
                    <h2 style="color: #000000; margin: 0 0 7px">Se le notifica que el dashboard NPS-Y-TTB ha sido actualizado.</h2>
                    <br>
                    <h3 style="color: #000000; margin: 0 0 7px">Lo puede consultar dando clic en el siguiente botón:</h3>
                    <br>
                    <h2 style="color: #309e04; margin: 0 0 7px"><a href="https://pricepointmonitor.com/NPS-Y-TTB/" style="background-color: #309e04;color: white;padding: 15px 25px;text-decoration: none;">NPS-Y-TTB</a></h2>			
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
        $cabeceras .= "Content-type: text/html; charset=utf-8\r\n";

        // Cabeceras adicionales
        $cabeceras .= 'From: INMEGA-BAM <notificaciones.skin@pricepointmonitor.com>' . "\r\n";
        //$cabeceras .= 'Cc: programador05@inmega.com,webmaster@inmega.com' . "\r\n";

        // Enviarlo
        mail($para, $título, $mensaje, $cabeceras);
    }
