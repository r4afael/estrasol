<?php
    //$mysqli = new mysqli('localhost', 'censosmk', ']!0[rT^Plk[y', 'censosmk_dalmata1');
  $mysqli = new mysqli('localhost', 'censosmk', ']!0[rT^Plk[y', 'censosmk_omni');
  if ($mysqli -> connect_errno):
      echo "Error al conectarse a la base de datos" .$mysqli ->connect_error;
  endif;
$mysqli->set_charset("utf8");
?>
