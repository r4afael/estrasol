<?php
 
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.104.2">
    <title>FORMULARIO</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/checkout/">

    

    

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
    </style>

    
    <!-- Custom styles for this template -->
    <link href="css/form-validation.css" rel="stylesheet">
  </head>
  <body class="bg-light">
    
<div class="container">
  <main>
    <div class="py-5 text-center">
      <h2>Ingresa el GPS</h2>
    </div>
    <div class="col-md-12 col-lg-12">
        <div class="alert alert-danger" role="alert" style="display: none;" id ="error2">
            Datos no encontrados, favor de verificar.
        </div>
    </div>
    <div class="col-md-12 col-lg-12">
        <div class="alert alert-success" role="alert" style="display: none;" id ="correcto">
            Datos encontrados correctamente.
        </div>
    </div>

    <div class="row g-5">
      <div class="col-md-12 col-lg-12">
        
             <form class="needs-validation" novalidate id="formlg" action="">
          <div class="row g-3">
            <div class="col-12">
              <label for="firstName" class="form-label">GPS <span class="text-muted">(Ejemplo: 18.9134367,-99.183977)</span></label>
              <input type="text" class="form-control" id="gps" name="gps" placeholder="" value="18.9134367,-99.183977" required >
              <br>
                <div class="alert alert-danger" role="alert" style="display: none;" id ="error">
                    Favor de verificar el gps.
                </div>
              <div class="invalid-feedback" id ="erorrgps">
                Favor de validar el gps.
              </div>
            </div>

            
            <hr class="my-4">
            <div class="col-12">
                <h4 class="mb-3">Dirección</h4>
                
              <label for="address" class="form-label">Calle:</label>
              <input type="text" class="form-control" id="calle" name="calle" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
                <h4 class="mb-3">Dirección</h4>
                
              <label for="address" class="form-label">Número:</label>
              <input type="text" class="form-control" id="numero" name="numero" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
                
              <label for="address" class="form-label">Colonia:</label>
              <input type="text" class="form-control" id="colonia" name="colonia" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
                
              <label for="address" class="form-label">Municipio:</label>
              <input type="text" class="form-control" id="municipio" name="municipio" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
                
              <label for="address" class="form-label">Estado:</label>
              <input type="text" class="form-control" id="estado" name="estado" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
                
              <label for="address" class="form-label">Código postal:</label>
              <input type="text" class="form-control" id="cp" name="cp" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
                
              <label for="address" class="form-label">País:</label>
              <input type="text" class="form-control" id="pais" name="pais" value="" readonly>
              
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

          
          <hr class="my-4">
          <input type="submit" class="w-100 btn btn-primary btn-lg" id="notonlg" name="Guardar">
          

         
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2017–2022 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>


    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>
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
