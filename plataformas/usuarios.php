<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SUPER ADMIN</title>
	
	<script src="js/jquery-3.6.0.min.js" type="text/javascript"></script>  
	<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
	
	
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/></svg>
        &nbsp;<strong>EL DIOS DE LOS DASHBOARDS</strong>&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-columns" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z"/></svg>
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
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="img/user.png" alt="" width="100" height="100">
      <h2>Nuevo Usuario</h2>
      <p class="lead">Es de que aquí te vas a crear los usuarios que te vayan pidiendo y que yo no quiera hacer.</p>
    </div>

    <div class="row g-5">
      <!--<div class="col-lg-8">-->
        <h4 class="mb-3">Datos Generales</h4>
	</div>
        <!--<form class="needs-validation" novalidate>-->
            <form class="contact_form" action="" method="post" name="frminformacion" id="frminformacion">
          <div class="row g-3">
            <div class="col-12">
              <label for="firstName" class="form-label">Nombre Completo</label>
              <input type="text" class="form-control" id="firstName" name="firstName" placeholder="" value="" required>
            </div>
            <div class="col-12">
              <label for="email" class="form-label">Correo</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="you@example.com" required>
            </div>
            <div class="col-12">
              <label for="firstName" class="form-label">Contraseña</label>
              <br><span class="text-muted">Debe contener mínimo 8 carecteres, una Mayuscula + Numero (Ej. Inmega2022*)</span>
              <input type="text" class="form-control" id="pass" name="pass" placeholder="" value="" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Mínimo 8 caracteres 1 Mayuscula y 1 Número" required>
            </div>
            
            <div class="col-md-14">
              <label for="dashboard" class="form-label">Dashboard</label>
              <select class="form-select" id="dashboard" name="dashboard" required>
                <option value="">Selecciona...</option>
<?php
include ("conexion.php");
$usuario = $_SESSION['usuario'];
//echo $usuario;
$queryid = "SELECT DISTINCT * FROM `linkspbi`";
$result = $mysqli->query($queryid);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
echo '<option value="'.$row[idlink].'">'.$row[skin].'</option>';
  }
} else {
  echo "0 results";
}
$mysqli->close();
?>
              </select>
            </div>
            
            <div class="col-md-14" id="div_sucursal_ban" Style="display:none">
              <label for="dashboard" class="form-label">Sucursal</label>
                <select class="form-select" id="sucursal_ban" name="sucursal_ban">
                    <option value="">Selecciona...</option>
                    <option value="general">General</option>
                    <option value="general2">General 2</option>
                    <option value="benjamin_franklin">BENJAMIN FRANKLIN</option>
                    <option value="ciudad_jardin">CIUDAD JARDIN</option>
                    <option value="division_del_norte">DIVISION DEL NORTE</option>
                    <option value="miramontes">MIRAMONTES</option>
                    <option value="chalco">CHALCO</option>
                    <option value="felix_cuevas">FELIX CUEVAS</option>
                    <option value="tultitlan">TULTITLAN</option>
                    <option value="zapata">ZAPATA</option>
                    <option value="reforma">REFORMA</option>
                    <option value="caballos">LOS CABALLOS</option>
                    <option value="plaza_central">PLAZA CENTRAL</option>
                    <option value="mundo_imperial">MUNDO IMPERIAL</option>
                    <option value="pachuca">PACHUCA</option>
                    <option value="patrimonial">PATRIMONIAL</option>
                    <option value="matriz">MATRIZ</option>
                </select>
            </div>
            

            <!--<div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>-->
          </div>

          <hr class="my-4">

          <!--<button class="w-100 btn btn-primary btn-lg botonlg" id="enviar" type="submit">Guardar</button>-->
          <input type="submit" class="w-100 btn btn-primary btn-lg botonlg" id="enviar" name="Guardar">
          <!--<input id="enviar" class="w-100 btn btn-primary btn-lg" type="submit" value="Guardar" />-->
          <!--<button class="submit" type="submit">Submit Form</button>-->
        </form>
       <!--</div>-->
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p> webmaster@inmega.com</p>
    <p> Plataformas</p>
  </footer>
</div>
    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/formulario.js"></script>
    <script>
        const dashboard = document.querySelector("#dashboard");
        const sucursal_ban = document.querySelector("[name=sucursal_ban]");
        const div_sucursal_ban = document.getElementById("div_sucursal_ban");
        
        dashboard.addEventListener("change", () => {
          if (dashboard.value === "20") {
            div_sucursal_ban.style.display = 'block';
            document.querySelector('[name=sucursal_ban]').required = true;
          } else {
            div_sucursal_ban.style.display = 'none';
            document.querySelector('[name=sucursal_ban]').required = false;
          }
        });
        
    </script>
  </body>
</html>
