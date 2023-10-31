<?php
require 'conexion.php';

?>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="INMEGA-Plataformas">
    <meta name="generator" content="Rafael 1.0.0">
    <title>DESCARGAR</title>
    <link href="css/jquery.dataTables.min.css" rel="stylesheet">
    
    <link rel="stylesheet"  type="text/css" href="css/dataTables/dataTables.bootstrap4.min.css">
    <link rel="stylesheet"  type="text/css" href="css/dataTables/datatables.min.css">
    <link rel="stylesheet"  type="text/css" href="css/dataTables/main.css">
    


    <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }

        .b-example-divider {
            height: 3rem;
            background-color: rgba(0, 0, 0, .1);
            border: solid rgba(0, 0, 0, .15);
            border-width: 1px 0;
            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
        }

        .b-example-vr {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
        }

        .bi {
            vertical-align: -.125em;
            fill: currentColor;
        }

        .nav-scroller {
            position: relative;
            z-index: 2;
            height: 2.75rem;
            overflow-y: hidden;
        }

        .nav-scroller .nav {
            display: flex;
            flex-wrap: nowrap;
            padding-bottom: 1rem;
            margin-top: -1px;
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }
    </style>

    <script src="js/jquery-3.6.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/buttons.print.min.js"></script>
    <!-- Para usar los botones -->
    <script src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.html5.min.js"></script>

</head>

<body class="bg-light">
    <div class="container">
        <main>
            <div class="py-0 text-center">
                <img class="d-block mx-auto mb-4" src="img/inmega.png" alt="" width="25%">

            </div>
        </main>
    </div>


    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm-10">
                        <h2> Descargar Base de datos</h2>
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-outline-secondary" onclick="descargarTD()">Descargar todo</button>
                    </div>
                </div>

            </div>
            <div class="card-body">



                <br>
                <div class="row table-responsive">
                    <table class="table table-striped table-bordered display" id="mitabla">
                        <thead class="thead-dark">
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
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">Todos los derechos reservados. &copy; <span id="año"></span> INMEGA</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="https://www.inmega.com">www.inmega.com</a></li>
            </ul>
        </footer>
    </div>
    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#mitabla').DataTable({
                language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
                },
                //para usar los botones   
                responsive: "true",
                dom: 'Bfrtlp',       
                buttons:[ 
                    {
                        extend:    'excelHtml5',
                        text:      'Exportar a Excel',
                        titleAttr: 'Exportar a Excel',
                        className: 'btn btn-success'
                    }
		        ],	       
                "order": [
                    [0, "asc"]
                ],

                "bProcessing": true,
                "bServerSide": true,
                "sAjaxSource": "server_process.php"
            });
        });
        function descargarTD() {
            window.open("descargar_todo.php", "_blank");
            //setTimeout("location.href = 'descargar_todo.php'",2000);
        }
    </script>

</body>

</html>