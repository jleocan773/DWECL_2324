<?php
// Para solicitudes de otros dominios.
header("access-control-allow-origin: *");
//...................................... 
$nombre = $_POST['nombre'];
$ciudad = $_POST['ciudad'];
// Devuelve JSON
echo '{"nombre":"'.$nombre.'","ciudad":"'.$ciudad.'"}';
?>
