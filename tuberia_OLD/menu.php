<html>
	<head>
		<title>Menu Desplegable</title>
		<link rel="stylesheet" href="css/linearicons.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/main3.css">
		<style type="text/css">
			#menu {
				/*margin:auto;*/
				margin-top:10px;
				width:500px;
				font-family:Arial, Helvetica, sans-serif;
			}
		</style>
	
		<header class="default-header">
			<div class="container">
				<div class="header-wrap">
					<div class="header-top d-flex justify-content-between align-items-center">
						<div class="logo">
							
						</div>
						<div class="main-menubar d-flex align-items-center">
							<nav class="hide">
								<a>Bienvenido: <?php echo $_SESSION['usuario']?></a> 
								<a href="cambiar_contrasena.php">Cambiar contraseè´–a</a>
								<a href="cerrar_sesion.php">Cerrar Sesi&oacute;n</a>
								 
							</nav>
							<div class="menu-bar"><span class="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</div>

</header>
	</head>
	<body>
		<div id="menu">
			<nav> <!-- Aqui estamos iniciando la nueva etiqueta nav -->
				<ul class="nav">
					<li><a href="">Inicio</a></li>
					<li><a href="">Servicios</a>
						<ul>
							<li><a href="">Submenu1</a></li>
							<li><a href="">Submenu2</a></li>
							<li><a href="">Submenu3</a></li>
							<li><a href="">Submenu4</a>
								<ul>
									<li><a href="">Submenu1</a></li>
									<li><a href="">Submenu2</a></li>
									<li><a href="">Submenu3</a></li>
									<li><a href="">Submenu4</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><a href="">Acerca de</a>
						<ul>
							<li><a href="">Submenu1</a></li>
							<li><a href="">Submenu2</a></li>
							<li><a href="">Submenu3</a></li>
							<li><a href="">Submenu4</a></li>
						</ul>
					</li>
					<li><a href="">Contacto</a></li>
				</ul>
			</nav><!-- Aqui estamos cerrando la nueva etiqueta nav -->
		</div>
	</body>
<script src="js/jquery.js"></script>
<script src="js/vendor/jquery-2.2.4.min.js"></script>
<script src="js/main3.js"></script>
<script type='text/javascript'>
	document.oncontextmenu = function(){return false}
</script>
</html>