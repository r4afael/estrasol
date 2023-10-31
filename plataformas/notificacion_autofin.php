<?php
	require ('conexion.php');
	
	$query = "SELECT 	idUsuario, usuario FROM usuarios2020 WHERE `idlink`=20 ORDER BY usuario";
	$resultado=$mysqli->query($query);
?>
<!DOCTYPE html>


<html>

<head>

  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Notificacón Banco Autofin</title>



  <script src="js/jquery-3.6.0.min.js" type="text/javascript"></script>

  <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">

  <link href="css/forms.css" rel="stylesheet">





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

    .loader {
      border: 16px solid #f3f3f3;
      /* Light grey */
      border-top: 16px solid #3498db;
      /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
      display: none;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  </style>



</head>

<body>

  <header>

    <!--<div class="collapse bg-dark" id="navbarHeader">

    <div class="container">

      <div class="row">

        <div class="col-sm-8 col-md-7 py-4">

          <h4 class="text-white">SUPER ADMIN</h4>

          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>

        </div>

        <div class="col-sm-4 offset-md-1 py-4">

          <h4 class="text-white">Contact</h4>

          <ul class="list-unstyled">

            <li><a href="#" class="text-white">Follow on Twitter</a></li>

            <li><a href="#" class="text-white">Like on Facebook</a></li>

            <li><a href="#" class="text-white">Email me</a></li>

          </ul>

        </div>

      </div>

    </div>

  </div>-->



    <div class="navbar navbar-dark bg-dark shadow-sm">

      <div class="container">

        <a href="index.php" class="navbar-brand d-flex align-items-center">

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
          </svg>

          &nbsp;<strong>EL DIOS DE LOS DASHBOARDS</strong>&nbsp;

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-columns" viewBox="0 0 16 16">
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z" />
          </svg>

        </a>

        <i class="bi bi-bar-chart-line"></i>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">

          <span class="navbar-toggler-icon"></span>

        </button>

      </div>

    </div>

  </header>

  <body class="bg-light">



    <div class="container">

      <main class="form-signin w-100 m-auto">

        <div class="py-3 text-center">

          <img class="d-block mx-auto mb-4" src="img/correo.png" alt="" width="100" height="100">

          <h2>Notificación de actualización dashboard</h2>

          <p class="lead">Es tú momento de brillar.</p>

        </div>
        <div class="py-5 text-center">
          <div class="alert alert-danger alert-dismissible fade show" role="alert" id="error1" style="display: none">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            Debes de selecionar al menos un correo
          </div>
          <div class="alert alert-success" role="alert" id="correcto1" style="display: none">
            Correos enviados correctamente
          </div>
          <div>
            <center>
              <div class="loader"></div>
            </center>
          </div>
        </div>

        <div id="contenido_for"  name="contenido_for">

          <div class="row g-5">

            <!--<div class="col-lg-8">-->

            <h4 class="mb-3">Correos</h4>

          </div>

          <!--<form class="needs-validation" novalidate>-->

          <form class="contact_form" action="" method="post" name="formnotificacion" id="formnotificacion">
              <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="todos" id="selectAll" name="selectAll">
                    <label class="form-check-label" for="flexCheckDefault">Seleccionar todos</label>
                  </div>
                  <?php while($row = $resultado->fetch_assoc()) { ?>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="<?php echo $row['usuario']; ?>" name="correos[]">
                      <label class="form-check-label" for="flexCheckDefault">
                        <?php echo $row['usuario']; ?>
                      </label>
                    </div>
                  <?php } ?>
              </div>
              <hr class="my-4">
              <button class="w-100 btn btn-primary btn-lg" id="enviar" name="enviar" type="submit">Notificar</button>
              <!--<input id="enviar" class="w-100 btn btn-primary btn-lg" type="submit" value="Guardar" />-->
              <!--<button class="submit" type="submit">Submit Form</button>-->

          </form>

          <!--</div>-->

        </div>

      </main>



      <footer class="my-5 pt-5 text-muted text-center text-small">

        <p> Dudas: webmaster@inmega.com</p>

      </footer>

    </div>

    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript">
      document.getElementById('selectAll').onclick = function() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var checkbox of checkboxes) {
          checkbox.checked = this.checked;
        }
      }
    </script>

    <script src="js/enviar.js"></script>

  </body>

</html>