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
	<title>ENTENDIMIENTO-DE-INHIBIDORES-DE-COMPRA</title>

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
								<a id="User-action" href="actualizalink.php">Actualizar link</a>
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


                    <iframe src="portal.php" frameborder="0" allowFullScreen="true"></iframe> 
                    <!--<iframe src="https://pricepointmonitor.com/ppm-tuberia/md5.php" frameborder="0" allowFullScreen="true"></iframe> -->
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
<?php
session_start();
include ("conexion.php");
$usuario = $_SESSION['usuario'];
//echo $usuario;
$queryid = "SELECT * FROM `usuarios2020` WHERE `usuario` ='" . $usuario . "' AND `skin` = 'ENTENDIMIENTO-DE-INHIBIDORES-DE-COMPRA'";
$result = $mysqli->query($queryid);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $usuario = $row["tipo_user"];
    //echo $sucursal;
  }
} else {
  echo "0 results";
}
$mysqli->close();

$usuario
?>	
<script  type="text/javascript">
   <?php
       echo "var link ='$usuario';";
   ?>
   console.log(link); 
   
if (link == 'Administrador') {
    console.log(link); 
    document.getElementById('User-action').style.display = 'inline-block';
  }
if (link == 'Cliente'){
      console.log(link);
    document.getElementById('User-action').style.display = 'none';
  }

</script>
	</body>
</html>
