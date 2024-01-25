<?php
// Para solicitudes de otros dominios.
header("access-control-allow-origin: *");
//...................................... 
$json = file_get_contents('php://input');
$data = json_decode($json);

// Aquí se haría una consulta en la BBDD y se devolvería el resultado,
// en este caso el PHP solo recibe parámetros JSON y devuelve JSON 

if(!isset($_POST) || empty($_POST)){
    $json = json_encode($data);
    echo $json;
}else{
    $marca = $_POST['marca'];
    $modelo = $_POST['modelo'];
    // Devuelve JSON
    echo '{"marca":"'.$marca.'","modelo":"'.$modelo.'"}';
}

?>
