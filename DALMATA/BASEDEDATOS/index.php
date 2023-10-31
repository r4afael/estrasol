<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="INMEGA">
    <meta name="generator" content="Rafael">
    <title>Dalmata</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/navbar-fixed/">
    <script src="js/jquery.js" type="text/javascript"></script>   

    
 
    

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
    <link href="navbar-top-fixed.css" rel="stylesheet">
  </head>
  <body>
    
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Dalmata</a>
    <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>-->
    <!--<div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>-->
  </div>
</nav>

<main class="container">
  <div class="bg-light p-5 rounded">
    <h1>Actualiza base de datos Dalmata</h1>
    <div class="mb-3">
        <form enctype="multipart/form-data" id="base" method="post" action="">
          <label for="formFile" class="form-label">Selecciona tu archivo CSV</label>
          <input class="form-control" type="file" id="file" name="file"><br>
          <button type="button" class="btn btn-success" onclick="Envia()">Guardar</button>
          <br>
          <center><div id="mensaje"></div></center>
         </form>
    </div>
  </div>
  
  <!--<div class="loading" id="mensaje2"><img src="images/loader.gif"/><br/>Un momento, por favor...</div>-->
</main>
<script>
function Envia(){
  var formData = new FormData(document.getElementById("base"));
  //formData.append("dato", "valor");
  $('#mensaje').html('<div class="loading"><img src="images/loader.gif"/><br/>Un momento, por favor...</div>');
    $.ajax({
      url: "recibe.php",
      type: "post",
      dataType: "html",
      data: formData,
      cache: false,
      contentType: false,
      processData: false
})
    .done(function(res){
        //$("#mensaje").html("Respuesta: " + res);
        $('#mensaje').fadeIn(1000).html(res);
        document.getElementById('file').value ='';
    });
}
</script>

    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>

      
  </body>
</html>