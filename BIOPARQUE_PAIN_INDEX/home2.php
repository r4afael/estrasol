<?php
	session_start();
	include_once 'val_skin.php';
$var = 1;
$mysqli = new mysqli('localhost', 'censosmk_censosmk', ']!0[rT^Plk[y_2023:*', 'censosmk_climathd_res');
	$varsesion = $_SESSION['usuario'];
	
	if ($varsesion == null || $varsesion = '') {

		header("Location:index.php");
		die();
		
	}
?>

<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" href="images/icons/PPM.ico"/>
	
	<!-- Site Title -->
	<title><?php echo ($skin_global); ?></title>
	<link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/navbars/">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sidebars/">

		<link rel="stylesheet" href="css/linearicons.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/main3.css">
		  <link href="navbar.css" rel="stylesheet">
    <link href="sidebars.css" rel="stylesheet">
		<style type="text/css">
    html, body, div, iframe { margin:0; padding:0; height:100%; }
    iframe { display:block; width:100%; border:none; }
</style> 
	</head>
	
		<header class="default-header">
			<div class="container">
				<div class="header-wrap">
					<div class="header-top d-flex justify-content-between align-items-center">
						<div class="logo">
							
						</div>
						<div class="main-menubar d-flex align-items-center">
							<nav class="hide">
								<a>Bienvenido: <?php echo $_SESSION['usuario']?></a> 
								<a href="cambiar_contrasena.php">Cambiar contraseña</a>
								<a href="cerrar_sesion.php">Cerrar Sesi&oacute;n</a>
								 
							</nav>
							<div class="menu-bar"><span class="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</div>
		</header>
<body> 	

<br>
<div class="container-fluid">
            <div class="row">
                <main class="col-md-10 ms-sm-auto col-lg-10 px-md-10">


                    <iframe src="portal.php" frameborder="0" allowFullScreen="true"></iframe> 
                     </main>
                     <main class="col-md-2 ms-sm-auto col-lg-2 px-md-2">
                    <main class="main2">
                        
                        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 230px;">
                            <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                                <svg class="bi me-2" width="30" height="24">
                                    <use xlink:href="#bootstrap" />
                                </svg>
                                <span class="fs-5 fw-semibold">DESCARGAR</span>
                            </a>
                            <div class="list-group list-group-flush border-bottom scrollarea">
                                <?php
                                $query = $mysqli->query("SELECT semana_des FROM clima GROUP BY semana_des  DESC");
                                while ($valores = mysqli_fetch_array($query)) {
                                    echo '<a href="descargar.php?semana=' . $valores[semana_des] . '" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">' . $valores[semana_des] . '</strong></div></a>';
                                }
                                ?>
                            </div>
                            
                        </div>

                        
                    </main>
            </div>

        </div>
                   

		<script src="js/jquery.js"></script>
		<script src="js/vendor/jquery-2.2.4.min.js"></script>
		<script src="js/main3.js"></script>
		<script type='text/javascript'>
			document.oncontextmenu = function(){return false}
		</script>
<script type="text/javascript">
	</body>
</html>
