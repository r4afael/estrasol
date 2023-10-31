<?php 
require 'conexion.php';
header('Content-Type: text/html; charset=UTF-8');  
header("Pragma: public");
header("Expires: 0");
$filename = "base_encuestas.xls";
header("Content-type: application/x-msdownload");
header("Content-Disposition: attachment; filename=$filename");
header("Pragma: no-cache");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");


?>
<html>
    <head>
        <meta charset="UTF-8">
    </head> 
<body>
    <table>
        <tbody>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRES</th>
                <th scope="col">APELLIDOS</th>
                <th scope="col">FECHA DE NACIMIENTO</th>
                <th scope="col">ESTADO</th>
                <th scope="col">CIUDAD</th>
                <th scope="col">CODIGO POSTAL</th>
                <th scope="col">CELULAR</th>
                <th scope="col">TELEFONO FIJO</th>
                <th scope="col">OTRO TELEFONO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">EMAIL2</th>
                <th scope="col">DISPOSITIVO ANDORID</th>
                <th scope="col">WIFI</th>
                <th scope="col">EXPERIENCIA CAMPO</th>
                <th scope="col">EXPERIENCIA EN LEVANTAMIENTO</th>
                <th scope="col">DISPONIBILIDAD PARA VIAJAR</th>
                <th scope="col">TRABAJA</th>
                <th scope="col">CUAL</th>
                <th scope="col">GIRO O TIPO</th>
                <th scope="col">EN QUE CIUDAD</th>
                <th scope="col">ENTERO DE INMEGA</th>
                <th scope="col">OTRO MEDIO</th>
                <th scope="col">FECHA REGISTRO</th>
            </tr>
            
                <?php 
                $sql = "SELECT * FROM `informacionp`";
                $resultado = $mysqli->query($sql);
                $num_rows = $resultado->num_rows;
                if ($num_rows > 0) {
                while ($row = $resultado->fetch_assoc()) {        
                ?>
                <tr>
                <td><?php echo $row['id'] ?></td>
                <td><?php echo $row['nombres'] ?></td>
                <td><?php echo $row['apellidos'] ?></td>
                <td><?php echo $row['fecha_nacimiento'] ?></td>
                <td><?php echo $row['estado'] ?></td>
                <td><?php echo $row['ciudad'] ?></td>
                <td><?php echo $row['codigo_postal'] ?></td>
                <td><?php echo $row['celular'] ?></td>
                <td><?php echo $row['telefono_fijo'] ?></td>
                <td><?php echo $row['otro_telefono'] ?></td>
                <td><?php echo $row['email'] ?></td>
                <td><?php echo $row['email2'] ?></td>
                <td><?php echo $row['android'] ?></td>
                <td><?php echo $row['wifi'] ?></td>
                <td><?php echo $row['experiencia_campo'] ?></td>
                <td><?php echo $row['experiencia_levantamiento'] ?></td>
                <td><?php echo $row['viajar'] ?></td>
                <td><?php echo $row['trabaja'] ?></td>
                <td><?php echo $row['cual'] ?></td>
                <td><?php echo $row['giro_tipo'] ?></td>
                <td><?php echo $row['ciudad_trabajo'] ?></td>
                <td><?php echo $row['inmega'] ?></td>
                <td><?php echo $row['medio'] ?></td>
                <td><?php echo $row['fecha'] ?></td>
                </tr>
                <?php } 
                }
                ?>
            
        </tbody>
    </table>
</body>
</html>