<?php
	session_start();
	include ("conexion.php");
	include ("conexion2.php");
	include_once 'val_skin.php';

	$varsesion = $_SESSION['usuario'];
	$usuario = $_SESSION['usuario'];
	$idUsuario = $_SESSION['idUsuario'];
	
	if ($varsesion == null || $varsesion = '') {

		header("Location:index.php");
		die();
		
	}
	$queryid2 = "SELECT * FROM `usuarios2020` WHERE `idUsuario` =".$idUsuario;
	$result2 = $mysqli2->query($queryid2);
    if ($result2->num_rows > 0) {
        while($row2 = $result2->fetch_assoc()) {
        $pbiid = $row2["sucursal"];
        #echo $pbiid;
    }
    } else {
        echo "0 results";
        
    }
    $mysqli2->close();
	
?>

<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" href="images/icons/PPM.ico"/>
	
	<!-- Site Title -->
	<title><?php echo($skin_global);?></title>

		<link rel="stylesheet" href="css/linearicons.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/main3.css">
		<style type="text/css">
    html, body, div, iframe { margin:0; padding:0; height:99%; }
    iframe { display:block; width:100%; border:none; }
</style> 
	</head>
	
<body oncontextmenu='return false' onkeydown='return false'>	

<br>
<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfertrtUtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwtyyWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC0ytyLdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6IhjhjUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 

<?php
session_start();


//echo $usuario;
$queryid = "SELECT * FROM `linkspbiBan` WHERE `skin` ="."'".$pbiid."'";

$result = $mysqli->query($queryid);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $pbi = $row["link"];
    //echo $pbi;
  }
} else {
  echo "0 results";
}
$mysqli->close();

?>


                    <!--<iframe src="https://app.powerbi.com/view?r=eyJrIjoiNmY3MzA1YjYtOWJmYy00NzFlLThjMDYtN2NlNTg0ZDdjYTE5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> -->
                    <!-- Anterior link
                    <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYTcyNWY1Y2MtZmU0Zi00NzQyLThiNmEtMWM1NzFiM2NhNjdmIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>-->
                    <!--<iframe src="https://app.powerbi.com/view?r=eyJrIjoiNzA1NGI1MGUtZjJlZi00MmYxLWFlYWItN2EzYzg4MWQ4Y2QwIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>-->
                    
                    <iframe src="<?php echo $pbi ?>" frameborder="0" allowFullScreen="true"></iframe>
                    
<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5YTFmZDYtMTk5OC00MDQ5LdfgfejN2UtZDRiZDIwOTRhZDc3IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> 
 

		<script src="js/jquery.js"></script>
		<script src="js/vendor/jquery-2.2.4.min.js"></script>
		<script src="js/main3.js"></script>
		<script type='text/javascript'>
			document.oncontextmenu = function(){return false}

                   var URLactual = window.location;

                   var url=URLactual+"?dummy="+(new Date()).getTime()
                   var complemento = "989";

                 console.log(url+complemento);
             
			
			
		</script> 
	</body>
</html>
