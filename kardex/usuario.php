<?php

    class usuario{
        
        public function existir($usuario, $contraseña){
            include 'conexion.php';
            $query = "select * from usuarios where usuario='".$usuario."'"."AND contraseña='".$contraseña."'";
            $result = mysqli_num_rows(mysqli_query(conex(), $query));
            //$extraido=mysqli_fetch_array($result);

            if($result!==0){
                return true;
            }else{
                return false;
            }
        }
        
        public function obtenerSesion($usuario){
            include 'conexion.php';
            $query = "select * from usuarios where usuario='".$usuario."'";
            $result = mysqli_query(conex(), $query);
    
            foreach ($result as $currentUser) {
                $this->nombre=$currentUser['nombre'];
            }
        }
    
        public function obtenerNombre(){
            return $this->nombre;
        }
    }
?>