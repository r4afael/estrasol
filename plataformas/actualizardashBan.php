<?php
include ("conexion.php");

$linkpbi=$_POST['linkpbi'];
$idtabla =$_POST['idtabla'];
echo $linkpbi;
echo $idtabla;


$query = "update linkspbiBan set link='$linkpbi' Where idlink='$idtabla'";
$result = $mysqli->query($query);

//$SQL="update linkspbi set link='$linkpbi' Where idlink='$idtabla'";
//mysql_query($sSQL);

?>