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
<html lang="en" data-bs-theme="auto">
  <head><script src="../assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="INMEGA">
    <meta name="generator" content="PLATAFORMAS">
    <title><?php echo ($skin_global); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/png" href="images/icons/PPM.ico" />

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/sidebars/">
     <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/navbars/">

    

    

<link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">

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
        width: 100%;
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

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }
      .bd-mode-toggle {
        z-index: 1500;
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="sidebars.css" rel="stylesheet">
    
    <!-- Bootstrap core CSS -->
    <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/linearicons.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/main3.css">
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
                            <a href="cambiar_contrasena.php">Cambiar contraseña</a>
                            <a href="cerrar_sesion.php">Cerrar Sesión</a>

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
                <main class="col-md-10 ms-sm-auto col-lg-10 px-md-10">
                    <iframe src="portal.php" frameborder="0" allowFullScreen="true" class="w-100" width="620" height="620"></iframe>
                    <script src="js/jquery.js"></script>
                    <script src="js/vendor/jquery-2.2.4.min.js"></script>
                    <script src="js/main3.js"></script>
                    <script type='text/javascript'>
                        document.oncontextmenu = function() {
                            return false
                        }
                    </script>
                </main>
                <main class="col-md-2 ms-sm-auto col-lg-2 px-md-2">
                    <div class="flex-shrink-0 p-3" style="width: 200px;">
                    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                      
                      <span class="fs-5 fw-semibold">DESCARGAR</span>
                    </a>
                    <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2023" aria-expanded="true">
                                2023
                            </button>
                            <div class="collapse show" id="collapse2023">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <main class="d-flex flex-nowrap">
                                        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 150px;height: 400px;">
                                            <div class="list-group list-group-flush border-bottom scrollarea">
                                              <?php
                                                $query = $mysqli->query('SELECT semana_des FROM clima WHERE semana_des LIKE "%2023%" GROUP BY semana_des DESC');
                                                while ($valores = mysqli_fetch_array($query)) {
                                                    echo '<li><a href="descargar.php?semana=' . $valores[semana_des] . '" class="link-body-emphasis d-inline-flex text-decoration-none rounded"><strong class="mb-1">' . $valores[semana_des] . '</strong></a></li>';
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </main>
                                </ul>
                            </div>
                      </li>
                      <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2022" aria-expanded="false">
                          2022
                        </button>
                        <div class="collapse" id="collapse2022">
                          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <main class="d-flex flex-nowrap">
                                <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 150px;height: 400px;">
                                    <div class="list-group list-group-flush border-bottom scrollarea">
                                        <?php
                                            $query = $mysqli->query('SELECT semana_des FROM clima WHERE semana_des LIKE "%2022%" GROUP BY semana_des DESC');
                                            while ($valores = mysqli_fetch_array($query)) {
                                                echo '<li><a href="descargar.php?semana=' . $valores[semana_des] . '" class="link-body-emphasis d-inline-flex text-decoration-none rounded"><strong class="mb-1">' . $valores[semana_des] . '</strong></a></li>';
                                            }
                                        ?>
                                    </div>
                                </div>
                            </main>
                          </ul>
                        </div>
                      </li>
                      <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2021" aria-expanded="false">
                          2021
                        </button>
                        <div class="collapse" id="collapse2021">
                          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <main class="d-flex flex-nowrap">
                                <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 150px;height: 400px;">
                                    <div class="list-group list-group-flush border-bottom scrollarea">
                                        <?php
                                            $query = $mysqli->query('SELECT semana_des FROM clima WHERE semana_des LIKE "%2021%" GROUP BY semana_des DESC');
                                            while ($valores = mysqli_fetch_array($query)) {
                                                echo '<li><a href="descargar.php?semana=' . $valores[semana_des] . '" class="link-body-emphasis d-inline-flex text-decoration-none rounded"><strong class="mb-1">' . $valores[semana_des] . '</strong></a></li>';
                                            }
                                        ?>
                                    </div>
                                </div>
                            </main>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <hr>
                  </div>
                </main>
            </div>
        </div>
    </main>
    


    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>

      <script src="sidebars.js"></script>
  </body>
</html>