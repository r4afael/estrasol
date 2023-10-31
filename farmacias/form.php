<?php


if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
	

	//$gps = $_POST['gps'];
	$gps = explode(",", $_POST['gps']);
	$lat=$gps[0];
	$lat = str_replace(' ', '', $lat);
	$lon=$gps[1];
	$lon = str_replace(' ', '', $lon);
	if (empty($lat) || empty($lon)) {
        echo json_encode(array('error' => true, 'tipo' => "1"));
    }else if (!is_numeric($lat) || !is_numeric($lon)) {
        echo json_encode(array('error' => true, 'tipo' => "2"));
    }else{
        $url='https://maps.googleapis.com/maps/api/geocode/json?latlng='.$lat.','.$lon.'&location_type=ROOFTOP&result_type=street_address&key=AIzaSyBo6II7741K993JiG5r3saP8gw960OTTZk';
        
        //$url='https://pricepointmonitor.com/farmacias/archivo.json';
        
        $json = file_get_contents($url);
        $obj = json_decode($json);
        $obj2 = $obj ->results;
        $obj3 = $obj2[0];
        $obj4 = $obj3->address_components;
        $objnumero = $obj4[0];
        $objcalle = $obj4[1];
        $objcolonia= $obj4[2];
        $objmunicipio= $obj4[3];
        $objestado= $obj4[4];
        $objcp= $obj4[6];
        $objpais= $obj4[5];
       
        try {
            $numero=$objnumero->long_name;
        } catch (Exception $e) {
            $numero="";
        }
        try {
            $calle=$objcalle->long_name;
        } catch (Exception $e) {
            $calle="";
        }
        try {
            $colonia=$objcolonia->long_name;
        } catch (Exception $e) {
            $colonia="";
        }
        try {
            $municipio=$objmunicipio->long_name;
        } catch (Exception $e) {
            $municipio="";
        }
        try {
            $estado=$objestado->long_name;
        } catch (Exception $e) {
            $estado="";
        }
        try {
            $cp=$objcp->long_name;
        } catch (Exception $e) {
            $cp="";
        }
        try {
            $pais=$objpais->long_name;
        } catch (Exception $e) {
            $pais="";
        }
        if (empty($calle)){
            echo json_encode(array('error' => true, 'tipo' => "3"));
        }else{
            echo json_encode(array('error' => false, 'numero' => $numero, 'calle' => $calle, 'colonia' => $colonia, 'municipio' => $municipio, 'estado' => $estado, 'cp' => $cp, 'pais' => $pais));
        }
        
    }
			
}
?>