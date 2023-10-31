<?php
  $mysqli = new mysqli('localhost', 'censosmk_censosmk', ']!0[rT^Plk[y_2023:*', 'censosmk_reclutCampo');
  if ($mysqli -> connect_errno):
      echo "Error al conectarse a la base de datos" .$mysqli ->connect_error;
  endif;
$mysqli->set_charset("utf8");
?>