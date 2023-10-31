<?php
header('Access-Control-Allow-Origin: *');
include ("conexion.php");

//Creamos las tablas.

//Creamos tabla p3.
$p3 = "
create table IF NOT EXISTS p3 (
	idp3 int not null primary key auto_increment,
	ids int (11),
	atributo varchar (50),
	valor varchar(10),
	fecha TIMESTAMP
	)
    ";
$mysqli->query($p3);

//Creamos tabla p5.
$p5 = "
create table IF NOT EXISTS p5 (
	idp5 int not null primary key auto_increment,
	ids int (11),
	atributo varchar (50),
	valor varchar(10),
	fecha TIMESTAMP
	)
    ";
$mysqli->query($p5);

//Creamos tabla p19.
$p19 = "
    create table IF NOT EXISTS p19 (
	idp19 int not null primary key auto_increment,
	ids int (11),
	atributo varchar (50),
	valor varchar(10),
	fecha TIMESTAMP
	)
    ";
$mysqli->query($p19);

//Creamos tabla p21.
$p21 = "
create table IF NOT EXISTS p21 (
	idp21 int not null primary key auto_increment,
	ids int (11),
	atributo varchar (50),
	valor varchar(10),
	fecha TIMESTAMP
	)
    ";
$mysqli->query($p21);

//Creamos tabla p24.
$p24 = "
create table IF NOT EXISTS p24 (
	idp24 int not null primary key auto_increment,
	ids int (11),
	atributo varchar (50),
	valor varchar(10),
	fecha TIMESTAMP
	)
    ";
$mysqli->query($p24);

//Creamos tabla p25.
$p25 = "
create table IF NOT EXISTS p25 (
	idp25 int not null primary key auto_increment,
	ids int (11),
	atributo varchar (50),
	valor varchar(10),
	fecha TIMESTAMP
	)
    ";
$mysqli->query($p25);

//Creamos tabla p1516.
$p1516 = "
    create table IF NOT EXISTS p1516 (
        idp1516 int not null primary key auto_increment,
        ids int (11),
        atributo varchar (50),
        valor varchar(10),
        fecha TIMESTAMP
        )
    ";
$mysqli->query($p1516);


//Obteniendo el ultimo id Relacion_codigos
$select_RelacionCodigos = "SELECT `idrelacion` FROM `Relacion_codigos` WHERE 1 ORDER BY `idrelacion` DESC limit 0,1";
$resultadopRelacionCodigos = $mysqli->query($select_RelacionCodigos);
$rowR = $resultadopRelacionCodigos->fetch_array(MYSQLI_ASSOC);
$RelacionCodigos_ID=(int)($rowR["idrelacion"]);

//Obteniendo el ultimo id insertado de codigos1
$select_codigos1 = "SELECT `idcodigo1` FROM `codigos1` WHERE 1 ORDER BY `idcodigo1` DESC limit 0,1";
$resultadocodigos1 = $mysqli->query($select_codigos1);
$row1 = $resultadocodigos1->fetch_array(MYSQLI_ASSOC);
$codigos1_ID=(int)($row1["idcodigo1"]);

//Obteniendo el ultimo id insertado de codigos2
$select_codigos2 = "SELECT `idcodigo2` FROM `codigos2` WHERE 1 ORDER BY `idcodigo2` DESC limit 0,1";
$resultadocodigos2 = $mysqli->query($select_codigos2);
$row2 = $resultadocodigos2->fetch_array(MYSQLI_ASSOC);
$codigos2_ID=(int)($row3["idcodigo2"]);

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
$codigos8_ID=(int)($row7["idcodigo8"]);


//********************************** INICIO INSERCION p3 *************************************************************

//Insertamos en tabla p3 de la tabla codigos1
if($codigos1_ID >= $RelacionCodigos_ID){
        
    $array = array('P3M1','P3M2','P3M3','P3M4','P3M5','P3M6','P3M7','P3M8','P3M9','P3M10','P3M11','P3M12','P3M13','P3M14','P3M15','P3M16','P3M17','P3M18','P3M19','P3M20','P3M21','P3M22','P3M23','P3M24','P3M25','P3M26','P3M27','P3M28','P3M29','P3M30','P3M31','P3M32','P3M33','P3M34','P3M35','P3M36','P3M37','P3M38','P3M39','P3M40','P3M41','P3M42','P3M43','P3M44','P3M45','P3M46','P3M47','P3M48','P3M49','P3M50','P3M51','P3M52','P3M53','P3M54','P3M55','P3M56','P4M1','P4M2','P4M3','P4M4','P4M5','P4M6','P4M7','P4M8','P4M9','P4M10','P4M11','P4M12','P4M13','P4M14','P4M15','P4M16','P4M17','P4M18','P4M19','P4M20','P4M21','P4M22','P4M23','P4M24','P4M25','P4M26','P4M27','P4M28','P4M29','P4M30','P4M31','P4M32','P4M33','P4M34','P4M35','P4M36','P4M37','P4M38','P4M39','P4M40','P4M41','P4M42','P4M43','P4M44','P4M45','P4M46','P4M47','P4M48','P4M49','P4M50','P4M51','P4M52','P4M53','P4M54','P4M55','P4M56','P5M1','P5M2','P5M3','P5M4','P5M5','P5M6','P5M7','P5M8','P5M9','P5M10','P5M11','P5M12','P5M13','P5M14','P5M15','P5M16','P5M17','P5M18','P5M19','P5M20','P5M21','P5M22','P5M23','P5M24','P5M25','P5M26','P5M27','P5M28','P5M29','P5M30','P5M31','P5M32','P5M33','P5M34','P5M35','P5M36','P5M37','P5M38','P5M39','P5M40','P5M41','P5M42','P5M43','P5M44','P5M45','P5M46','P5M47','P5M48','P5M49','P5M50','P5M51','P5M52','P5M53','P5M54','P5M55','P5M56','P6M1','P6M2','P6M3','P6M4','P6M5','P6M6','P6M7','P6M8','P6M9','P6M10','P6M11','P6M12','P6M13','P6M14','P6M15','P6M16','P6M17','P6M18','P6M19','P6M20','P6M21','P6M22','P6M23','P6M24','P6M25','P6M26','P6M27','P6M28','P6M29','P6M30','P6M31','P6M32','P6M33','P6M34','P6M35','P6M36','P6M37','P6M38','P6M39','P6M40','P6M41','P6M42','P6M43','P6M44','P6M45','P6M46','P6M47','P6M48','P6M49','P6M50','P6M51','P6M52','P6M53','P6M54','P6M55','P6M56','P6AM1','P6AM2','P6AM3','P6AM4','P6AM5','P6AM6','P6AM7','P6AM8','P6AM9','P6AM10','P6AM11','P6AM12','P6AM13','P6AM14','P6AM15','P6AM16','P6AM17','P6AM18','P6AM19','P6AM20','P6AM21','P6AM22','P6AM23','P6AM24','P6AM25','P6AM26','P6AM27','P6AM28','P6AM29','P6AM30','P6AM31','P6AM32','P6AM33','P6AM34','P6AM35','P6AM36','P6AM37','P6AM38','P6AM39','P6AM40','P6AM41','P6AM42','P6AM43','P6AM44','P6AM45','P6AM46','P6AM47','P6AM48','P6AM49','P6AM50','P6AM51','P6AM52','P6AM53','P6AM54','P6AM55','P6AM56','P6B');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP24 = "INSERT INTO p3 (ids, atributo, valor) SELECT idcodigo1, '".$array[$i]."',".$array[$i]." FROM codigos1 WHERE idcodigo1 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP24);
    }
    //Eliminamos Vacios
    $drop_vacio2 = "DELETE FROM p3 WHERE valor='' OR valor IS NULL";
    $mysqli->query($drop_vacio2);

    //echo "fin";

}

//********************************** INICIO INSERCION p5 *************************************************************

//Insertamos en tabla p5 de la tabla codigos1
if($codigos1_ID >= $RelacionCodigos_ID){
        
    $array = array('P5M1','P5M2','P5M3','P5M4','P5M5','P5M6','P5M7','P5M8','P5M9','P5M10','P5M11','P5M12','P5M13','P5M14','P5M15','P5M16','P5M17','P5M18','P5M19','P5M20','P5M21','P5M22','P5M23','P5M24','P5M25','P5M26','P5M27','P5M28','P5M29','P5M30','P5M31','P5M32','P5M33','P5M34','P5M35','P5M36','P5M37','P5M38','P5M39','P5M40','P5M41','P5M42','P5M43','P5M44','P5M45','P5M46','P5M47','P5M48','P5M49','P5M50','P5M51','P5M52','P5M53','P5M54','P5M55','P5M56');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP24 = "INSERT INTO p5 (ids, atributo, valor) SELECT idcodigo1, '".$array[$i]."',".$array[$i]." FROM codigos1 WHERE idcodigo1 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP24);
    }
    //Eliminamos Vacios
    $drop_vacio2 = "DELETE FROM p5 WHERE valor='' OR valor IS NULL";
    $mysqli->query($drop_vacio2);

    //echo "fin";

}

