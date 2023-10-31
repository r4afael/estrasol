<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html;charset=utf-8');
$semana = $_GET['semana'];
$filename = "CLIMA_".$semana.".xls";

header("Content-Type: application/vnd.ms-excel");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Content-Disposition: attachment; filename=" . $filename);


//require_once('conexion.php');
require_once('BD.php');
//include ("BD.php");

$sql = "SELECT * from clima where semana_des='$semana'";


//$sql = "SELECT * from lala_encuesta where fecha_sync BETWEEN '$fecha11' AND '$fecha22' ORDER BY idencuesta";



$res = mysqli_query($conexion, $sql);




?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DESCARGAR BD</title>
    <table>
        <thead>
            <tr>
                <th>PLAZA</th>
                <th>SEMANA</th>
                <th>DIA SEMANA</th>
                <th>DIA NUMERO</th>
                <th>MINIMO</th>
                <th>MAXIMO</th>
                <th>LLUVIA</th>
                <th>AIRE</th>
                <th>CLIMA</th>
                <th>SEMANA EJECUCION</th>
            </tr>
            <?php
            while ($row = mysqli_fetch_array($res)) {
                echo '<tr>
                <td>' . $row['plaza'] . '</td>
                <td>' . $row['semana'] . '</td>
                <td>' . $row['dia_semana'] . '</td>
                <td>' . $row['dia_numero'] . '</td>
                <td>' . $row['minima'] . '</td>
                <td>' . $row['maxima'] . '</td>
                <td>' . $row['lluvia'] . '</td>
                <td>' . $row['aire'] . '</td>
                <td>' . $row['clima'] . '</td>
                <td>' . $row['semana_des'] . '</td>
                </tr>';
            }
            mysqli_close($conexion);

            ?>
        </thead>

    </table>
</head>

<body>
</body>

</html>