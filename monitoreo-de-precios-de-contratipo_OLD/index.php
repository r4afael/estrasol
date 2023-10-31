<?php

session_start(); //Iniciar una nueva sesión o reanudar la existente

if (isset($_SESSION["usuario"])) { //En caso de existir la sesión redireccionamos
	header("Location: home.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>monitoreo-de-precios-de-contratipo</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--===============================================================================================-->
	<!--<link rel="icon" type="image/png" href="images/icons/favicon.ico"/> -->
	<link rel="icon" type="image/png" href="images/icons/PPM.ico" />
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util2.css">
	<link rel="stylesheet" type="text/css" href="css/main2.css">
	<!--===============================================================================================-->
	<link href="css/style2.css" rel="stylesheet">
	<!--===============================================================================================-->
	<!-- Bootstrap CSS File -->
	<link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

	<!-- Libraries CSS Files -->
	<link href="lib2/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="lib2/owlcarousel/owl.carousel.min.css" rel="stylesheet">
	<link href="lib2/owlcarousel/owl.theme.min.css" rel="stylesheet">
	<link href="lib2/owlcarousel/owl.transitions.min.css" rel="stylesheet">
</head>

<body>
	<div class="error">
		<span> Datos no válidos, intentelo de nuevo</span>
	</div>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form-title" style="background-image: url(https://na1.voxco.com/Media/205/bg-01D.jpg);">
					<span class="login100-form-title-1">
						Bienvenido
					</span>
				</div>
				<!--<div class="main"></div> -->
				<form class="login100-form validate-form" action="" id="formlg">
					<div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span class="label-input100">Usuario</span>
						<input class="input100" type="text" name="usuariolg" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required placeholder="Ingresa tu usuario">
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="passlg" required placeholder="Ingresa password">
						<span class="focus-input100"></span>
					</div>

					<!--<div class="flex-sb-m w-full p-b-30">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Recordarme
							</label>
						</div>
					</div> -->
					<span class="login100-form-title-2"> <a href="recuperar_con.php">¿Olvidaste tu contraseña?</a>.</span>
					
					<div class="container-login100-form-btn">
						<input type="submit" class="login100-form-btn botonlg" id="notonlg" name="Acceso">
						<!--<button class="login100-form-btn">
							Acceso
						</button>-->
					</div>
					
					<br>
					
						
					
				</form>
				
			</div>
		</div>
	</div>
	<footer class="footer">

		<p class="page footer_text">
			Powered by <a href="https://www.inmega.com/" style="color:#fff; font: 16px / 1.5 'Open Sans', sans-serif;">INMEGA</a> </p>

	</footer>
	<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
	<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
	<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
	<!--===============================================================================================-->

	<script src="js/jquery.js"></script>
	<script src="js/main2.js"></script>
	<script type='text/javascript'>
		$(function() {
			$(document).bind("contextmenu", function(e) {
				return false;
			});
		});
	</script>

</body>

</html>