//********************************** INICIO INSERCION p19 *************************************************************
//Insertamos en tabla p19 de la tabla codigos3
if($codigos3_ID >= $RelacionCodigos_ID){
        
    $array = array('P19_01_A1','P19_01_A2','P19_01_A3','P19_01_A4','P19_01_A5','P19_01_A6','P19_01_A7','P19_01_A8','P19_01_A9','P19_01_A10','P19_01_A11','P19_01_A12','P19_01_A13','P19_01_A14','P19_01_A15','P19_01_A16','P19_01_A17','P19_01_A18','P19_01_A19');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP19 = "INSERT INTO p19 (ids, atributo, valor) SELECT idcodigo3, '".$array[$i]."',".$array[$i]." FROM codigos3 WHERE idcodigo3 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP19);
    }
    //Eliminamos Vacios
    //$drop_vacio2 = "DELETE FROM p19 WHERE valor='' OR valor IS NULL";
    //$mysqli->query($drop_vacio2);

    //echo "fin";

}
//Insertamos en tabla p19 de la tabla codigos4
if($codigos4_ID >= $RelacionCodigos_ID){
    
$array = array('P19_02_A1','P19_02_A2','P19_02_A3','P19_02_A4','P19_02_A5','P19_02_A6','P19_02_A7','P19_02_A8','P19_02_A9','P19_02_A10','P19_02_A11','P19_02_A12','P19_02_A13','P19_02_A14','P19_02_A15','P19_02_A16','P19_02_A17','P19_02_A18','P19_02_A19','P19_02_A20','P19_02_A21','P19_04_A1','P19_04_A2','P19_04_A3','P19_04_A4','P19_04_A5','P19_04_A6','P19_04_A7','P19_04_A8','P19_04_A9','P19_04_A10','P19_04_A11','P19_04_A12','P19_04_A13','P19_04_A14','P19_04_A15','P19_04_A16','P19_40_A1','P19_40_A2','P19_40_A3','P19_40_A4','P19_40_A5','P19_40_A6','P19_40_A7','P19_40_A8','P19_40_A9','P19_40_A10','P19_40_A11','P19_40_A12','P19_40_A13','P19_40_A14','P19_40_A15','P19_40_A16','P19_40_A17','P19_40_A18','P19_40_A19','P19_40_A20','P19_05_A1','P19_05_A2','P19_05_A3','P19_05_A4','P19_05_A5','P19_05_A6','P19_05_A7','P19_05_A8','P19_05_A9','P19_05_A10','P19_05_A11','P19_05_A12','P19_05_A13','P19_05_A14','P19_21_A1','P19_21_A2','P19_21_A3','P19_21_A4','P19_21_A5','P19_21_A6','P19_21_A7','P19_21_A8','P19_21_A9','P19_21_A10','P19_21_A11','P19_21_A12','P19_21_A13','P19_21_A14','P19_21_A15','P19_21_A16','P19_21_A17','P19_21_A18','P19_21_A19','P19_21_A20','P19_21_A21','P19_23_A1','P19_23_A2','P19_23_A3','P19_23_A4','P19_23_A5','P19_23_A6','P19_23_A7','P19_23_A8','P19_23_A9','P19_23_A10','P19_23_A11','P19_23_A12','P19_23_A13','P19_23_A14','P19_23_A15','P19_23_A16','P19_23_A17','P19_23_A18','P19_07_A1','P19_07_A2','P19_07_A3','P19_07_A4','P19_07_A5','P19_07_A6','P19_07_A7','P19_07_A8','P19_46_A1','P19_46_A2','P19_46_A3','P19_46_A4','P19_46_A5','P19_46_A6','P19_38_A1','P19_38_A2','P19_38_A3','P19_38_A4','P19_38_A5','P19_47_A1','P19_47_A2','P19_47_A3','P19_47_A4','P19_47_A5','P19_47_A6','P19_09_A1','P19_09_A2','P19_09_A3','P19_09_A4','P19_09_A5','P19_09_A6','P19_09_A7','P19_09_A8','P19_09_A9','P19_09_A10','P19_09_A11','P19_09_A12','P19_09_A13','P19_09_A14','P19_09_A15','P19_09_A16','P19_09_A17','P19_09_A18','P19_09_A19','P19_09_A20','P19_09_A21','P19_03_A1','P19_03_A2','P19_03_A3','P19_03_A4','P19_03_A5','P19_03_A6','P19_03_A7','P19_03_A8','P19_03_A9','P19_03_A10','P19_03_A11','P19_03_A12','P19_03_A13','P19_03_A14','P19_03_A15','P19_03_A16','P19_03_A17','P19_03_A18','P19_03_A19','P19_03_A20','P19_03_A21','P19_03_A22','P19_03_A23','P19_03_A24','P19_03_A25','P19_03_A26','P19_03_A27','P19_03_A28','P19_03_A29','P19_03_A30','P19_03_A31','P19_03_A32','P19_03_A33','P19_03_A34','P19_03_A35','P19_03_A36','P19_03_A37','P19_03_A38','P19_03_A39','P19_52_A1','P19_52_A2','P19_52_A3','P19_52_A4','P19_52_A5','P19_52_A6','P19_52_A7','P19_52_A8','P19_52_A9','P19_52_A10','P19_52_A11','P19_52_A12','P19_52_A13','P19_52_A14','P19_52_A15','P19_52_A16','P19_52_A17','P19_52_A18','P19_52_A19','P19_52_A20','P19_52_A21','P19_52_A22','P19_52_A23','P19_52_A24','P19_52_A25','P19_52_A26','P19_52_A27','P19_52_A28','P19_52_A29','P19_52_A30','P19_52_A31','P19_52_A32','P19_52_A33','P19_52_A34','P19_52_A35','P19_52_A36','P19_52_A37','P19_52_A38','P19_52_A39');
$array_num = count($array);
for ($i = 0; $i < $array_num; ++$i){
    $insertaP19 = "INSERT INTO p19 (ids, atributo, valor) SELECT idcodigo4, '".$array[$i]."',".$array[$i]." FROM codigos4 WHERE idcodigo4 >".$RelacionCodigos_ID;
    $mysqli->query($insertaP19);
}
//Eliminamos Vacios
//$drop_vacio2 = "DELETE FROM p19 WHERE valor='' OR valor IS NULL";
//$mysqli->query($drop_vacio2);

//echo "fin";

}

