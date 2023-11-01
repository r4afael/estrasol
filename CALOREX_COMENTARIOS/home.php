<?php

$mysqli = new mysqli('localhost', 'censosmk_censosmk', ']!0[rT^Plk[y_2023:*', 'censosmk_climathd_res');

?>

<?php

session_start();

include_once 'val_skin.php';

$var = 1;

$varsesion = $_SESSION['usuario'];



if ($varsesion == null || $varsesion = '') {



    header("Location:index.php");

    die();

}

?>

<!doctype html>

<html lang="en">



<head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">

    <meta name="author" content="INMEGA">

    <meta name="generator" content="PLATAFORMAS">

    <title><?php echo ($skin_global); ?></title>



    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/navbars/">

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sidebars/">

    <!-- Mobile Specific Meta -->

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="icon" type="image/png" href="images/icons/PPM.ico" />









    <!-- Bootstrap core CSS -->

    <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="css/linearicons.css">

    <link rel="stylesheet" href="css/bootstrap.css">

    <link rel="stylesheet" href="css/main3.css">



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

    </style>







    <!-- Custom styles for this template -->

    <link href="navbar.css" rel="stylesheet">

    <link href="sidebars.css" rel="stylesheet">

</head>



<body>



    <main>

        <div class="container">

            <div class="header-wrap">

                <div class="header-top d-flex justify-content-between align-items-center">

                    <div class="logo">



                    </div>

                    <div class="main-menubar d-flex align-items-center">

                        <nav class="hide">

                            <a>Bienvenido: <?php echo $_SESSION['usuario'] ?></a>

                            <a href="cambiar_contrasena.php">Cambiar contrase単a</a>

                            <a href="cerrar_sesion.php">Cerrar Sesi&oacute;n</a>



                        </nav>

                        <div class="menu-bar"><span class="lnr lnr-menu"></span></div>

                    </div>

                </div>

            </div>

        </div>

    </main>



    <main>



        <div class="container-fluid">

            <div class="row">

                <main class="col-md-12 ms-sm-auto col-lg-12 px-md-12">









                    <iframe src="portal.php" frameborder="0" allowFullScreen="true" class="w-100" width="620" height="650"></iframe>



                    <script src="js/jquery.js"></script>

                    <script src="js/vendor/jquery-2.2.4.min.js"></script>

                    <script src="js/main3.js"></script>

                    <script type='text/javascript'>

                        document.oncontextmenu = function() {

                            return false

                        }

                    </script>

                </main>




                </main>

            </div>



        </div>







    </main>







    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>





</body>



</html>