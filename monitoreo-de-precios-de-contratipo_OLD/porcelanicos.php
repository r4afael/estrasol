<?php
	session_start();
$var = 1;
	$varsesion = $_SESSION['usuario'];
	
	if ($varsesion == null || $varsesion = '') {

		header("Location:index.php");
		die();
		
	}
?>

<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" href="images/icons/PPM.ico"/>
	
	<!-- Site Title -->
	<title>Contratipos Porcelanicos</title>

		<link rel="stylesheet" href="css/linearicons.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/main3.css">
		<style type="text/css">
    html, body, div, iframe { margin:0; padding:0; height:100%; }
    iframe { display:block; width:100%; border:none; }
</style> 
	</head>
	
		<header class="default-header">
			<div class="container">
				<div class="header-wrap">
					<div class="header-top d-flex justify-content-between align-items-center">
						<div class="logo">
							
						</div>
						<div class="main-menubar d-flex align-items-center">
							<nav class="hide">
								<a>Bienvenido: <?php echo $_SESSION['usuario']?></a>
								<a href="home.php">Inicio</a>
								<!--<a href="http://pricepointmonitor.com/PPM-HOMECENTERS/BD/BDADHESIVOS2020-14.xlsx">Descargar base de datos</a> -->
								<a href="cambiar_contrasena.php">Cambiar contraseña</a>
								<a href="cerrar_sesion.php">Cerrar Sesi&oacute;n</a> 
							</nav>
							<div class="menu-bar"><span class="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</div>
		</header>
<body oncontextmenu='return false' onkeydown='return false'> 	

<br>
<!--<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfertrtUtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwtyyWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC0ytyLdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6IhjhjUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> -->

<!-- Link medicion anterior
https://app.powerbi.com/view?r=eyJrIjoiYTNkNDhhODMtMjRiOC00MDQ1LTkxYmEtZTZiNjM2YTg2ODIxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9-->
<!-- link Luis
https://app.powerbi.com/view?r=eyJrIjoiYTI3YWU3OTEtYWZkNi00MWY4LWFmMjUtZWExOWZjMGFmNDRhIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9-->
                    <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMTM4YThjNjUtNDQ5Yy00YzBlLWFhYzgtYzRhNjc3ZDRjZGNiIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 
                    <!--<iframe src="https://pricepointmonitor.com/PPM-HOMECENTERS/md5.php" frameborder="0" allowFullScreen="true"></iframe> -->
<!--<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> -->


		<script src="js/jquery.js"></script>
		<script src="js/vendor/jquery-2.2.4.min.js"></script>
		<script src="js/main3.js"></script>
		<script type='text/javascript'>
			document.oncontextmenu = function(){return false}
		</script>
<script type="text/javascript">
/*window.onload=function() {
alert('OK');
		
var ot_antigua = "1";

alert('Enviando!... '+ot_antigua);
$.ajax({

                type: "POST",
                url: "md5.php",
                data:'ot_antigua=' + ot_antigua,
                dataType:"html",
                asycn:false, //el error que comet赤 de sintaxis, es async
                success: function(){
                   alert("Ha sido ejecutada la acci車n.");
                }
        })
}*/


</script>
	</body>
</html>