//Insertamos en tabla p19 de la tabla codigos5
if($codigos5_ID >= $RelacionCodigos_ID){
    
$array = array('P19_51_A1','P19_51_A2','P19_51_A3','P19_51_A4','P19_51_A5','P19_51_A6','P19_51_A7','P19_51_A8','P19_51_A9','P19_51_A10','P19_51_A11','P19_51_A12','P19_51_A13','P19_51_A14','P19_51_A15','P19_51_A16','P19_51_A17','P19_51_A18','P19_51_A19','P19_51_A20','P19_51_A21','P19_51_A22','P19_51_A23','P19_51_A24','P19_51_A25','P19_51_A26','P19_51_A27','P19_51_A28','P19_51_A29','P19_51_A30','P19_51_A31','P19_51_A32','P19_51_A33','P19_51_A34','P19_51_A35','P19_51_A36','P19_51_A37','P19_51_A38','P19_51_A39','P19_50_A1','P19_50_A2','P19_50_A3','P19_50_A4','P19_50_A5','P19_50_A6','P19_50_A7','P19_50_A8','P19_50_A9','P19_50_A10','P19_50_A11','P19_50_A12','P19_50_A13','P19_50_A14','P19_50_A15','P19_50_A16','P19_50_A17','P19_50_A18','P19_50_A19','P19_50_A20','P19_50_A21','P19_50_A22','P19_50_A23','P19_50_A24','P19_50_A25','P19_50_A26','P19_50_A27','P19_50_A28','P19_50_A29','P19_50_A30','P19_50_A31','P19_50_A32','P19_50_A33','P19_50_A34','P19_50_A35','P19_50_A36','P19_50_A37','P19_50_A38','P19_50_A39','P19_50_A40','P19_06_A1','P19_06_A2','P19_06_A3','P19_06_A4','P19_06_A5','P19_06_A6','P19_06_A7','P19_06_A8','P19_06_A9','P19_06_A10','P19_06_A11','P19_06_A12','P19_06_A13','P19_06_A14','P19_06_A15','P19_08_A1','P19_08_A2','P19_08_A3','P19_08_A4','P19_08_A5','P19_08_A6','P19_08_A7','P19_08_A8','P19_08_A9','P19_08_A10','P19_08_A11','P19_08_A12','P19_08_A13','P19_08_A14','P19_08_A15','P19_08_A16','P19_08_A17','P19_08_A18','P19_08_A19','P19_08_A20','P19_08_A21','P19_10_A1','P19_10_A2','P19_10_A3','P19_10_A4','P19_10_A5','P19_10_A6','P19_10_A7','P19_10_A8','P19_10_A9','P19_10_A10','P19_13_A1','P19_13_A2','P19_13_A3','P19_13_A4','P19_13_A5','P19_13_A6','P19_13_A7','P19_44_A1','P19_44_A2','P19_44_A3','P19_44_A4','P19_44_A5','P19_44_A6','P19_44_A7','P19_44_A8','P19_44_A9','P19_44_A10','P19_44_A11','P19_44_A12','P19_44_A13','P19_44_A14','P19_44_A15','P19_44_A16','P19_44_A17','P19_53_A1','P19_53_A2','P19_53_A3','P19_53_A4','P19_53_A5','P19_53_A6','P19_53_A7','P19_53_A8','P19_53_A9','P19_53_A10','P19_53_A11','P19_54_A1','P19_54_A2','P19_54_A3','P19_54_A4','P19_48_A1','P19_48_A2','P19_48_A3','P19_48_A4','P19_39_A1','P19_39_A2','P19_16_A1','P19_16_A2','P19_16_A3','P19_16_A4','P19_16_A5','P19_16_A6','P19_16_A7','P19_16_A8','P19_16_A9','P19_16_A10','P19_16_A11','P19_16_A12','P19_16_A13','P19_16_A14','P19_16_A15','P19_16_A16','P19_16_A17','P19_16_A18','P19_16_A19','P19_16_A20','P19_16_A21','P19_16_A22','P19_16_A23','P19_16_A24','P19_16_A25','P19_16_A26','P19_17_A1','P19_17_A2','P19_17_A3','P19_17_A4','P19_17_A5','P19_17_A6','P19_17_A7','P19_17_A8','P19_17_A9','P19_17_A10','P19_17_A11','P19_17_A12','P19_17_A13','P19_17_A14','P19_17_A15','P19_17_A16','P19_17_A17','P19_17_A18','P19_17_A19','P19_17_A20','P19_17_A21','P19_17_A22','P19_17_A23','P19_17_A24','P19_17_A25','P19_17_A26','P19_20_A1','P19_20_A2','P19_20_A3','P19_20_A4','P19_20_A5','P19_20_A6','P19_20_A7','P19_20_A8','P19_20_A9','P19_20_A10','P19_20_A11','P19_20_A12','P19_20_A13','P19_20_A14','P19_20_A15','P19_20_A16','P19_20_A17','P19_20_A18','P19_20_A19','P19_20_A20','P19_20_A21','P19_20_A22','P19_20_A23','P19_20_A24','P19_20_A25','P19_20_A26');
$array_num = count($array);
for ($i = 0; $i < $array_num; ++$i){
    $insertaP19 = "INSERT INTO p19 (ids, atributo, valor) SELECT idcodigo5, '".$array[$i]."',".$array[$i]." FROM codigos5 WHERE idcodigo5 >".$RelacionCodigos_ID;
    $mysqli->query($insertaP19);
}
//Eliminamos Vacios
//$drop_vacio2 = "DELETE FROM p19 WHERE valor='' OR valor IS NULL";
//$mysqli->query($drop_vacio2);

//echo "fin";

}
//Insertamos en tabla p19 de la tabla codigos6
if($codigos6_ID >= $RelacionCodigos_ID){
    
$array = array('P19_25_A1','P19_25_A2','P19_25_A3','P19_25_A4','P19_25_A5','P19_25_A6','P19_25_A7','P19_25_A8','P19_25_A9','P19_25_A10','P19_25_A11','P19_25_A12','P19_25_A13','P19_25_A14','P19_25_A15','P19_25_A16','P19_25_A17','P19_25_A18','P19_25_A19','P19_25_A20','P19_25_A21','P19_25_A22','P19_25_A23','P19_25_A24','P19_25_A25','P19_25_A26','P19_26_A1','P19_26_A2','P19_26_A3','P19_26_A4','P19_26_A5','P19_26_A6','P19_26_A7','P19_26_A8','P19_26_A9','P19_26_A10','P19_26_A11','P19_26_A12','P19_26_A13','P19_26_A14','P19_26_A15','P19_26_A16','P19_26_A17','P19_26_A18','P19_26_A19','P19_26_A20','P19_26_A21','P19_26_A22','P19_26_A23','P19_26_A24','P19_26_A25','P19_26_A26','P19_27_A1','P19_27_A2','P19_27_A3','P19_27_A4','P19_27_A5','P19_27_A6','P19_27_A7','P19_27_A8','P19_27_A9','P19_27_A10','P19_27_A11','P19_27_A12','P19_27_A13','P19_27_A14','P19_27_A15','P19_27_A16','P19_27_A17','P19_27_A18','P19_27_A19','P19_27_A20','P19_27_A21','P19_27_A22','P19_27_A23','P19_27_A24','P19_27_A25','P19_27_A26','P19_28_A1','P19_28_A2','P19_28_A3','P19_28_A4','P19_28_A5','P19_28_A6','P19_28_A7','P19_28_A8','P19_28_A9','P19_28_A10','P19_28_A11','P19_28_A12','P19_28_A13','P19_28_A14','P19_28_A15','P19_28_A16','P19_28_A17','P19_28_A18','P19_28_A19','P19_28_A20','P19_28_A21','P19_28_A22','P19_28_A23','P19_28_A24','P19_28_A25','P19_28_A26','P19_29_A1','P19_29_A2','P19_29_A3','P19_29_A4','P19_29_A5','P19_29_A6','P19_29_A7','P19_29_A8','P19_29_A9','P19_29_A10','P19_29_A11','P19_29_A12','P19_29_A13','P19_29_A14','P19_29_A15','P19_29_A16','P19_29_A17','P19_29_A18','P19_29_A19','P19_29_A20','P19_29_A21','P19_29_A22','P19_29_A23','P19_29_A24','P19_29_A25','P19_29_A26','P19_30_A1','P19_30_A2','P19_30_A3','P19_30_A4','P19_30_A5','P19_30_A6','P19_30_A7','P19_30_A8','P19_30_A9','P19_30_A10','P19_30_A11','P19_30_A12','P19_30_A13','P19_30_A14','P19_30_A15','P19_30_A16','P19_30_A17','P19_30_A18','P19_30_A19','P19_30_A20','P19_30_A21','P19_30_A22','P19_30_A23','P19_30_A24','P19_30_A25','P19_30_A26','P19_31_A1','P19_31_A2','P19_31_A3','P19_31_A4','P19_31_A5','P19_31_A6','P19_31_A7','P19_31_A8','P19_31_A9','P19_31_A10','P19_31_A11','P19_31_A12','P19_31_A13','P19_31_A14','P19_31_A15','P19_31_A16','P19_31_A17','P19_31_A18','P19_31_A19','P19_31_A20','P19_31_A21','P19_31_A22','P19_31_A23','P19_31_A24','P19_31_A25','P19_31_A26','P19_33_A1','P19_33_A2','P19_33_A3','P19_33_A4','P19_33_A5','P19_33_A6','P19_33_A7','P19_33_A8','P19_33_A9','P19_33_A10','P19_33_A11','P19_33_A12','P19_33_A13','P19_33_A14','P19_33_A15','P19_33_A16','P19_33_A17','P19_33_A18','P19_33_A19','P19_33_A20','P19_33_A21','P19_33_A22','P19_33_A23','P19_33_A24','P19_33_A25','P19_33_A26','P19_41_A1','P19_41_A2','P19_41_A3','P19_41_A4','P19_41_A5','P19_41_A6','P19_41_A7','P19_41_A8','P19_41_A9','P19_41_A10','P19_41_A11','P19_41_A12','P19_41_A13','P19_41_A14','P19_41_A15','P19_41_A16','P19_41_A17','P19_41_A18','P19_41_A19','P19_41_A20','P19_41_A21','P19_41_A22','P19_41_A23','P19_41_A24','P19_41_A25','P19_41_A26');
$array_num = count($array);
for ($i = 0; $i < $array_num; ++$i){
    $insertaP19 = "INSERT INTO p19 (ids, atributo, valor) SELECT idcodigo6, '".$array[$i]."',".$array[$i]." FROM codigos6 WHERE idcodigo6 >".$RelacionCodigos_ID;
    $mysqli->query($insertaP19);
}
//Eliminamos Vacios
//$drop_vacio2 = "DELETE FROM p19 WHERE valor='' OR valor IS NULL";
//$mysqli->query($drop_vacio2);

//echo "fin";

}

//Insertamos en tabla p19 de la tabla codigos7
if($codigos7_ID >= $RelacionCodigos_ID){
    
$array = array('P19_49_A1','P19_49_A2','P19_49_A3','P19_49_A4','P19_49_A5','P19_49_A6','P19_49_A7','P19_49_A8','P19_49_A9','P19_49_A10','P19_49_A11','P19_49_A12','P19_49_A13','P19_49_A14','P19_49_A15','P19_49_A16','P19_49_A17','P19_49_A18','P19_49_A19','P19_49_A20','P19_49_A21','P19_49_A22','P19_49_A23','P19_49_A24','P19_49_A25','P19_49_A26','P19_55_A1','P19_55_A2','P19_55_A3','P19_55_A4','P19_55_A5','P19_55_A6','P19_55_A7','P19_55_A8','P19_55_A9','P19_55_A10','P19_55_A11','P19_55_A12','P19_55_A13','P19_55_A14','P19_55_A15','P19_55_A16','P19_55_A17','P19_55_A18','P19_55_A19','P19_55_A20','P19_55_A21','P19_55_A22','P19_55_A23','P19_55_A24','P19_55_A25','P19_55_A26');
$array_num = count($array);
for ($i = 0; $i < $array_num; ++$i){
    $insertaP19 = "INSERT INTO p19 (ids, atributo, valor) SELECT idcodigo7, '".$array[$i]."',".$array[$i]." FROM codigos7 WHERE idcodigo7 >".$RelacionCodigos_ID;
    $mysqli->query($insertaP19);
}
//Eliminamos Vacios
//$drop_vacio2 = "DELETE FROM p19 WHERE valor='' OR valor IS NULL";
//$mysqli->query($drop_vacio2);

//echo "fin";

}

//Insertamos en tabla p19 de la tabla codigos8
if($codigos8_ID >= $RelacionCodigos_ID){
    
$array = array('P19_03_A40','P19_03_A41','P19_03_A42','P19_50_A41','P19_50_A42','P19_51_A40','P19_51_A41','P19_51_A42','P19_52_A40','P19_52_A41','P19_52_A42','P19_50_A44','P19_50_A45','P19_50_A46','P19_50_A47','P19_50_A48','P19_50_A49','P19_50_A85','P19_50_A50','P19_50_A86','P19_51_A44','P19_51_A45','P19_51_A46','P19_51_A47','P19_51_A48','P19_51_A49','P19_51_A50','P19_03_A44','P19_03_A45','P19_03_A46','P19_03_A47','P19_03_A48','P19_03_A49','P19_03_A50','P19_52_A44','P19_52_A45','P19_52_A46','P19_52_A47','P19_52_A48','P19_52_A49','P19_52_A50');
$array_num = count($array);
for ($i = 0; $i < $array_num; ++$i){
    $insertaP19 = "INSERT INTO p19 (ids, atributo, valor) SELECT idcodigo8, '".$array[$i]."',".$array[$i]." FROM codigos8 WHERE idcodigo8 >".$RelacionCodigos_ID;
    $mysqli->query($insertaP19);
}
//Eliminamos Vacios
$drop_vacio2 = "DELETE FROM p19 WHERE valor='' OR valor IS NULL";
$mysqli->query($drop_vacio2);

//echo "fin";

}

