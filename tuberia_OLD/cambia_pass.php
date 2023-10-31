<?php
require 'conexion.php';
include 'enviar.php';
session_start();
$errors = array();

if (empty($_GET['user_id'])) {
	header('Location: index.php');
}

if (empty($_GET['token'])) {
	header('Location: index.php');
}

$user_id = $mysqli->real_escape_string($_GET['user_id']);
$token = $mysqli->real_escape_string($_GET['token']);
if (!verificaTokenPass($user_id, $token)) {
	//echo 'No se pudo verificar los Datos';
	header('Location: index.php');
	$errors[] = "No se pudo verificar los Datos";
}



?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>PPM TUBERÍAS</title>

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
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link href="css/style.css" rel="stylesheet">
	<!--===============================================================================================-->
	<!-- Bootstrap CSS File -->
	<link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

	<!-- Libraries CSS Files -->
	<link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="lib/owlcarousel/owl.carousel.min.css" rel="stylesheet">
	<link href="lib/owlcarousel/owl.theme.min.css" rel="stylesheet">
	<link href="lib/owlcarousel/owl.transitions.min.css" rel="stylesheet">
</head>

<body>
	<div id="background-wrapper" class="buildings" data-stellar-background-ratio="0.1">

		<!-- ======== @Region: #navigation ======== -->
		<div id="navigation" class="wrapper">

			<!--Header & navbar-branding region-->
			<div class="header">
				<div class="header-inner container">
					<div class="row">
						<div class="col-md-8">
							<!--navbar-branding/logo - hidden image tag & site name so things like Facebook to pick up, actual logo set via CSS for flexibility -->
							<img src="https://na4as.voxco.com/Media/3/encabezado3.png" alt="INMEGA" width="100">
						</div>
						<!--header rightside-->
						<div class="col-md-4">
							<!--user menu-->
							<ul class="list-inline user-menu pull-right">
								<li class="user-login"><i class="fa fa-sign-in"></i> <a href="index.php" class="text-uppercase">Iniciar sesión</a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>

		</div>

	</div>
	<div id="content">
		<div class="error">
			<span> Datos no válidos, La contraseña no coincide</span>
		</div>
		<div class="error2">
			<span> Datos no válidos, La contraseña debe tener al menos una mayúscula, un minúscula, un digito y un carácter especial</span>
		</div>
		<div class="correcto">
			<span> Datos correctos, Se ha actualizado tú contraseña </span>
		</div>
		<div class="limiter">

			<div class="services block block-bg-gradient block-border-bottom">
				<div class="container">
					<h2 class="block-title">
						Cambiar contraseña
					</h2>
				</div>
			</div>
			<div id="content">


			</div>
			<div class="container" id="contenido">
				<div class="row">
					<div class="col-sm-6 col-sm-offset-3">
						<div class="panel panel-default">
							<div class="alert alert-info">
							La contraseña debe tener al menos una mayúscula, un minúscula, un digito y un carácter especial
								
							</div>


							<div class="panel-body">

								<!--<div class="main"></div> -->


								<form class="login100-form validate-form" action="" id="formcc2">
									<input type="hidden" id="user_id" name="user_id" value="<?php echo $user_id; ?>" />

									<input type="hidden" id="token" name="token" value="<?php echo $token; ?>" />
									<div class="wrap-input100 validate-input m-b-26" data-validate="Password is required">
										<span class="label-input100">Nueva contraseña</span>
										<input class="input100" type="password" name="passlg1" required placeholder="Ingresa nueva contraseña">
										<span class="focus-input100"></span>
									</div>

									<div class="wrap-input100 validate-input m-b-18" data-validate="Confirma nueva contraseña">
										<span class="label-input100">Confirma contraseña</span>
										<input class="input100" type="password" name="passlg2" required placeholder="Confirma contraseña">
										<span class="focus-input100"></span>
									</div>

									<div class="container-login100-form-btn">
										<input type="submit" class="login100-form-btn botonlg" id="notonlg" name="Acceso">

									</div>

								</form>

							</div>
						</div>

					</div>

				</div>
			</div>
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
	<script src="js/maincc2.js"></script>
	<script type='text/javascript'>
		$(function() {
			$(document).bind("contextmenu", function(e) {
				return false;
			});
		});
	</script>

</body>

</html>