<?php
class Conexion
{
    public $pdo;
    public function __construct()
    {
        try {
            $dsn = "mysql:host=localhost;dbname=tema10";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_PERSISTENT => false,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
            ];
            $this->pdo = new PDO($dsn, "root", "", $options);
        } catch (PDOException $e) {
            exit();
        }
    }
}

//Recibimos el id mediante GET y lo guardamos en una variable si no es nulo, si es nulo estavariable también será nula
$id = $_GET['id'] ?? null;

//Consulta sql
//Si el id es nulo, es decir, si aún no se ha seleccionado ningún registro en la lista la sentencia SQL selecciona todos los campos
$sql = "SELECT * FROM tema10.datos";
//Si no es nulo concateno a la sentencia lo necesario para que solo muestre el id que se ha seleccionado en la lista (se ha seleccionado un nombre, pero el valor es la id)
if ($id != null) {
    $sql .= " WHERE id = :id";
}

//Conectar con la base de datos
$conexion = new Conexion();

//Ejecutamos con prepare
$pdostmt = $conexion->pdo->prepare($sql);

//Si hay un id, vinculamos la variable
if ($id !== null) {
    $pdostmt->bindParam(':id', $id, PDO::PARAM_INT);
}

//Ejecutamos
$pdostmt->execute();

//Establecemos tipo Fetch
$result = $pdostmt->fetchAll(PDO::FETCH_ASSOC);

//Devolvemos el resultado en JSON
echo json_encode($result);