//********************************** INICIO INSERCION p21 *************************************************************
//Insertamos en tabla p21 de la tabla codigos4
if($codigos4_ID >= $RelacionCodigos_ID){
        
    $array = array('P21_01M1','P21_01M2','P21_01M3','P21_01M4','P21_01M5','P21_01M6','P21_01M7','P21_01M8','P21_01M9','P21_01M10','P21_01M11','P21_01M12','P21_01M13','P21_01M14','P21_01M15','P21_01M16','P21_01M17','P21_01M18','P21_01M19','P21_01M20','P21_02M1','P21_02M2','P21_02M3','P21_02M4','P21_02M5','P21_02M6','P21_02M7','P21_02M8','P21_02M9','P21_02M10','P21_02M11','P21_02M12','P21_02M13','P21_02M14','P21_02M15','P21_02M16','P21_02M17','P21_02M18','P21_02M19','P21_02M20','P21_02M21','P21_02M22','P21_04M1','P21_04M2','P21_04M3','P21_04M4','P21_04M5','P21_04M6','P21_04M7','P21_04M8','P21_04M9','P21_04M10','P21_04M11','P21_04M12','P21_04M13','P21_04M14','P21_04M15','P21_04M16','P21_04M17','P21_40M1','P21_40M2','P21_40M3','P21_40M4','P21_40M5','P21_40M6','P21_40M7','P21_40M8','P21_40M9','P21_40M10','P21_40M11','P21_40M12','P21_40M13','P21_40M14','P21_40M15','P21_40M16','P21_40M17','P21_40M18','P21_40M19','P21_40M20','P21_40M21','P21_05M1','P21_05M2','P21_05M3','P21_05M4','P21_05M5','P21_05M6','P21_05M7','P21_05M8','P21_05M9','P21_05M10','P21_05M11','P21_05M12','P21_05M13','P21_05M14','P21_05M15','P21_21M1','P21_21M2','P21_21M3','P21_21M4','P21_21M5','P21_21M6','P21_21M7','P21_21M8','P21_21M9','P21_21M10','P21_21M11','P21_21M12','P21_21M13','P21_21M14','P21_21M15','P21_21M16','P21_21M17','P21_21M18','P21_21M19','P21_21M20','P21_21M21','P21_21M22','P21_23M1','P21_23M2','P21_23M3','P21_23M4','P21_23M5','P21_23M6','P21_23M7','P21_23M8','P21_23M9','P21_23M10','P21_23M11','P21_23M12','P21_23M13','P21_23M14','P21_23M15','P21_23M16','P21_23M17','P21_23M18','P21_23M19','P21_07M1','P21_07M2','P21_07M3','P21_07M4','P21_07M5','P21_07M6','P21_07M7','P21_07M8','P21_07M9','P21_46M1','P21_46M2','P21_46M3','P21_46M4','P21_46M5','P21_46M6','P21_46M7','P21_38M1','P21_38M2','P21_38M3','P21_38M4','P21_38M5','P21_38M6','P21_47M1','P21_47M2','P21_47M3','P21_47M4','P21_47M5','P21_47M6','P21_47M7','P21_09M1','P21_09M2','P21_09M3','P21_09M4','P21_09M5','P21_09M6','P21_09M7','P21_09M8','P21_09M9','P21_09M10','P21_09M11','P21_09M12','P21_09M13','P21_09M14','P21_09M15','P21_09M16','P21_09M17','P21_09M18','P21_09M19','P21_09M20','P21_09M21','P21_09M22','P21_03M1','P21_03M2','P21_03M3','P21_03M4','P21_03M5','P21_03M6','P21_03M7','P21_03M8','P21_03M9','P21_03M10','P21_03M11','P21_03M12','P21_03M13','P21_03M14','P21_03M15','P21_03M16','P21_03M17','P21_03M18','P21_03M19','P21_03M20','P21_03M21','P21_03M22','P21_03M23','P21_03M24','P21_03M25','P21_03M26','P21_03M27','P21_03M28','P21_03M29','P21_03M30','P21_03M31','P21_03M32','P21_03M33','P21_03M34','P21_03M35','P21_03M36','P21_03M37','P21_03M38','P21_03M39','P21_03M40','P21_52M1','P21_52M2','P21_52M3','P21_52M4','P21_52M5','P21_52M6','P21_52M7','P21_52M8','P21_52M9','P21_52M10','P21_52M11','P21_52M12','P21_52M13','P21_52M14','P21_52M15','P21_52M16','P21_52M17','P21_52M18','P21_52M19','P21_52M20','P21_52M21','P21_52M22','P21_52M23','P21_52M24','P21_52M25','P21_52M26','P21_52M27','P21_52M28','P21_52M29');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP21 = "INSERT INTO p21 (ids, atributo, valor) SELECT idcodigo4, '".$array[$i]."',".$array[$i]." FROM codigos4 WHERE idcodigo4 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP21);
    }
    //Eliminamos Vacios
    //$drop_vacio2 = "DELETE FROM p21 WHERE valor='' OR valor IS NULL";
    //$mysqli->query($drop_vacio2);

    //echo "fin";

}

