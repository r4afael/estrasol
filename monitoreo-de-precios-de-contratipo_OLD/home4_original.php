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
<html>
<head><meta charset="gb18030"> 
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" href="images/icons/PPM.ico"/>
	
	<!-- Site Title -->
	<title>retail-management-dashboard</title>

		<link rel="stylesheet" href="css/linearicons.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/main3.css">
		<style type="text/css">
    html, body, div, iframe { margin:0; padding:0; height:100%; }
    iframe { display:block; width:100%; border:none; }
</style> 


<style>
    .menu {
        padding: 5px;
        width: 20%;
        height: 25px;
        float: left;
        padding: 20px;  
        text-align: center;
        background: #fff;
        color: #000;
        font-family: Segoe UI;
    }
    .menu:hover {
        background: #000;
        color: #fff; 
        font-family: Segoe UI;   
    }
    #content {
        clear: both;
        padding: 0px;
        overflow-y: scroll;
        width: 100%;
        height: 650px;
        border: 10px;
        font-family: Segoe UI;
        
    }
    	a.button {
	    -webkit-transition-duration: 0.4s; /* Safari */
	    transition-duration: 0.4s;
	    background-color: #000; /* Green */
	    color: black;
	    border: 1px solid #000;
	    border-radius: 12px;
	    color: white;
	    padding: 3px 6px;
	    text-align: center;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 14px;
	    position: relative;
	    font-family: Segoe UI;
	}
	a.button:hover {
	    background-color: white; /* Green */
	    color: white;
	    border: 1px solid;
	    border-radius: 12px;
	    color: white;
	    padding: 3px 6px;
	    text-align: center;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 14px;
	    position: relative;
	    color: #000;
	    font-family: Segoe UI;
	}
	#boton{
	    position: relative;
	    padding: 1px 0px 7px;
	    float: right;  
	    padding-right: 10%;  
	}
	
	
	a.button2 {
	    -webkit-transition-duration: 0.4s; /* Safari */
	    transition-duration: 0.4s;
	    background-color: #000; /* Green */
	    color: black;
	    border: 1px solid #000;
	    border-radius: 12px;
	    color: white;
	    padding: 3px 6px;
	    text-align: center;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 14px;
	    position: relative;
	    font-family: Segoe UI;
	}
	a.button2:hover {
	    background-color: white; /* Green */
	    color: white;
	    border: 1px solid;
	    border-radius: 12px;
	    color: white;
	    padding: 3px 6px;
	    text-align: center;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 14px;
	    position: relative;
	    color: #000;
	    font-family: Segoe UI;
	}
	
	div#boton2{
	    position: relative;
	    padding: 1px 0px 7px;
	    padding-left: 10%;
	    float: left;
	}
	
	div#boton3{
	    position: relative;
	    padding: 1px 0px 7px;
	    padding-left: 30%;
	    float: left;
	}
	div#boton1{
	    position: relative;
	    padding: 1px 0px 7px;
	    padding-left: 20%;
	float: left;
	}
	#boton3 {
	    cursor: pointer;
	}
	</style>
</head>
<body>

<!--<div class="row">
<div class="btn-group" role="group">
        <div id="boton2">   
            <a href="home.php" class="button">HOME</a>
        </div>
         <div id="boton3">   
            <a id="download" class="button">Obtener Vista Actual</a>
        </div>
    <div id="boton1">   
        <a href="logout.php" class="button">Cerrar Sesi&oacute;n</a>
    </div>
</div>
</div>-->
	<header class="default-header">
			<div class="container">
				<div class="header-wrap">
					<div class="header-top d-flex justify-content-between align-items-center">
						<div class="logo">
							
						</div>
						<div class="main-menubar d-flex align-items-center">
							<nav class="hide">
								<a>Bienvenido: <?php echo $_SESSION['usuario']?></a> 
								<a href="home.php">Inicio</a>
								<!--<a href="#" id="download">Obtener Vista Actual</a> -->
								<a href="cerrar_sesion.php">Cerrar Sesión</a> 
							</nav>
							<div class="menu-bar"><span class="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</div>
		</header>
<body oncontextmenu='return false' onkeydown='return false'> 	

<br>
    

    <iframe id="content">iFrames not supported</iframe>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script>
    $(document).ready(function(e) {
        
        $('#content').attr('src', 'imagenes.html', 'scrollbars=NO,menubar=NO,resizable=NO,titlebar=NO,status=NO');
        
        $('#download').click(function(){
            window.print();
        });
    });
</script>
<script src="js/jquery.js"></script>
		<script src="js/vendor/jquery-2.2.4.min.js"></script>
		<script src="js/main3.js"></script>
		<script type='text/javascript'>
			document.oncontextmenu = function(){return false}
		</script>
</body>
</html>