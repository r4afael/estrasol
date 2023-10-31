<?php
    include 'conexion.php';
    echo $_FILES['img2']['name'];
    echo $_POST["usuario"];
date_default_timezone_set('America/Mexico_City');
    
    $query = "select id from usuarios where usuario='".utf8_decode($_POST["usuario"])."'";
    $result = mysqli_query(conex(), $query);
    
    $fila = mysqli_fetch_array($result, MYSQLI_ASSOC);
    
    echo $fila["id"];


    if(isset($_FILES['img2'])){
        $nombreimg=utf8_decode($_FILES['img2']['name']);
        $ext = explode(".", $nombreimg);
        $ruta=utf8_decode($_FILES['img2']['tmp_name']);
        $destino="img/fotos/foto_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set foto='foto_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['rfc'])){
        $nombrefile=utf8_decode($_FILES['rfc']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['rfc']['tmp_name']);
        $destino="archivos/rfc_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set rfc='rfc_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['curp'])){
        $nombrefile=utf8_decode($_FILES['curp']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['curp']['tmp_name']);
        $destino="archivos/curp_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set curp='curp_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['nss'])){
        $nombrefile=utf8_decode($_FILES['nss']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['nss']['tmp_name']);
        $destino="archivos/nss_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set nss='nss_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['infonavit'])){
        $nombrefile=utf8_decode($_FILES['infonavit']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['infonavit']['tmp_name']);
        $destino="archivos/infonavit_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set credito_infonavit='infonavit_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['solicitudEmpleo'])){
        $nombrefile=utf8_decode($_FILES['solicitudEmpleo']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['solicitudEmpleo']['tmp_name']);
        $destino="archivos/solicitudEmpleo_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set solicitud_de_empleo='solicitudEmpleo_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['ine'])){
        $nombrefile=utf8_decode($_FILES['ine']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['ine']['tmp_name']);
        $destino="archivos/ine_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set ine='ine_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['actaNacimiento'])){
        $nombrefile=utf8_decode($_FILES['actaNacimiento']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['actaNacimiento']['tmp_name']);
        $destino="archivos/actaNacimiento_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set acta_de_nacimiento='actaNacimiento_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['comprobanteDomicilio'])){
        $nombrefile=utf8_decode($_FILES['comprobanteDomicilio']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['comprobanteDomicilio']['tmp_name']);
        $destino="archivos/comprobanteDomicilio_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set comprobante_domicilio='comprobanteDomicilio_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['comprobanteEstudios'])){
        $nombrefile=utf8_decode($_FILES['comprobanteEstudios']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['comprobanteEstudios']['tmp_name']);
        $destino="archivos/comprobanteEstudios_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set comprobante_de_estudios='comprobanteEstudios_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['cartasRecomendacion'])){
        $nombrefile=utf8_decode($_FILES['cartasRecomendacion']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['cartasRecomendacion']['tmp_name']);
        $destino="archivos/cartaRecomendacion_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set cartas_recomendacion='cartaRecomendacion_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['antecedentes'])){
        $nombrefile=utf8_decode($_FILES['antecedentes']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['antecedentes']['tmp_name']);
        $destino="archivos/antecedentes_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set antecedentes_no_penales='antecedentes_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['contratos'])){
        $nombrefile=utf8_decode($_FILES['contratos']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['contratos']['tmp_name']);
        $destino="archivos/contratos_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set contratos='contratos_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }

    if(isset($_FILES['uniformes'])){
        $nombrefile=utf8_decode($_FILES['uniformes']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['uniformes']['tmp_name']);
        $destino="archivos/uniformes_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set uniformes='uniformes_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['claveBanco'])){
        $nombrefile=utf8_decode($_FILES['claveBanco']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['claveBanco']['tmp_name']);
        $destino="archivos/claveBanco_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set clave_banco='claveBanco_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['alta'])){
        $nombrefile=utf8_decode($_FILES['alta']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['alta']['tmp_name']);
        $destino="archivos/alta_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set alta='alta_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['contratoConfidencialidad'])){
        $nombrefile=utf8_decode($_FILES['contratoConfidencialidad']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['contratoConfidencialidad']['tmp_name']);
        $destino="archivos/contratoConfidencial_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set contrato_confidencialidad='contratoConfidencial_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['contratoLaboral'])){
        $nombrefile=utf8_decode($_FILES['contratoLaboral']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['contratoLaboral']['tmp_name']);
        $destino="archivos/contratoLaboral_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set contrato_laboral='contratoLaboral_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    if(isset($_FILES['digitalizado'])){
        $nombrefile=utf8_decode($_FILES['digitalizado']['name']);
        $ext = explode(".", $nombrefile);
        $ruta=utf8_decode($_FILES['digitalizado']['tmp_name']);
        $destino="archivos/digitalizado_".$fila["id"].".".$ext[1];
        if(copy($ruta,$destino)){
            $query = "update usuarios set digitalizado='digitalizado_".$fila["id"].".".$ext[1]."' where usuario='".utf8_decode($_POST["usuario"])."'";
            if(mysqli_query(conex(), $query)){
                echo 'Exito';
            }
        }
    }
    
    header("Location: Inicio.html");
    die();
?>