<?php 
include ("conexion.php");

if (isset($_POST['enviar']))
{
	
  $filename=$_FILES["file"]["name"];
  $info = new SplFileInfo($filename);
  $extension = pathinfo($info->getFilename(), PATHINFO_EXTENSION);

   if($extension == 'csv')
   {
	$filename = $_FILES['file']['tmp_name'];
	$handle = fopen($filename, "r");

	while( ($data = fgetcsv($handle, 1000, ";") ) !== FALSE )
	{
	   $q = "INSERT INTO importacion (nombre, apellido, correo) VALUES (
		'$data[0]', 
		'$data[1]',
		'$data[2]'
	)";

	$mysqli->query($q);
   }

      fclose($handle);
   }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Importaci¨®n</title>
</head>
<body>
	
<form enctype="multipart/form-data" method="post" action="">
   CSV File:<input type="file" name="file" id="file">
   <input type="submit" value="Enviar" name="enviar">
</form>

</body>
</html>