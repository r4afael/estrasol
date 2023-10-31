<?php

    class sesionUsuario{
        public function haySesion(){
            if(isset($_SESSION['user'])){
                echo 'Hay sesion';
            }else{
                echo 'No hay sesion';
            }
        }

        public function __construct(){
            session_start();
        }

        public function asignarSesion($usuario){
            $_SESSION['user']=$usuario;
        }

        public function obtenerVariableSesion(){
            return $_SESSION['user'];
        }

        public function cerrarSesion(){
            session_unset();
            session_destroy();
        }

    }
    
?>