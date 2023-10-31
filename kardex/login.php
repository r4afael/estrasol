<?php
    include 'conexion.php';
    include 'sesion.php';



    $people_json = file_get_contents('php://input');
    $decoded_json = json_decode($people_json, false);
    $usuario = utf8_decode($decoded_json->usuario);
    $pass = utf8_decode($decoded_json->pass);
    date_default_timezone_set('America/Mexico_City');

    if($usuario!== null && $pass !== null){

        $query = "select * from usuarios where usuario='".$usuario."'"."AND pass='".$pass."'";
        $result = mysqli_num_rows(mysqli_query(conex(), $query));

            if($result!==0){
                $sesion = new sesionUsuario();
                $sesion->asignarSesion($usuario);
                echo 'logeado!';
            }else{
                $query = "select * from usuarios where usuario='".$usuario."'";
                $result2 = mysqli_num_rows(mysqli_query(conex(), $query));

                if ($result2!==0){
                    echo 'contraseña incorrecta';
                }else{
                    echo 'usuario incorrecto';
                }
                
            }
            

    }else{
            //echo "nombre de usuario o contraseña incorrectos";
            $errorLogin="nombre de usuario o contraseña incorrectos";
            include_once 'login.html';
    }
				
?>