<?php
// Para solicitudes de otros dominios.
header("access-control-allow-origin: *");

if(!isset($_POST) || empty($_POST)){
    //En el caso de enviar los datos en JSON
    $json = file_get_contents('php://input');
    $ids = json_decode($json);
    $id1=$ids->equipo1;
    $id2=$ids->equipo2;
}else{
    //En el caso de recibirlo como campos. 
    $id1 = $_POST['equipo1'];
    $id2 = $_POST['equipo2'];
}
// Simula lectura de BBDD
$cursosJson='[{ "id": 1,
    "curso": "1ESO",
    "alumnos":["Pedro1 V.", "Manuel1 G.","Juan1 G.","..."]                
},
{ "id": 2,
    "curso": "2ESO",
    "alumnos":["Pedro2 V.", "Manuel2 G.","Juan2 G.","..."]                
},
{ "id": 3,
    "curso": "3ESO",
    "alumnos":["Pedro3 V.", "Manuel3 G.","Juan3 G.","..."]                
}
]';
//Convierte a objetos.
$data = json_decode($cursosJson);

// Codifica a JSON para envío.
if (($id1<=count($data)) && ($id2<=count($data))){
    $alumnos_equipo1 = json_encode($data[$id1-1]->alumnos);
    $alumnos_equipo2 = json_encode($data[$id2-1]->alumnos);

    echo '{"equipo1":'.$alumnos_equipo1.',"equipo2":'.$alumnos_equipo2.'}';
}else{
    echo json_encode('{"error":"No existe algún ID"}');;
}
?>
