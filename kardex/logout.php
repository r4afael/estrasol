<?php
    include 'sesion.php';

    $sesion = new sesionUsuario();

    $sesion->cerrarSesion();

    echo 'sesion cerrada';
?>