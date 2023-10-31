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

<html lang="es">

<head>
  <title>junk-in-colombia</title>
  <link rel="icon" type="image/png" href="images/icons/PPM.ico" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
  <style type="text/css">
    iframe {
      display: block;
      width: 100%;
      border: none;
      height: 600px;
      margin-top: 10px;
    }
  </style>
</head>

<body id="top">
  <div class="bgded overlay light">
    <div class="wrapper row0">
      <div id="topbar" class="hoc clear">
        <!-- ################################################################################################ -->
        <div class="fl_left">
          <!-- ################################################################################################ -->
          <ul class="nospace">
            <!--<li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
          <li><i class="fa fa-envelope-o"></i> info@domain.com</li> -->
          </ul>
          <!-- ################################################################################################ -->
        </div>
        <div class="fl_right">
          <!-- ################################################################################################ -->
          <ul class="nospace">
            <li><a href="https://pricepointmonitor.com/junk-in-colombia/home.php"><i class="fa fa-lg fa-home"></i></a></li>
            <!--<li><a href="cambiar_contrasena.php" title="Ayuda"><i class="fa fa-life-bouy"></i></a></li>-->
            <li><a href="cerrar_sesion.php" title="Cerrar Sesi&oacute;n"><i class="fa fa-lg fa-sign-in"></i></a></li>
            <li><a href="cambiar_contrasena.php" title="Cambio de Contrase&#241;a"><i class="fa fa-lg fa-edit"></i></a></li>
          </ul>
          <!-- ################################################################################################ -->
        </div>
        <!-- ################################################################################################ -->
      </div>
    </div>
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <div class="wrapper row1">
      <!--<header id="header" class="hoc clear">-->
      <header>
        <!-- ################################################################################################ -->
        <!--<div id="logo" class="fl_left">
        <h1><a href="index.html">Oleald</a></h1>
      </div>-->
        <nav id="mainav" class="fl_right">
          <ul class="clear">
            <!--
            <li><a class="drop" href="#">Argentina</a>
              <ul>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9')">INICIO</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection1b06d02277046dab53b3')">MAIN PURPOSE AND METHODOLOGY</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection578e34b3fd3c6fc5bfcc')">PIPES COMPSET SELL OUT BY REGION</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection93ebbf1fe2e1d7bc7045')">PIPES COMPSET SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectioneeb557ed21d36b06f061')">PRICING TRENDS PER MONTH SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection10959bde5d1d1760c853')">AMANCO PRICE PREAD VS COMPETITOR</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectiona5ee3895806b2e02af03')">SUMMARY SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection605b1c9ab264189dc97c')">BENCHMARKING</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYzQxZDQzNDMtNzA5YS00MGY5LTgxNzMtMjgzOTJlOGZjMWRjIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectiondd1ae87601f1de04ae3c')">SUMMARY</a></li>
              </ul>
            </li>
            -->
            <!--<li><a class="drop" href="#">Colombia</a>
              <ul>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9')">INICIO</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection47fd832f3b8be79b5828')">MAIN PURPOSE AND METHODOLOGY</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection17048c603dbe04810c6a')">PIPES COMPSET COLOMBIA SELL OUT BY REGION (PAVCO)</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionbf4d3d56ba05da18397b')">PIPES COMPSET COLOMBIA SELL OUT BY REGION (CELTA)</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection4e2f8716595b1b40b9ea')">PRICING TRENDS PER MONTH SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionae28742d3a65d4c4ceb3')">PAVCO PRICE PREAD VS COMPETITOR</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection537df13475c12d062a74')">PIPES COMPSET COLOMBIA SELL OUT PAVCO</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection84b584f86b49563ae88f')">PIPES COMPSET COLOMBIA SELL OUT CELTA</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectioncc6bebc2800736c6dc03')">SUMMARY ASP SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection605b1c9ab264189dc97c')">BENCHMARKING</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZGI0NDNhZWQtOWJiZC00MzcwLWI0MWYtYjA0NjE4YjBkZjgxIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionef7e33c4fc2811092285')">SUMMARY</a></li>
              </ul>
            </li>-->
             <!--
            <li><a class="drop" href="#">Ecuador</a>
              <ul>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9')">INICIO</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection1b06d02277046dab53b3)">MAIN PURPOSE AND METHODOLOGY</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionc80e5593a6ee1c825314')">PIPES COMPSET PLASTIGAMA ECUATOR SELL OUT BY REGION</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection898375b10b187b3cbd0a')">PIPES COMPSET PLASTIDOR ECUATOR SELL OUT BY REGION</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionc2dc16c961957878dd66')">PRICING TRENDS PER MONTH SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection3112db511ed90aa63183')">PLASTIGAMA PRICE PREAD VS COMPETITOR</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection537df13475c12d062a74')">% DIFFERENCE PLASTIGAMA Vs COMPSET SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection7832490265169a990609')">% DIFFERENCE PLASTIDOR Vs COMPSET SELL IN</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectiona5ee3895806b2e02af03')">SUMMARY SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection605b1c9ab264189dc97c')">BENCHMARKING</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiYmZhOTk5OGEtZmYyZS00NWIzLTlmN2MtMThmZTEzOGZjY2JlIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection8fe4635cb631d3f3ddf8')">SUMMARY</a></li>
              </ul>
            </li>
            <li><a class="drop" href="#">Mexico</a>
              <ul>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZjUwYzc5ODYtMzIyNC00NWE1LWJjYzAtZTM0YjdkMzk3MjJkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9')">INICIO</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZjUwYzc5ODYtMzIyNC00NWE1LWJjYzAtZTM0YjdkMzk3MjJkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection1b06d02277046dab53b3')">MAIN PURPOSE AND METHODOLOGY</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiMWE2MDUyYTMtNDExMS00NDc2LWI5NWItOWFlOGM5MDFlY2RmIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection578e34b3fd3c6fc5bfcc')">PIPES COMPSET MEXICO SELL OUT BY REGION</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZjUwYzc5ODYtMzIyNC00NWE1LWJjYzAtZTM0YjdkMzk3MjJkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection93ebbf1fe2e1d7bc7045')">% DIFFERENCE AMANCO WAVIN Vs COMPSET SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZjUwYzc5ODYtMzIyNC00NWE1LWJjYzAtZTM0YjdkMzk3MjJkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectioneeb557ed21d36b06f061')">PRICING TRENDS PER MONTH SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZjUwYzc5ODYtMzIyNC00NWE1LWJjYzAtZTM0YjdkMzk3MjJkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectiona5ee3895806b2e02af03')">SUMMARY SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiZjUwYzc5ODYtMzIyNC00NWE1LWJjYzAtZTM0YjdkMzk3MjJkIiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection605b1c9ab264189dc97c')">BENCHMARKING</a></li>
              </ul>
            </li>
            <li><a class="drop" href="#">Peru</a>
              <ul>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9')">INICIO</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection1b06d02277046dab53b3')">MAIN PURPOSE AND METHODOLOGY</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection578e34b3fd3c6fc5bfcc')">PIPES COMPSET PERU SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection93ebbf1fe2e1d7bc7045')">% DIFFERENCE PAVCO Vs COMPSET SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection6afcc87dde22e621b85d')">% DIFFERENCE PLASTISUR Vs COMPSET SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectioneeb557ed21d36b06f061')">PRICING TRENDS PER MONTH SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionc7c0173657921c473c07')">PAVCO PRICE PREAD VS COMPETITOR</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectiona5ee3895806b2e02af03')">SUMMARY SELL OUT</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection605b1c9ab264189dc97c')">BENCHMARKING</a></li>
                <li><a href="#" onclick="go('https://app.powerbi.com/view?r=eyJrIjoiNmZhODZiNjEtNWRmNS00YjE1LWJhNmQtZmU1OWNjNTZjZmY5IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSectionc8ec1ddcfd4d1e2e044f')">SUMMARY</a></li>
              </ul>
            </li>
             -->
            <!--<li><a class="drop" href="#">Colombia</a>
            <ul>
              <li><a href="#">Level 2</a></li>
              <li><a class="drop" href="#">Level 2 + Drop</a>
                <ul>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                </ul>
              </li>
              <li><a href="#">Level 2</a></li>
            </ul>
          </li>-->
          </ul>
        </nav>
        <!-- ################################################################################################ -->
      </header>
    </div>
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <!-- End Top Background Image Wrapper -->
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <div class="wrapper row3">
      <!-- main body -->
      <!-- ################################################################################################ -->
      <div class="group excerpt">
       <iframe id="frames" name="frames" src="https://app.powerbi.com/view?r=eyJrIjoiNDcxY2QwMmItMTlkNy00NTdjLTg5ODUtODIxYzE2YmI3OWY2IiwidCI6ImVmMzUwYzMwLWE0OWYtNDg4NC1hY2M3LTM5ZWI2YTQ0ZDlhMiIsImMiOjR9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
      </div>

    </div>

    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <!-- ################################################################################################ -->
    <a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>
    <!-- JAVASCRIPTS -->
    <script src="layout/scripts/jquery.min.js"></script>
    <script src="layout/scripts/jquery.backtotop.js"></script>
    <script src="layout/scripts/jquery.mobilemenu.js"></script>

    <!-- COLOMBIA -->
    <script type="text/javascript">
      function go(loc) {
        document.getElementById('frames').src = loc;
      }
    </script>
    <script type='text/javascript'>
      $(function() {
        $(document).bind("contextmenu", function(e) {
          return false;
        });
      });
    </script>

</body>

</html>