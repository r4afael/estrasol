<?php
include ("conexion.php");

$query = "DELETE FROM usuarios2020 WHERE idUsuario='$_POST[txtID]'";
$result = $mysqli->query($query);

echo json_encode(array('error' => true, 'tipo' => 'Ocurrio un error'));

?>