<?php
header('Access-Control-Allow-Origin: *');
include ("conexion.php");

//Creamos las tablas.

$evaluacion = "CREATE TABLE IF NOT EXISTS Evaluacion (
    idEvaluacion INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ids INT(11),
    atributo VARCHAR(50),
    valor VARCHAR(10),
    fecha TIMESTAMP
    )";
$mysqli->query($evaluacion);


//Obteniendo el ultimo id insertado de codigos1
$select_codigos1 = "SELECT `idcodigo1` FROM `codigos1` WHERE 1 ORDER BY `idcodigo1` DESC limit 0,1";
$resultadocodigos1 = $mysqli->query($select_codigos1);
$row1 = $resultadocodigos1->fetch_array(MYSQLI_ASSOC);
$codigos1_ID=(int)($row1["idcodigo1"]);

//Obteniendo el ultimo id Relacion_codigos
$select_RelacionCodigos = "SELECT `idrelacion` FROM `Relacion_codigos` WHERE 1 ORDER BY `idrelacion` DESC limit 0,1";
$resultadopRelacionCodigos = $mysqli->query($select_RelacionCodigos);
$rowR = $resultadopRelacionCodigos->fetch_array(MYSQLI_ASSOC);
$RelacionCodigos_ID=(int)($rowR["idrelacion"]);

//Obteniendo el ultimo id insertado de codigos3
$select_codigos2 = "SELECT `idcodigo2` FROM `codigos2` WHERE 1 ORDER BY `idcodigo2` DESC limit 0,1";
$resultadocodigos2 = $mysqli->query($select_codigos2);
$row2 = $resultadocodigos2->fetch_array(MYSQLI_ASSOC);
$codigos2_ID=(int)($row2["idcodigo2"]);

//Obteniendo el ultimo id insertado de codigos3
$select_codigos3 = "SELECT `idcodigo3` FROM `codigos3` WHERE 1 ORDER BY `idcodigo3` DESC limit 0,1";
$resultadocodigos3 = $mysqli->query($select_codigos3);
$row3 = $resultadocodigos3->fetch_array(MYSQLI_ASSOC);
$codigos3_ID=(int)($row3["idcodigo3"]);


//Obteniendo el ultimo id insertado de codigos4
$select_codigos4 = "SELECT `idcodigo4` FROM `codigos4` WHERE 1 ORDER BY `idcodigo4` DESC limit 0,1";
$resultadocodigos4 = $mysqli->query($select_codigos4);
$row4 = $resultadocodigos4->fetch_array(MYSQLI_ASSOC);
$codigos4_ID=(int)($row4["idcodigo4"]);


//Obteniendo el ultimo id insertado de codigos5
$select_codigos5 = "SELECT `idcodigo5` FROM `codigos5` WHERE 1 ORDER BY `idcodigo5` DESC limit 0,1";
$resultadocodigos5 = $mysqli->query($select_codigos5);
$row5 = $resultadocodigos5->fetch_array(MYSQLI_ASSOC);
$codigos5_ID=(int)($row5["idcodigo5"]);


//Obteniendo el ultimo id insertado de codigos6
$select_codigos6 = "SELECT `idcodigo6` FROM `codigos6` WHERE 1 ORDER BY `idcodigo6` DESC limit 0,1";
$resultadocodigos6 = $mysqli->query($select_codigos6);
$row6 = $resultadocodigos6->fetch_array(MYSQLI_ASSOC);
$codigos6_ID=(int)($row6["idcodigo6"]);


//Obteniendo el ultimo id insertado de codigos7
$select_codigos7 = "SELECT `idcodigo7` FROM `codigos7` WHERE 1 ORDER BY `idcodigo7` DESC limit 0,1";
$resultadocodigos7 = $mysqli->query($select_codigos7);
$row7 = $resultadocodigos7->fetch_array(MYSQLI_ASSOC);
$codigos7_ID=(int)($row7["idcodigo7"]);

//Obteniendo el ultimo id insertado de codigos8
$select_codigos8 = "SELECT `idcodigo8` FROM `codigos8` WHERE 1 ORDER BY `idcodigo8` DESC limit 0,1";
$resultadocodigos8 = $mysqli->query($select_codigos8);
$row8 = $resultadocodigos8->fetch_array(MYSQLI_ASSOC);
$codigos8_ID=(int)($row8["idcodigo8"]);



