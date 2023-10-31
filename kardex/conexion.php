<?php
        function conex(){
            $servidor = "localhost";
            $baseDatos = "censosmk_kardex";
            $nombreUsuario = "censosmk_censosmk";
            $password = "]!0[rT^Plk[y_2023:*";
    
            $conexion = new mysqli($servidor, $nombreUsuario, $password, $baseDatos);

            return $conexion;
        }

?>