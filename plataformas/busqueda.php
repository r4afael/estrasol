<?php
include ("conexion.php");
$orderby = "ORDER BY nombre ASC";
$i=0;

$queryid .="SELECT us.idUsuario, us.nombre, us.usuario, us.pass,us.idlink,us.fecha, lp.skin, lp.link from usuarios2020 us
            INNER JOIN linkspbi lp ON lp.idlink = us.idlink
            INNER JOIN  tipousuarios tu ON tu.idtipoUser = us.idtipoUser WHERE us.usuario IS NOT NULL";


$termino= "";
$termino=$mysqli->real_escape_string($_POST['productos']);


if ($termino != "") {
    $busqueda = " AND lp.skin LIKE '%".$termino."%' ORDER BY nombre ASC";
    
}

$queryid = $queryid . " " . $busqueda;



$result = $mysqli->query($queryid);
if ($result->num_rows > 0) {
    
echo '<table class="table table-striped table-dark" id="tabla2">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">USUARIO</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">SKIN</th>
      <th scope="col">ADMIN</th>
     
    </tr>
  </thead>
  <tbody>';
  
  while($row = $result->fetch_assoc()) {
      $i++;
?>
<style>
    svg{
        width:16px;
        height:16px;
    }
    
    td:focus{
        border-left:2px solid green;
        border-bottom:0px !important;
        outline:none;
        box-shadow: -4px 12px 19px 9px green;
    }
    
</style>

<td><?php echo $row['idUsuario']?></td>
<td id="edn<?php echo $i ?>" ><?php echo $row['nombre']?></td>
<td id="edu<?php echo $i ?>"><?php echo $row['usuario']?></td>
<td id="edp<?php echo $i ?>"><?php echo $row['pass']?></td>
<td><?php echo $row['skin']?></td>

<td><button type="button" class="btn btn-success" id="bt<?php echo $i ?>" onClick="editar(<?php echo $i ?>,<?php echo $row['idUsuario']?>)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg>
  Editar&nbsp;</button>
  
    <button type="button" class="btn btn-danger" name="btnEliminar" id="btnEliminar" 
                onClick="javascript:Eliminar('<?php echo $row['idUsuario'] ?>')">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
        Eliminar</button>
    </td>
</tr>
<script src="js/editar.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<?php
  }
} else {
  echo "0 results";
}
$mysqli->close();
?>