//Insertamos en tabla Evaluacion
    if($codigos1_ID >= $RelacionCodigos_ID){
            
        $array = array('P7_A1','P7_A2','P7_A3','P7_A4','P7_A5','P7_A6','P7_A7','P7_A8','P7_A9','P7_A10','P7_A11','P7_A12','P7_A13','P7_A14','P7_A15','P7_A16','P7_A17','P7_A18','P7_A19','P7_A20','P7_A21','P7_A22','P7_A23','P7_A24','P7_A25','P7_A26','P7_A27','P7_A28','P7_A29','P7_A30','P7_A31','P7_A32','P7_A33','P7_A34','P7_A35','P7_A36','P7_A37','P7_A38','P7_A39','P7_A40','P7_A41','P7_A42','P7_A43','P7_A44','P7_A45','P7_A46','P7_A47','P7_A48','P7_A49','P7_A50','P7_A51','P7_A52','P7_A53','P7_A54','P7_A55','P7_A56','P8_A1','P8_A2','P8_A3','P8_A4','P8_A5','P8_A6','P8_A7','P8_A8','P8_A9','P8_A10','P8_A11','P8_A12','P8_A13','P8_A14','P8_A15','P8_A16','P8_A17','P8_A18','P8_A19','P8_A20','P8_A21','P8_A22','P8_A23','P8_A24','P8_A25','P8_A26','P8_A27','P8_A28','P8_A29','P8_A30','P8_A31','P8_A32','P8_A33','P8_A34','P8_A35','P8_A36','P8_A37','P8_A38','P8_A39','P8_A40','P8_A41','P8_A42','P8_A43','P8_A44','P8_A45','P8_A46','P8_A47','P8_A48','P8_A49','P8_A50','P8_A51','P8_A52','P8_A53','P8_A54','P8_A55','P8_A56','P9_A1','P9_A2','P9_A3','P9_A4','P9_A5','P9_A6','P9_A7','P9_A8','P9_A9','P9_A10','P9_A11','P9_A12','P9_A13','P9_A14','P9_A15','P9_A16','P9_A17','P9_A18','P9_A19','P9_A20','P9_A21','P9_A22','P9_A23','P9_A24','P9_A25','P9_A26','P9_A27','P9_A28','P9_A29','P9_A30','P9_A31','P9_A32','P9_A33','P9_A34','P9_A35','P9_A36','P9_A37','P9_A38','P9_A39','P9_A40','P9_A41','P9_A42','P9_A43','P9_A44','P9_A45','P9_A46','P9_A47','P9_A48','P9_A49','P9_A50','P9_A51','P9_A52','P9_A53','P9_A54','P9_A55','P9_A56','P10_A1','P10_A2','P10_A3','P10_A4','P10_A5','P10_A6','P10_A7','P10_A8','P10_A9','P10_A10','P10_A11','P10_A12','P10_A13','P10_A14','P10_A15','P10_A16','P10_A17','P10_A18','P10_A19','P10_A20','P10_A21','P10_A22','P10_A23','P10_A24','P10_A25','P10_A26','P10_A27','P10_A28','P10_A29','P10_A30','P10_A31','P10_A32','P10_A33','P10_A34','P10_A35','P10_A36','P10_A37','P10_A38','P10_A39','P10_A40','P10_A41','P10_A42','P10_A43','P10_A44','P10_A45','P10_A46','P10_A47','P10_A48','P10_A49','P10_A50','P10_A51','P10_A52','P10_A53','P10_A54','P10_A55','P10_A56','P11_A1','P11_A2','P11_A3','P11_A4','P11_A5','P11_A6','P11_A7','P11_A8','P11_A9','P11_A10','P11_A11','P11_A12','P11_A13','P11_A14','P11_A15','P11_A16','P11_A17','P11_A18','P11_A19','P11_A20','P11_A21','P11_A22','P11_A23','P11_A24','P11_A25','P11_A26','P11_A27','P11_A28','P11_A29','P11_A30','P11_A31','P11_A32','P11_A33','P11_A34','P11_A35','P11_A36','P11_A37','P11_A38','P11_A39','P11_A40','P11_A41','P11_A42','P11_A43','P11_A44','P11_A45','P11_A46','P11_A47','P11_A48','P11_A49','P11_A50','P11_A51','P11_A52','P11_A53','P11_A54','P11_A55','P11_A56','P12_A1','P12_A2','P12_A3','P12_A4','P12_A5','P12_A6','P12_A7','P12_A8','P12_A9','P12_A10','P12_A11','P12_A12','P12_A13','P12_A14','P12_A15','P12_A16','P12_A17','P12_A18','P12_A19','P12_A20','P12_A21','P12_A22','P12_A23','P12_A24','P12_A25','P12_A26','P12_A27','P12_A28','P12_A29','P12_A30','P12_A31','P12_A32','P12_A33','P12_A34','P12_A35','P12_A36','P12_A37','P12_A38','P12_A39','P12_A40','P12_A41','P12_A42','P12_A43','P12_A44','P12_A45','P12_A46','P12_A47','P12_A48','P12_A49','P12_A50','P12_A51','P12_A52','P12_A53','P12_A54','P12_A55','P12_A56');
        $array_num = count($array);
        for ($i = 0; $i < $array_num; ++$i){
            $insertaEvaluacion = "INSERT INTO Evaluacion (ids, atributo, valor) SELECT idcodigo1, '".$array[$i]."',".$array[$i]." FROM codigos1 WHERE idcodigo1 >".$RelacionCodigos_ID;
            $mysqli->query($insertaEvaluacion);
        }
        //Eliminamos vacios
        $drop_vacio = "DELETE FROM Evaluacion WHERE valor='' OR valor IS NULL";
        $mysqli->query($drop_vacio);
    }


?>