//Insertamos en tabla p21 de la tabla codigos5
if($codigos5_ID >= $RelacionCodigos_ID){
        
    $array = array('P21_52M30','P21_52M31','P21_52M32','P21_52M33','P21_52M34','P21_52M35','P21_52M36','P21_52M37','P21_52M38','P21_52M39','P21_52M40','P21_51M1','P21_51M2','P21_51M3','P21_51M4','P21_51M5','P21_51M6','P21_51M7','P21_51M8','P21_51M9','P21_51M10','P21_51M11','P21_51M12','P21_51M13','P21_51M14','P21_51M15','P21_51M16','P21_51M17','P21_51M18','P21_51M19','P21_51M20','P21_51M21','P21_51M22','P21_51M23','P21_51M24','P21_51M25','P21_51M26','P21_51M27','P21_51M28','P21_51M29','P21_51M30','P21_51M31','P21_51M32','P21_51M33','P21_51M34','P21_51M35','P21_51M36','P21_51M37','P21_51M38','P21_51M39','P21_51M40','P21_50M1','P21_50M2','P21_50M3','P21_50M4','P21_50M5','P21_50M6','P21_50M7','P21_50M8','P21_50M9','P21_50M10','P21_50M11','P21_50M12','P21_50M13','P21_50M14','P21_50M15','P21_50M16','P21_50M17','P21_50M18','P21_50M19','P21_50M20','P21_50M21','P21_50M22','P21_50M23','P21_50M24','P21_50M25','P21_50M26','P21_50M27','P21_50M28','P21_50M29','P21_50M30','P21_50M31','P21_50M32','P21_50M33','P21_50M34','P21_50M35','P21_50M36','P21_50M37','P21_50M38','P21_50M39','P21_50M40','P21_50M41','P21_06M1','P21_06M2','P21_06M3','P21_06M4','P21_06M5','P21_06M6','P21_06M7','P21_06M8','P21_06M9','P21_06M10','P21_06M11','P21_06M12','P21_06M13','P21_06M14','P21_06M15','P21_06M16','P21_08M1','P21_08M2','P21_08M3','P21_08M4','P21_08M5','P21_08M6','P21_08M7','P21_08M8','P21_08M9','P21_08M10','P21_08M11','P21_08M12','P21_08M13','P21_08M14','P21_08M15','P21_08M16','P21_08M17','P21_08M18','P21_08M19','P21_08M20','P21_08M21','P21_08M22','P21_10M1','P21_10M2','P21_10M3','P21_10M4','P21_10M5','P21_10M6','P21_10M7','P21_10M8','P21_10M9','P21_10M10','P21_10M11','P21_13M1','P21_13M2','P21_13M3','P21_13M4','P21_13M5','P21_13M6','P21_13M7','P21_13M8','P21_44M1','P21_44M2','P21_44M3','P21_44M4','P21_44M5','P21_44M6','P21_44M7','P21_44M8','P21_44M9','P21_44M10','P21_44M11','P21_44M12','P21_44M13','P21_44M14','P21_44M15','P21_44M16','P21_44M17','P21_44M18','P21_53M1','P21_53M2','P21_53M3','P21_53M4','P21_53M5','P21_53M6','P21_53M7','P21_53M8','P21_53M9','P21_53M10','P21_53M11','P21_53M12','P21_54M1','P21_54M2','P21_54M3','P21_54M4','P21_54M5','P21_48M1','P21_48M2','P21_48M3','P21_48M4','P21_48M5','P21_39M1','P21_39M2','P21_39M3','P21_16M1','P21_16M2','P21_16M3','P21_16M4','P21_16M5','P21_16M6','P21_16M7','P21_16M8','P21_16M9','P21_16M10','P21_16M11','P21_16M12','P21_16M13','P21_16M14','P21_16M15','P21_16M16','P21_16M17','P21_16M18','P21_16M19','P21_16M20','P21_16M21','P21_16M22','P21_16M23','P21_16M24','P21_16M25','P21_16M26','P21_16M27','P21_17M1','P21_17M2','P21_17M3','P21_17M4','P21_17M5','P21_17M6','P21_17M7','P21_17M8','P21_17M9','P21_17M10','P21_17M11','P21_17M12','P21_17M13','P21_17M14','P21_17M15','P21_17M16','P21_17M17','P21_17M18','P21_17M19','P21_17M20','P21_17M21','P21_17M22','P21_17M23','P21_17M24','P21_17M25','P21_17M26','P21_17M27');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP21 = "INSERT INTO p21 (ids, atributo, valor) SELECT idcodigo5, '".$array[$i]."',".$array[$i]." FROM codigos5 WHERE idcodigo5 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP21);
    }
    //Eliminamos Vacios
    //$drop_vacio2 = "DELETE FROM p21 WHERE valor='' OR valor IS NULL";
    //$mysqli->query($drop_vacio2);

    //echo "fin";

}
//Insertamos en tabla p21 de la tabla codigos6
if($codigos6_ID >= $RelacionCodigos_ID){
        
    $array = array('P21_20M1','P21_20M2','P21_20M3','P21_20M4','P21_20M5','P21_20M6','P21_20M7','P21_20M8','P21_20M9','P21_20M10','P21_20M11','P21_20M12','P21_20M13','P21_20M14','P21_20M15','P21_20M16','P21_20M17','P21_20M18','P21_20M19','P21_20M20','P21_20M21','P21_20M22','P21_20M23','P21_20M24','P21_20M25','P21_20M26','P21_20M27','P21_25M1','P21_25M2','P21_25M3','P21_25M4','P21_25M5','P21_25M6','P21_25M7','P21_25M8','P21_25M9','P21_25M10','P21_25M11','P21_25M12','P21_25M13','P21_25M14','P21_25M15','P21_25M16','P21_25M17','P21_25M18','P21_25M19','P21_25M20','P21_25M21','P21_25M22','P21_25M23','P21_25M24','P21_25M25','P21_25M26','P21_25M27','P21_26M1','P21_26M2','P21_26M3','P21_26M4','P21_26M5','P21_26M6','P21_26M7','P21_26M8','P21_26M9','P21_26M10','P21_26M11','P21_26M12','P21_26M13','P21_26M14','P21_26M15','P21_26M16','P21_26M17','P21_26M18','P21_26M19','P21_26M20','P21_26M21','P21_26M22','P21_26M23','P21_26M24','P21_26M25','P21_26M26','P21_26M27','P21_27M1','P21_27M2','P21_27M3','P21_27M4','P21_27M5','P21_27M6','P21_27M7','P21_27M8','P21_27M9','P21_27M10','P21_27M11','P21_27M12','P21_27M13','P21_27M14','P21_27M15','P21_27M16','P21_27M17','P21_27M18','P21_27M19','P21_27M20','P21_27M21','P21_27M22','P21_27M23','P21_27M24','P21_27M25','P21_27M26','P21_27M27','P21_28M1','P21_28M2','P21_28M3','P21_28M4','P21_28M5','P21_28M6','P21_28M7','P21_28M8','P21_28M9','P21_28M10','P21_28M11','P21_28M12','P21_28M13','P21_28M14','P21_28M15','P21_28M16','P21_28M17','P21_28M18','P21_28M19','P21_28M20','P21_28M21','P21_28M22','P21_28M23','P21_28M24','P21_28M25','P21_28M26','P21_28M27','P21_29M1','P21_29M2','P21_29M3','P21_29M4','P21_29M5','P21_29M6','P21_29M7','P21_29M8','P21_29M9','P21_29M10','P21_29M11','P21_29M12','P21_29M13','P21_29M14','P21_29M15','P21_29M16','P21_29M17','P21_29M18','P21_29M19','P21_29M20','P21_29M21','P21_29M22','P21_29M23','P21_29M24','P21_29M25','P21_29M26','P21_29M27','P21_30M1','P21_30M2','P21_30M3','P21_30M4','P21_30M5','P21_30M6','P21_30M7','P21_30M8','P21_30M9','P21_30M10','P21_30M11','P21_30M12','P21_30M13','P21_30M14','P21_30M15','P21_30M16','P21_30M17','P21_30M18','P21_30M19','P21_30M20','P21_30M21','P21_30M22','P21_30M23','P21_30M24','P21_30M25','P21_30M26','P21_30M27','P21_31M1','P21_31M2','P21_31M3','P21_31M4','P21_31M5','P21_31M6','P21_31M7','P21_31M8','P21_31M9','P21_31M10','P21_31M11','P21_31M12','P21_31M13','P21_31M14','P21_31M15','P21_31M16','P21_31M17','P21_31M18','P21_31M19','P21_31M20','P21_31M21','P21_31M22','P21_31M23','P21_31M24','P21_31M25','P21_31M26','P21_31M27','P21_33M1','P21_33M2','P21_33M3','P21_33M4','P21_33M5','P21_33M6','P21_33M7','P21_33M8','P21_33M9','P21_33M10','P21_33M11','P21_33M12','P21_33M13','P21_33M14','P21_33M15','P21_33M16','P21_33M17','P21_33M18','P21_33M19','P21_33M20','P21_33M21','P21_33M22','P21_33M23','P21_33M24','P21_33M25','P21_33M26','P21_33M27','P21_41M1','P21_41M2','P21_41M3','P21_41M4','P21_41M5','P21_41M6','P21_41M7','P21_41M8','P21_41M9','P21_41M10','P21_41M11','P21_41M12','P21_41M13');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP21 = "INSERT INTO p21 (ids, atributo, valor) SELECT idcodigo6, '".$array[$i]."',".$array[$i]." FROM codigos6 WHERE idcodigo6 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP21);
    }
    //Eliminamos Vacios
    //$drop_vacio2 = "DELETE FROM p21 WHERE valor='' OR valor IS NULL";
    //$mysqli->query($drop_vacio2);

    //echo "fin";

}

//Insertamos en tabla p21 de la tabla codigos7
if($codigos7_ID >= $RelacionCodigos_ID){
        
    $array = array('P21_41M14','P21_41M15','P21_41M16','P21_41M17','P21_41M18','P21_41M19','P21_41M20','P21_41M21','P21_41M22','P21_41M23','P21_41M24','P21_41M25','P21_41M26','P21_41M27','P21_49M1','P21_49M2','P21_49M3','P21_49M4','P21_49M5','P21_49M6','P21_49M7','P21_49M8','P21_49M9','P21_49M10','P21_49M11','P21_49M12','P21_49M13','P21_49M14','P21_49M15','P21_49M16','P21_49M17','P21_49M18','P21_49M19','P21_49M20','P21_49M21','P21_49M22','P21_49M23','P21_49M24','P21_49M25','P21_49M26','P21_49M27','P21_55M1','P21_55M2','P21_55M3','P21_55M4','P21_55M5','P21_55M6','P21_55M7','P21_55M8','P21_55M9','P21_55M10','P21_55M11','P21_55M12','P21_55M13','P21_55M14','P21_55M15','P21_55M16','P21_55M17','P21_55M18','P21_55M19','P21_55M20','P21_55M21','P21_55M22','P21_55M23','P21_55M24','P21_55M25','P21_55M26','P21_55M27');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP21 = "INSERT INTO p21 (ids, atributo, valor) SELECT idcodigo7, '".$array[$i]."',".$array[$i]." FROM codigos7 WHERE idcodigo7 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP21);
    }
    //Eliminamos Vacios
    $drop_vacio2 = "DELETE FROM p21 WHERE valor='' OR valor IS NULL";
    $mysqli->query($drop_vacio2);

    //echo "fin";

}

//********************************** INICIO INSERCION p24 *************************************************************

//Insertamos en tabla p24 de la tabla codigos7
if($codigos7_ID >= $RelacionCodigos_ID){
        
    $array = array('P24_A1','P24_A2','P24_A3','P24_A4','P24_A5','P24_A6','P24_A7','P24_A8','P24_A9','P24_A10','P24_A11','P24_A12','P24_A13','P24_A14','P24_A15','P24_A16','P24_A17','P24_A18','P24_A19','P24_A20','P24_A21','P24_A22','P24_A23','P24_A24','P24_A25','P24_A26','P24_A27','P24_A28','P24_A29','P24_A30','P24_A31','P24_A32','P24_A33','P24_A34','P24_A35','P24_A36','P24_A37','P24_A38','P24_A39','P24_A40','P24_A41','P24_A42','P24_A43','P24_A44','P24_A45','P24_A46','P24_A47','P24_A48','P24_A49','P24_A50','P24_A51','P24_A52','P24_A53','P24_A54','P24_A55','P24_A56');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP24 = "INSERT INTO p24 (ids, atributo, valor) SELECT idcodigo7, '".$array[$i]."',".$array[$i]." FROM codigos7 WHERE idcodigo7 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP24);
    }
    //Eliminamos Vacios
    $drop_vacio2 = "DELETE FROM p24 WHERE valor='' OR valor IS NULL";
    $mysqli->query($drop_vacio2);

    //echo "fin";

}

//********************************** INICIO INSERCION p25 *************************************************************

