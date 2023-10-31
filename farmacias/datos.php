<?php



$url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=18.913922,-99.184016&location_type=ROOFTOP&result_type=street_address&key=AIzaSyBo6II7741K993JiG5r3saP8gw960OTTZk'; 
//$url = 'https://jsonplaceholder.typicode.com/posts/1'; 
  
$img = 'archivo2.json'; 
  
// Function to write image into file
file_put_contents($img, file_get_contents($url));
echo "File downloaded!";


?>