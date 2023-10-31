<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html;charset=utf-8');


  $conexion = mysqli_connect('localhost', 'censosmk_censosmk', ']!0[rT^Plk[y_2023:*', 'censosmk_climathd_res');
  if ($conexion -> connect_errno)
{
	die("Fallo la conexion:(".$conexion -> mysqli_connect_errno().")".$conexion-> mysqli_connect_error());
}
mysqli_set_charset($conexion, "utf8");
?>