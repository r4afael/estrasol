<?php
// Varios destinatarios
$para  = 'programador05@inmega.com';

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
                    <p style="margin: 2px; font-size: 15px">
                        La URL es la siguiente:</p>
                    <h2 style="color: #309e04; margin: 0 0 7px"><a href="http://inmega.com" style="color: #309e04; margin: 0 0 5px">http://inmega.com</a></h2>			
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
$cabeceras .= 'To: Deivy <programador05@inmega.com>' . "\r\n";
$cabeceras .= 'From: Skin <notificacionespython@censosmkd.com>' . "\r\n";
$cabeceras .= 'Cc: programador05@inmega.com' . "\r\n";

// Enviarlo
mail($para, $título, $mensaje, $cabeceras);
?>