<?php


session_start();

if (!isset($_SESSION["usuario"])) {
	header("Location: index.php");
} else {
	require 'conexion.php';
	global $mysqli;
	$sql = '';
	$us = $_SESSION["usuario"];
	$val = '1';
	//DATO QUE SE DEVE ACTUALIZAR DEPENDIENDO DEL SKIN
	$skin='NPS-Y-TTB';
	$sql = "SELECT idUsuario FROM usuarios2020 WHERE usuario = ? AND val = ? AND skin=? LIMIT 1 ";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("sss", $us, $val,$skin);
	$stmt->execute();
	$stmt->store_result();
	$num = $stmt->num_rows;
	$stmt->close();

	if ($num > 0) {
		header("Location: index.php");
	}
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>NPS-Y-TTB</title>

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
			<span> Datos correctos, Se ha actualizado tú contraseña</span>
		</div>
		<div class="limiter">

			<div class="services block block-bg-gradient block-border-bottom">
				<div class="container">
					<h2 class="block-title">
						Nueva contraseña
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
								<form class="login100-form validate-form" action="" id="formcc">
									
									<div class="wrap-input100 validate-input m-b-26" data-validate="Password is required">
										<span class="label-input100">Nueva contraseña</span>
										<input class="input100" type="password" name="passlg1"  required placeholder="Ingresa nueva contraseña">
										<span class="focus-input100"></span>
									</div>

									<div class="wrap-input100 validate-input m-b-18" data-validate="Confirma nueva contraseña">
										<span class="label-input100">Confirma contraseña</span>
										<input class="input100" type="password" name="passlg2"  required placeholder="Confirma contraseña">
										<span class="focus-input100"></span>
									</div>
									<input type="hidden" id="skin" name="skin" value="<?php echo $skin; ?>" />
									
									
									<br>



									<!--<div class="flex-sb-m w-full p-b-30">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">(?=.*[a-z])(?=.*[!@#$&*_-+])(?=.*[A-Z]).{6,15}$  (?=.*\d)
							<label class="label-checkbox100" for="ckb1">
								Recordarme
							</label>
						</div>
					</div> -->

									<div class="container-login100-form-btn">
										<input type="submit" class="login100-form-btn botonlg" id="notonlg" name="Acceso">
										<!--<button class="login100-form-btn">
							Acceso
						</button>-->
									</div>

								</form>
								
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
	<script src="js/mainc2.js"></script>
	<script type='text/javascript'>
		$(function() {
			$(document).bind("contextmenu", function(e) {
				return false;
			});
		});
	</script>

</body>

</html>