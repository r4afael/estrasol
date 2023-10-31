<?php
//Comprobamos si ya existe la copia
if(!is_dir('../nuevo_skin')){
    //Asignamos la carpeta que queremos copiar
    $source ='../ENTENDIMIENTO-DE-INHIBIDORES-DE-COMPRA/';
    //El destino donde se guardara la copia
    $destination = '../NUEVO_SKIN';
    full_copy($source, $destination);
    echo ("SKIN COPIADO");
    }
    else{
        echo "EL SKIN YA EXISTE";
    }
    
    //Crear nuevos directorios completos
    function full_copy( $source, $target ) {
        if ( is_dir( $source ) ) {
            @mkdir( $target );
            $d = dir( $source );
            while ( FALSE !== ( $entry = $d->read() ) ) {
                if ( $entry == '.' || $entry == '..' ) {
                    continue;
                }
                $Entry = $source . '/' . $entry; 
                if ( is_dir( $Entry ) ) {
                    full_copy( $Entry, $target . '/' . $entry );
                    continue;
                }
                copy( $Entry, $target . '/' . $entry );
            }
     
            $d->close();
        }else {
            copy( $source, $target );
        }
    }

?>