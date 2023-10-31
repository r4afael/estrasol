<?php
	session_start();
$var = 1;
	$varsesion = $_SESSION['usuario'];
	
	if ($varsesion == null || $varsesion = '') {

		header("Location:index.php");
		die();
		
	}

?>

<!DOCTYPE html>
<html lang="es-mx">
  <head>
    <title>monitoreo-de-precios-de-contratipo</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900|Roboto+Mono:300,400,500"> 
    <link rel="stylesheet" href="fonts/icomoon/style.css">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/mediaelementplayer.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
    <link rel="stylesheet" href="css/fl-bigmug-line.css">
    
  
    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/style22.css">
    
    <!-- Menu -->
    <link rel="stylesheet" href="css/linearicons.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/main4.css">
    
  </head>

  <body>
  <div class="site-loader"></div>
  
  <div class="site-wrap">

    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div> <!-- .site-mobile-menu -->

    <div class="site-navbar mt-4">
        <div class="container py-1">
          <div class="row align-items-center">
            <div class="col-8 col-md-8 col-lg-4">
              <!--<h1 class="mb-0"><a href="#" class="text-white h2 mb-0"><strong>VITROMEX</strong></a></h1>-->
              <img src="images/vitromex.png">
            </div>
            
            
			<div class="container">
				<div class="header-wrap">
					<div class="header-top d-flex justify-content-between align-items-center">
						<div class="logo">
							
						</div>
						<div class="main-menubar d-flex align-items-center">
							<nav class="hide">
								<a><font color="white">Bienvenido: <?php echo $_SESSION['usuario']?></font></a> 
								<a href="home.php">Inicio</a>
								<a href="cambiar_contrasena.php">Cambiar contraseña</a>
								<a href="cerrar_sesion.php">Cerrar Sesi&oacute;n</a> 
							</nav>
							<div class="menu-bar"><span class="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</div>
		

          </div>
        </div>
      </div>
    </div>


    <div class="slide-one-item home-slider owl-carousel">

      <div class="site-blocks-cover overlay" style="background-image: url(images/hero_bg_3.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-10">
              <a href="porcelanicos.php" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">CONTRATIPOS PORCEL&Aacute;NICOS</a><br><br>
              <a href="ceramicos.php" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">&nbsp;&nbsp;&nbsp;CONTRATIPOS CER&Aacute;MICOS&nbsp;&nbsp;</a></p>
            </div>
          </div>
        </div>
      </div>  

      <div class="site-blocks-cover overlay" style="background-image: url(images/hero_bg_4.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-10">
              <a href="porcelanicos.php" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">CONTRATIPOS PORCEL&Aacute;NICOS</a><br><br>
              <a href="ceramicos.php" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">&nbsp;&nbsp;&nbsp;CONTRATIPOS CER&Aacute;MICOS&nbsp;&nbsp;</a></p>
            </div>
          </div>
        </div>
      </div>  

    </div>


    

  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/jquery-migrate-3.0.1.min.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/mediaelement-and-player.min.js"></script>
  <script src="js/jquery.stellar.min.js"></script>
  <script src="js/jquery.countdown.min.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/bootstrap-datepicker.min.js"></script>
  <script src="js/aos.js"></script>

  <script src="js/main4.js"></script>
  <script src="js/main3.js"></script>
  <script type='text/javascript'>
	document.oncontextmenu = function(){return false}
  </script>
    
  </body>
</html>