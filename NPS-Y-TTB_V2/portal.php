<?php
	session_start();

	$varsesion = $_SESSION['usuario'];
	
	//echo $varsesion;
	
	
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
	<title>NPS-Y-TTB</title>

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


                    <!--<iframe src="https://app.powerbi.com/view?r=eyJrIjoiNmY3MzA1YjYtOWJmYy00NzFlLThjMDYtN2NlNTg0ZDdjYTE5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> -->
                    <!-- Anterior link
                    <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYTcyNWY1Y2MtZmU0Zi00NzQyLThiNmEtMWM1NzFiM2NhNjdmIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>-->
<?php
session_start();
include ("conexion.php");
$usuario = $_SESSION['usuario'];
//echo $usuario;
$queryid = "SELECT * FROM `usuarios2020` WHERE `usuario` ='" . $usuario . "' AND `skin` = 'NPS-Y-TTB'";
$result = $mysqli->query($queryid);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $sucursal = $row["sucursal"];
    //echo $sucursal;
  }
} else {
  echo "0 results";
}
$mysqli->close();

if ($sucursal == 'todo'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiZDM1NzM0NDctODVjNC00ODVkLWI5OGYtNTNmMTJiOTE5OTkwIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='benjamin_franklin'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiM2Q0NWU3MmUtZjNhMC00NzQwLTkxNDgtMTVmYzFmYmM1YzI5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='chalco'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiMGQyNzVjYTYtNTcyNy00YzFlLWJkNWMtNzk1ODNkYzI2NGMxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='ciudad_jardin'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiZDQ2ZWY4MmItNjQwZC00MDk3LTgyZjItNWJlNzNhNmY3MDMzIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='division_norte'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiMWM1NmUwYTAtNWJjZC00OGFiLWE0NmItNDY3YWIzMzRjMDgyIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='felix_cuevas'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiNmZhZmQwOGEtZTMyNS00MTAxLWI3YzctYjRjZGNiNzA5NGM5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='los_caballos'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiNTYxMzU5MDctNjBhNi00Yjg0LTkwYzgtMzdhNjc2YTBjMjRkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='matriz'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiYWE5MWIzMjgtMDBhYy00ZGFmLTg3OTctNmYwZTgxOTlmZjhlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='miramontes'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiYTVkZDc4MjMtNjgzNi00ZmZiLThlNTUtYmFhODc4MWJmYWJmIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='mundo_imperial'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiODkwNmIzNzctNzU4Yy00MmIzLThlNjQtZDNhYjE4ZGVhNjZjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='pachuca'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiNmZhMjUwYTItN2ZhNC00MWNkLTg3YzMtMzBkN2M5OTc4NDFhIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='plaza_central'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiZWYyOTJjYWMtZTE4NS00OGI0LWJkZGUtMzg0ZjMxMTM2NjdiIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='reforma'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiNmQzYThhZDUtNjlmYS00OGJjLTk2NzQtNzg0MDE4OWIwZGQxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='tultitlan'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiYjJiM2UwN2EtM2VjMi00ZTViLWI3ZWItMjI1Y2I2NGQ1ODMxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}else if ($sucursal=='zapata'){
    $pbi.='https://app.powerbi.com/view?r=eyJrIjoiM2Y3ZTg5ZDAtYWIxOC00MDYwLWJmZjktNTk0MDVkNGQwM2MyIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9';
}


?>

<?php
//session_start();
//$usuario = $_SESSION['usuario'];
//$servername = "localhost";
//$username = "censosmk";
//$password = "]!0[rT^Plk[y";
//$dbname = "censosmk_skins";
//$conn = new mysqli($servername, $username, $password, $dbname);
//if ($conn->connect_error) {
//  die("Connection failed: " . $conn->connect_error);
//}

//$sql = "SELECT * FROM `usuarios2020` WHERE `usuario` ='" . $usuario . "' AND `skin` = 'NPS-Y-TTB'";
//$result = $conn->query($sql);

//if ($result->num_rows > 0) {
//  while($row = $result->fetch_assoc()) {
//    echo "id: " . $row["usuario"]. " - Name: " . $row["skin"]. " " . $row["grupo"]. "<br>";
//  }
//} else {
//  echo "0 results";
//}
//$conn->close();


?>



                    
<!--<iframe src="https://app.powerbi.com/view?r=eyJrIjoiMTczNzIxMzgtNmFkMS00ZDkzLTlhMDYtOTM0MGNiZmYwNjcxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>-->

<iframe src="<?php echo $pbi ?>" frameborder="0" allowFullScreen="true"></iframe>
                    
<styly="non" iframe src="https://app.powerbi.com/view?r=eyJrIjoiNmM4ZTc4ZTQtMDgyNy00ZWI2LWJjMzAtYzQyYzA3ZDc3OTlhIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionb2f2b71118725fb0288d" frameborder="0" allowFullScreen="true"></iframe> 
 

		<script src="js/jquery.js"></script>
		<script src="js/vendor/jquery-2.2.4.min.js"></script>
		<script src="js/main3.js"></script>
		<script type='text/javascript'>
			document.oncontextmenu = function(){return false}

                   var url="https://pricepointmonitor.com/PPM-HOMECENTERS/portal.html?dummy="+(new Date()).getTime()
                   var complemento = "989";

                 console.log(url+complemento);
             
			
			
		</script> 
	</body>
</html>