//Insertamos en tabla p25 de la tabla codigos7
if($codigos7_ID >= $RelacionCodigos_ID){
        
    $array = array('P25_A1M1','P25_A1M2','P25_A1M3','P25_A1M4','P25_A1M5','P25_A1M6','P25_A1M7','P25_A1M8','P25_A1M9','P25_A1M10','P25_A1M11','P25_A1M12','P25_A1M13','P25_A1M14','P25_A1M15','P25_A1M16','P25_A1M17','P25_A1M18','P25_A1M19','P25_A1M20','P25_A1M21','P25_A1M22','P25_A1M23','P25_A1M24','P25_A2M1','P25_A2M2','P25_A2M3','P25_A2M4','P25_A2M5','P25_A2M6','P25_A2M7','P25_A2M8','P25_A2M9','P25_A2M10','P25_A2M11','P25_A2M12','P25_A2M13','P25_A2M14','P25_A2M15','P25_A2M16','P25_A2M17','P25_A2M18','P25_A2M19','P25_A2M20','P25_A2M21','P25_A2M22','P25_A2M23','P25_A2M24','P25_A3M1','P25_A3M2','P25_A3M3','P25_A3M4','P25_A3M5','P25_A3M6','P25_A3M7','P25_A3M8','P25_A3M9','P25_A3M10','P25_A3M11','P25_A3M12','P25_A3M13','P25_A3M14','P25_A3M15','P25_A3M16','P25_A3M17','P25_A3M18','P25_A3M19','P25_A3M20','P25_A3M21','P25_A3M22','P25_A3M23','P25_A3M24','P25_A4M1','P25_A4M2','P25_A4M3','P25_A4M4','P25_A4M5','P25_A4M6','P25_A4M7','P25_A4M8','P25_A4M9','P25_A4M10','P25_A4M11','P25_A4M12','P25_A4M13','P25_A4M14','P25_A4M15','P25_A4M16','P25_A4M17','P25_A4M18','P25_A4M19','P25_A4M20','P25_A4M21','P25_A4M22','P25_A4M23','P25_A4M24','P25_A5M1','P25_A5M2','P25_A5M3','P25_A5M4','P25_A5M5','P25_A5M6','P25_A5M7','P25_A5M8','P25_A5M9','P25_A5M10','P25_A5M11','P25_A5M12','P25_A5M13','P25_A5M14','P25_A5M15','P25_A5M16','P25_A5M17','P25_A5M18','P25_A5M19','P25_A5M20','P25_A5M21','P25_A5M22','P25_A5M23','P25_A5M24','P25_A6M1','P25_A6M2','P25_A6M3','P25_A6M4','P25_A6M5','P25_A6M6','P25_A6M7','P25_A6M8','P25_A6M9','P25_A6M10','P25_A6M11','P25_A6M12','P25_A6M13','P25_A6M14','P25_A6M15','P25_A6M16','P25_A6M17','P25_A6M18','P25_A6M19','P25_A6M20','P25_A6M21','P25_A6M22','P25_A6M23','P25_A6M24','P25_A7M1','P25_A7M2','P25_A7M3','P25_A7M4','P25_A7M5','P25_A7M6','P25_A7M7','P25_A7M8','P25_A7M9','P25_A7M10','P25_A7M11','P25_A7M12','P25_A7M13','P25_A7M14','P25_A7M15','P25_A7M16','P25_A7M17','P25_A7M18','P25_A7M19','P25_A7M20','P25_A7M21','P25_A7M22','P25_A7M23','P25_A7M24','P25_A8M1','P25_A8M2','P25_A8M3','P25_A8M4','P25_A8M5','P25_A8M6','P25_A8M7','P25_A8M8','P25_A8M9','P25_A8M10','P25_A8M11','P25_A8M12','P25_A8M13','P25_A8M14','P25_A8M15','P25_A8M16','P25_A8M17','P25_A8M18','P25_A8M19','P25_A8M20','P25_A8M21','P25_A8M22','P25_A8M23','P25_A8M24','P25_A9M1','P25_A9M2','P25_A9M3','P25_A9M4','P25_A9M5','P25_A9M6','P25_A9M7','P25_A9M8','P25_A9M9','P25_A9M10','P25_A9M11','P25_A9M12','P25_A9M13','P25_A9M14','P25_A9M15','P25_A9M16','P25_A9M17','P25_A9M18','P25_A9M19','P25_A9M20','P25_A9M21','P25_A9M22','P25_A9M23','P25_A9M24','P25_A10M1','P25_A10M2','P25_A10M3','P25_A10M4','P25_A10M5','P25_A10M6','P25_A10M7','P25_A10M8','P25_A10M9','P25_A10M10','P25_A10M11','P25_A10M12','P25_A10M13','P25_A10M14','P25_A10M15','P25_A10M16','P25_A10M17','P25_A10M18','P25_A10M19','P25_A10M20','P25_A10M21','P25_A10M22','P25_A10M23','P25_A10M24','P25_A11M1','P25_A11M2','P25_A11M3','P25_A11M4','P25_A11M5','P25_A11M6','P25_A11M7','P25_A11M8','P25_A11M9','P25_A11M10','P25_A11M11','P25_A11M12','P25_A11M13','P25_A11M14','P25_A11M15','P25_A11M16','P25_A11M17','P25_A11M18','P25_A11M19','P25_A11M20','P25_A11M21','P25_A11M22','P25_A11M23','P25_A11M24','P25_A12M1','P25_A12M2','P25_A12M3','P25_A12M4','P25_A12M5','P25_A12M6','P25_A12M7','P25_A12M8','P25_A12M9','P25_A12M10','P25_A12M11','P25_A12M12','P25_A12M13','P25_A12M14','P25_A12M15','P25_A12M16','P25_A12M17','P25_A12M18','P25_A12M19','P25_A12M20','P25_A12M21','P25_A12M22','P25_A12M23','P25_A12M24','P25_A13M1','P25_A13M2','P25_A13M3','P25_A13M4','P25_A13M5','P25_A13M6','P25_A13M7','P25_A13M8','P25_A13M9','P25_A13M10','P25_A13M11','P25_A13M12','P25_A13M13','P25_A13M14','P25_A13M15','P25_A13M16','P25_A13M17','P25_A13M18','P25_A13M19','P25_A13M20','P25_A13M21','P25_A13M22','P25_A13M23','P25_A13M24','P25_A14M1','P25_A14M2','P25_A14M3','P25_A14M4','P25_A14M5','P25_A14M6','P25_A14M7','P25_A14M8','P25_A14M9','P25_A14M10','P25_A14M11','P25_A14M12','P25_A14M13','P25_A14M14','P25_A14M15','P25_A14M16','P25_A14M17','P25_A14M18','P25_A14M19','P25_A14M20','P25_A14M21','P25_A14M22','P25_A14M23','P25_A14M24','P25_A15M1','P25_A15M2','P25_A15M3','P25_A15M4','P25_A15M5','P25_A15M6','P25_A15M7','P25_A15M8','P25_A15M9','P25_A15M10','P25_A15M11','P25_A15M12','P25_A15M13','P25_A15M14','P25_A15M15','P25_A15M16','P25_A15M17','P25_A15M18','P25_A15M19','P25_A15M20','P25_A15M21','P25_A15M22','P25_A15M23','P25_A15M24','P25_A16M1','P25_A16M2','P25_A16M3','P25_A16M4','P25_A16M5','P25_A16M6','P25_A16M7','P25_A16M8','P25_A16M9','P25_A16M10','P25_A16M11','P25_A16M12','P25_A16M13','P25_A16M14','P25_A16M15','P25_A16M16','P25_A16M17','P25_A16M18','P25_A16M19','P25_A16M20','P25_A16M21','P25_A16M22','P25_A16M23','P25_A16M24','P25_A17M1','P25_A17M2','P25_A17M3','P25_A17M4','P25_A17M5','P25_A17M6','P25_A17M7','P25_A17M8','P25_A17M9','P25_A17M10','P25_A17M11','P25_A17M12','P25_A17M13','P25_A17M14','P25_A17M15','P25_A17M16','P25_A17M17','P25_A17M18','P25_A17M19','P25_A17M20','P25_A17M21','P25_A17M22','P25_A17M23','P25_A17M24','P25_A18M1','P25_A18M2','P25_A18M3','P25_A18M4','P25_A18M5','P25_A18M6','P25_A18M7','P25_A18M8','P25_A18M9','P25_A18M10','P25_A18M11','P25_A18M12','P25_A18M13','P25_A18M14','P25_A18M15','P25_A18M16','P25_A18M17','P25_A18M18','P25_A18M19','P25_A18M20','P25_A18M21','P25_A18M22','P25_A18M23','P25_A18M24','P25_A19M1','P25_A19M2','P25_A19M3','P25_A19M4','P25_A19M5','P25_A19M6','P25_A19M7','P25_A19M8','P25_A19M9','P25_A19M10','P25_A19M11','P25_A19M12','P25_A19M13','P25_A19M14','P25_A19M15','P25_A19M16','P25_A19M17','P25_A19M18','P25_A19M19','P25_A19M20','P25_A19M21','P25_A19M22','P25_A19M23','P25_A19M24','P25_A20M1','P25_A20M2','P25_A20M3','P25_A20M4','P25_A20M5','P25_A20M6','P25_A20M7','P25_A20M8','P25_A20M9','P25_A20M10','P25_A20M11','P25_A20M12','P25_A20M13','P25_A20M14','P25_A20M15','P25_A20M16','P25_A20M17','P25_A20M18','P25_A20M19','P25_A20M20','P25_A20M21','P25_A20M22','P25_A20M23','P25_A20M24');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP24 = "INSERT INTO p25 (ids, atributo, valor) SELECT idcodigo7, '".$array[$i]."',".$array[$i]." FROM codigos7 WHERE idcodigo7 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP24);
    }
    //Eliminamos Vacios
    //$drop_vacio2 = "DELETE FROM p25 WHERE valor='' OR valor IS NULL";
    //$mysqli->query($drop_vacio2);

    //echo "fin";

}
//Insertamos en tabla p25 de la tabla codigos8
if($codigos7_ID >= $RelacionCodigos_ID){
        
    $array = array('P25_A21M1','P25_A21M2','P25_A21M3','P25_A21M4','P25_A21M5','P25_A21M6','P25_A21M7','P25_A21M8','P25_A21M9','P25_A21M10','P25_A21M11','P25_A21M12','P25_A21M13','P25_A21M14','P25_A21M15','P25_A21M16','P25_A21M17','P25_A21M18','P25_A21M19','P25_A21M20','P25_A21M21','P25_A21M22','P25_A21M23','P25_A21M24','P25_A22M1','P25_A22M2','P25_A22M3','P25_A22M4','P25_A22M5','P25_A22M6','P25_A22M7','P25_A22M8','P25_A22M9','P25_A22M10','P25_A22M11','P25_A22M12','P25_A22M13','P25_A22M14','P25_A22M15','P25_A22M16','P25_A22M17','P25_A22M18','P25_A22M19','P25_A22M20','P25_A22M21','P25_A22M22','P25_A22M23','P25_A22M24','P25_A23M1','P25_A23M2','P25_A23M3','P25_A23M4','P25_A23M5','P25_A23M6','P25_A23M7','P25_A23M8','P25_A23M9','P25_A23M10','P25_A23M11','P25_A23M12','P25_A23M13','P25_A23M14','P25_A23M15','P25_A23M16','P25_A23M17','P25_A23M18','P25_A23M19','P25_A23M20','P25_A23M21','P25_A23M22','P25_A23M23','P25_A23M24','P25_A24M1','P25_A24M2','P25_A24M3','P25_A24M4','P25_A24M5','P25_A24M6','P25_A24M7','P25_A24M8','P25_A24M9','P25_A24M10','P25_A24M11','P25_A24M12','P25_A24M13','P25_A24M14','P25_A24M15','P25_A24M16','P25_A24M17','P25_A24M18','P25_A24M19','P25_A24M20','P25_A24M21','P25_A24M22','P25_A24M23','P25_A24M24','P25_A25M1','P25_A25M2','P25_A25M3','P25_A25M4','P25_A25M5','P25_A25M6','P25_A25M7','P25_A25M8','P25_A25M9','P25_A25M10','P25_A25M11','P25_A25M12','P25_A25M13','P25_A25M14','P25_A25M15','P25_A25M16','P25_A25M17','P25_A25M18','P25_A25M19','P25_A25M20','P25_A25M21','P25_A25M22','P25_A25M23','P25_A25M24','P25_A26M1','P25_A26M2','P25_A26M3','P25_A26M4','P25_A26M5','P25_A26M6','P25_A26M7','P25_A26M8','P25_A26M9','P25_A26M10','P25_A26M11','P25_A26M12','P25_A26M13','P25_A26M14','P25_A26M15','P25_A26M16','P25_A26M17','P25_A26M18','P25_A26M19','P25_A26M20','P25_A26M21','P25_A26M22','P25_A26M23','P25_A26M24','P25_A27M1','P25_A27M2','P25_A27M3','P25_A27M4','P25_A27M5','P25_A27M6','P25_A27M7','P25_A27M8','P25_A27M9','P25_A27M10','P25_A27M11','P25_A27M12','P25_A27M13','P25_A27M14','P25_A27M15','P25_A27M16','P25_A27M17','P25_A27M18','P25_A27M19','P25_A27M20','P25_A27M21','P25_A27M22','P25_A27M23','P25_A27M24','P25_A28M1','P25_A28M2','P25_A28M3','P25_A28M4','P25_A28M5','P25_A28M6','P25_A28M7','P25_A28M8','P25_A28M9','P25_A28M10','P25_A28M11','P25_A28M12','P25_A28M13','P25_A28M14','P25_A28M15','P25_A28M16','P25_A28M17','P25_A28M18','P25_A28M19','P25_A28M20','P25_A28M21','P25_A28M22','P25_A28M23','P25_A28M24','P25_A29M1','P25_A29M2','P25_A29M3','P25_A29M4','P25_A29M5','P25_A29M6','P25_A29M7','P25_A29M8','P25_A29M9','P25_A29M10','P25_A29M11','P25_A29M12','P25_A29M13','P25_A29M14','P25_A29M15','P25_A29M16','P25_A29M17','P25_A29M18','P25_A29M19','P25_A29M20','P25_A29M21','P25_A29M22','P25_A29M23','P25_A29M24','P25_A30M1','P25_A30M2','P25_A30M3','P25_A30M4','P25_A30M5','P25_A30M6','P25_A30M7','P25_A30M8','P25_A30M9','P25_A30M10','P25_A30M11','P25_A30M12','P25_A30M13','P25_A30M14','P25_A30M15','P25_A30M16','P25_A30M17','P25_A30M18','P25_A30M19','P25_A30M20','P25_A30M21','P25_A30M22','P25_A30M23','P25_A30M24','P25_A31M1','P25_A31M2','P25_A31M3','P25_A31M4','P25_A31M5','P25_A31M6','P25_A31M7','P25_A31M8','P25_A31M9','P25_A31M10','P25_A31M11','P25_A31M12','P25_A31M13','P25_A31M14','P25_A31M15','P25_A31M16','P25_A31M17','P25_A31M18','P25_A31M19','P25_A31M20','P25_A31M21','P25_A31M22','P25_A31M23','P25_A31M24','P25_A32M1','P25_A32M2','P25_A32M3','P25_A32M4','P25_A32M5','P25_A32M6','P25_A32M7','P25_A32M8','P25_A32M9','P25_A32M10','P25_A32M11','P25_A32M12','P25_A32M13','P25_A32M14','P25_A32M15','P25_A32M16','P25_A32M17','P25_A32M18','P25_A32M19','P25_A32M20','P25_A32M21','P25_A32M22','P25_A32M23','P25_A32M24','P25_A33M1','P25_A33M2','P25_A33M3','P25_A33M4','P25_A33M5','P25_A33M6','P25_A33M7','P25_A33M8','P25_A33M9','P25_A33M10','P25_A33M11','P25_A33M12','P25_A33M13','P25_A33M14','P25_A33M15','P25_A33M16','P25_A33M17','P25_A33M18','P25_A33M19','P25_A33M20','P25_A33M21','P25_A33M22','P25_A33M23','P25_A33M24','P25_A34M1','P25_A34M2','P25_A34M3','P25_A34M4','P25_A34M5','P25_A34M6','P25_A34M7','P25_A34M8','P25_A34M9','P25_A34M10','P25_A34M11','P25_A34M12','P25_A34M13','P25_A34M14','P25_A34M15','P25_A34M16','P25_A34M17','P25_A34M18','P25_A34M19','P25_A34M20','P25_A34M21','P25_A34M22','P25_A34M23','P25_A34M24','P25_A35M1','P25_A35M2','P25_A35M3','P25_A35M4','P25_A35M5','P25_A35M6','P25_A35M7','P25_A35M8','P25_A35M9','P25_A35M10','P25_A35M11','P25_A35M12','P25_A35M13','P25_A35M14','P25_A35M15','P25_A35M16','P25_A35M17','P25_A35M18','P25_A35M19','P25_A35M20','P25_A35M21','P25_A35M22','P25_A35M23','P25_A35M24','P25_A36M1','P25_A36M2','P25_A36M3','P25_A36M4','P25_A36M5','P25_A36M6','P25_A36M7','P25_A36M8','P25_A36M9','P25_A36M10','P25_A36M11','P25_A36M12','P25_A36M13','P25_A36M14','P25_A36M15','P25_A36M16','P25_A36M17','P25_A36M18','P25_A36M19','P25_A36M20','P25_A36M21','P25_A36M22','P25_A36M23','P25_A36M24','P25_A37M1','P25_A37M2','P25_A37M3','P25_A37M4','P25_A37M5','P25_A37M6','P25_A37M7','P25_A37M8','P25_A37M9','P25_A37M10','P25_A37M11','P25_A37M12','P25_A37M13','P25_A37M14','P25_A37M15','P25_A37M16','P25_A37M17','P25_A37M18','P25_A37M19','P25_A37M20','P25_A37M21','P25_A37M22','P25_A37M23','P25_A37M24','P25_A38M1','P25_A38M2','P25_A38M3','P25_A38M4','P25_A38M5','P25_A38M6','P25_A38M7','P25_A38M8','P25_A38M9','P25_A38M10','P25_A38M11','P25_A38M12','P25_A38M13','P25_A38M14','P25_A38M15','P25_A38M16','P25_A38M17','P25_A38M18','P25_A38M19','P25_A38M20','P25_A38M21','P25_A38M22','P25_A38M23','P25_A38M24','P25_A39M1','P25_A39M2','P25_A39M3','P25_A39M4','P25_A39M5','P25_A39M6','P25_A39M7','P25_A39M8','P25_A39M9','P25_A39M10','P25_A39M11','P25_A39M12','P25_A39M13','P25_A39M14','P25_A39M15','P25_A39M16','P25_A39M17','P25_A39M18','P25_A39M19','P25_A39M20','P25_A39M21','P25_A39M22','P25_A39M23','P25_A39M24','P25_A40M1','P25_A40M2','P25_A40M3','P25_A40M4','P25_A40M5','P25_A40M6','P25_A40M7','P25_A40M8','P25_A40M9','P25_A40M10','P25_A40M11','P25_A40M12','P25_A40M13','P25_A40M14','P25_A40M15','P25_A40M16','P25_A40M17','P25_A40M18','P25_A40M19','P25_A40M20','P25_A40M21','P25_A40M22','P25_A40M23','P25_A40M24','P25_A41M1','P25_A41M2','P25_A41M3','P25_A41M4','P25_A41M5','P25_A41M6','P25_A41M7','P25_A41M8','P25_A41M9','P25_A41M10','P25_A41M11','P25_A41M12','P25_A41M13','P25_A41M14','P25_A41M15','P25_A41M16','P25_A41M17','P25_A41M18','P25_A41M19','P25_A41M20','P25_A41M21','P25_A41M22','P25_A41M23','P25_A41M24','P25_A42M1','P25_A42M2','P25_A42M3','P25_A42M4','P25_A42M5','P25_A42M6','P25_A42M7','P25_A42M8','P25_A42M9','P25_A42M10','P25_A42M11','P25_A42M12','P25_A42M13','P25_A42M14','P25_A42M15','P25_A42M16','P25_A42M17','P25_A42M18','P25_A42M19','P25_A42M20','P25_A42M21','P25_A42M22','P25_A42M23','P25_A42M24','P25_A43M1','P25_A43M2','P25_A43M3','P25_A43M4','P25_A43M5','P25_A43M6','P25_A43M7','P25_A43M8','P25_A43M9','P25_A43M10','P25_A43M11','P25_A43M12','P25_A43M13','P25_A43M14','P25_A43M15','P25_A43M16','P25_A43M17','P25_A43M18','P25_A43M19','P25_A43M20','P25_A43M21','P25_A43M22','P25_A43M23','P25_A43M24','P25_A44M1','P25_A44M2','P25_A44M3','P25_A44M4','P25_A44M5','P25_A44M6','P25_A44M7','P25_A44M8','P25_A44M9','P25_A44M10','P25_A44M11','P25_A44M12','P25_A44M13','P25_A44M14','P25_A44M15','P25_A44M16','P25_A44M17','P25_A44M18','P25_A44M19','P25_A44M20','P25_A44M21','P25_A44M22','P25_A44M23','P25_A44M24','P25_A45M1','P25_A45M2','P25_A45M3','P25_A45M4','P25_A45M5','P25_A45M6','P25_A45M7','P25_A45M8','P25_A45M9','P25_A45M10','P25_A45M11','P25_A45M12','P25_A45M13','P25_A45M14','P25_A45M15','P25_A45M16','P25_A45M17','P25_A45M18','P25_A45M19','P25_A45M20','P25_A45M21','P25_A45M22','P25_A45M23','P25_A45M24','P25_A46M1','P25_A46M2','P25_A46M3','P25_A46M4','P25_A46M5','P25_A46M6','P25_A46M7','P25_A46M8','P25_A46M9','P25_A46M10','P25_A46M11','P25_A46M12','P25_A46M13','P25_A46M14','P25_A46M15','P25_A46M16','P25_A46M17','P25_A46M18','P25_A46M19','P25_A46M20','P25_A46M21','P25_A46M22','P25_A46M23','P25_A46M24','P25_A47M1','P25_A47M2','P25_A47M3','P25_A47M4','P25_A47M5','P25_A47M6','P25_A47M7','P25_A47M8','P25_A47M9','P25_A47M10','P25_A47M11','P25_A47M12','P25_A47M13','P25_A47M14','P25_A47M15','P25_A47M16','P25_A47M17','P25_A47M18','P25_A47M19','P25_A47M20','P25_A47M21','P25_A47M22','P25_A47M23','P25_A47M24','P25_A48M1','P25_A48M2','P25_A48M3','P25_A48M4','P25_A48M5','P25_A48M6','P25_A48M7','P25_A48M8','P25_A48M9','P25_A48M10','P25_A48M11','P25_A48M12','P25_A48M13','P25_A48M14','P25_A48M15','P25_A48M16','P25_A48M17','P25_A48M18','P25_A48M19','P25_A48M20','P25_A48M21','P25_A48M22','P25_A48M23','P25_A48M24','P25_A49M1','P25_A49M2','P25_A49M3','P25_A49M4','P25_A49M5','P25_A49M6','P25_A49M7','P25_A49M8','P25_A49M9','P25_A49M10','P25_A49M11','P25_A49M12','P25_A49M13','P25_A49M14','P25_A49M15','P25_A49M16','P25_A49M17','P25_A49M18','P25_A49M19','P25_A49M20','P25_A49M21','P25_A49M22','P25_A49M23','P25_A49M24','P25_A50M1','P25_A50M2','P25_A50M3','P25_A50M4','P25_A50M5','P25_A50M6','P25_A50M7','P25_A50M8','P25_A50M9','P25_A50M10','P25_A50M11','P25_A50M12','P25_A50M13','P25_A50M14','P25_A50M15','P25_A50M16','P25_A50M17','P25_A50M18','P25_A50M19','P25_A50M20','P25_A50M21','P25_A50M22','P25_A50M23','P25_A50M24','P25_A51M1','P25_A51M2','P25_A51M3','P25_A51M4','P25_A51M5','P25_A51M6','P25_A51M7','P25_A51M8','P25_A51M9','P25_A51M10','P25_A51M11','P25_A51M12','P25_A51M13','P25_A51M14','P25_A51M15','P25_A51M16','P25_A51M17','P25_A51M18','P25_A51M19','P25_A51M20','P25_A51M21','P25_A51M22','P25_A51M23','P25_A51M24','P25_A52M1','P25_A52M2','P25_A52M3','P25_A52M4','P25_A52M5','P25_A52M6','P25_A52M7','P25_A52M8','P25_A52M9','P25_A52M10','P25_A52M11','P25_A52M12','P25_A52M13','P25_A52M14','P25_A52M15','P25_A52M16','P25_A52M17','P25_A52M18','P25_A52M19','P25_A52M20','P25_A52M21','P25_A52M22','P25_A52M23','P25_A52M24','P25_A53M1','P25_A53M2','P25_A53M3','P25_A53M4','P25_A53M5','P25_A53M6','P25_A53M7','P25_A53M8','P25_A53M9','P25_A53M10','P25_A53M11','P25_A53M12','P25_A53M13','P25_A53M14','P25_A53M15','P25_A53M16','P25_A53M17','P25_A53M18','P25_A53M19','P25_A53M20','P25_A53M21','P25_A53M22',
    'P25_A53M23','P25_A53M24','P25_A54M1','P25_A54M2','P25_A54M3','P25_A54M4','P25_A54M5','P25_A54M6','P25_A54M7','P25_A54M8','P25_A54M9','P25_A54M10','P25_A54M11','P25_A54M12','P25_A54M13','P25_A54M14','P25_A54M15','P25_A54M16','P25_A54M17','P25_A54M18','P25_A54M19','P25_A54M20','P25_A54M21','P25_A54M22','P25_A54M23','P25_A54M24','P25_A55M1','P25_A55M2','P25_A55M3','P25_A55M4','P25_A55M5','P25_A55M6','P25_A55M7','P25_A55M8','P25_A55M9','P25_A55M10','P25_A55M11','P25_A55M12','P25_A55M13','P25_A55M14','P25_A55M15','P25_A55M16','P25_A55M17','P25_A55M18','P25_A55M19','P25_A55M20','P25_A55M21','P25_A55M22','P25_A55M23','P25_A55M24','P25_A56M1','P25_A56M2','P25_A56M3','P25_A56M4','P25_A56M5','P25_A56M6','P25_A56M7','P25_A56M8','P25_A56M9','P25_A56M10','P25_A56M11','P25_A56M12','P25_A56M13','P25_A56M14','P25_A56M15','P25_A56M16','P25_A56M17','P25_A56M18','P25_A56M19','P25_A56M20','P25_A56M21','P25_A56M22','P25_A56M23','P25_A56M24');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP24 = "INSERT INTO p25 (ids, atributo, valor) SELECT idcodigo8, '".$array[$i]."',".$array[$i]." FROM codigos8 WHERE idcodigo8 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP24);
    }
    //Eliminamos Vacios
    $drop_vacio2 = "DELETE FROM p25 WHERE valor='' OR valor IS NULL";
    $mysqli->query($drop_vacio2);

    //echo "fin";

}

//********************************** INICIO INSERCION p1516 *************************************************************
//Insertamos en tabla p1516 de la tabla codigos2
if($codigos2_ID >= $RelacionCodigos_ID){
        
    $array = array('P15_A1','P15_A2','P15_A3','P15_A4','P15_A5','P15_A6','P15_A7','P15_A8','P15_A9','P15_A10','P15_A11','P15_A12','P15_A13','P15_A14','P15_A15','P15_A16','P15_A17','P15_A18','P15_A19','P15_A20','P15_A21','P15_A22','P15_A23','P15_A24','P15_A25','P15_A26','P15_A27','P15_A28','P15_A29','P15_A30','P15_A31','P15_A32','P15_A33','P15_A34','P15_A35','P15_A36','P15_A37','P15_A38','P15_A39','P15_A40','P15_A41','P15_A42','P15_A43','P15_A44','P15_A45','P15_A46','P15_A47','P15_A48','P15_A49','P15_A50','P15_A51','P15_A52','P15_A53','P15_A54','P15_A55','P15_A56','P16_A1','P16_A2','P16_A3','P16_A4','P16_A5','P16_A6','P16_A7','P16_A8','P16_A9','P16_A10','P16_A11','P16_A12','P16_A13','P16_A14','P16_A15','P16_A16','P16_A17','P16_A18','P16_A19','P16_A20','P16_A21','P16_A22','P16_A23','P16_A24','P16_A25','P16_A26','P16_A27','P16_A28','P16_A29','P16_A30','P16_A31','P16_A32','P16_A33','P16_A34','P16_A35','P16_A36','P16_A37','P16_A38','P16_A39','P16_A40','P16_A41','P16_A42','P16_A43','P16_A44','P16_A45','P16_A46','P16_A47','P16_A48','P16_A49','P16_A50','P16_A51','P16_A52','P16_A53','P16_A54','P16_A55','P16_A56');
    $array_num = count($array);
    for ($i = 0; $i < $array_num; ++$i){
        $insertaP1516 = "INSERT INTO p1516 (ids, atributo, valor) SELECT idcodigo2, '".$array[$i]."',".$array[$i]." FROM codigos2 WHERE idcodigo2 >".$RelacionCodigos_ID;
        $mysqli->query($insertaP1516);
    }
    //Eliminamos Vacios
    $drop_vacio2 = "DELETE FROM p1516 WHERE valor='' OR valor IS NULL";
    $mysqli->query($drop_vacio2);

    //echo "fin";

}
	


?>