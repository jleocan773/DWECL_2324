//Hacemos los import necesarios
import { MongoClient } from "mongodb";
import express from "express";
import path from "path";

//Creamos las constantes necesarias para realizar las peticiones a mongoDB
const app = express();
const uri =
  "mongodb+srv://jleocan773:3RP38QZeiGdJS1ra@cluster0.rv6wfcz.mongodb.net/";
const client = new MongoClient(uri);
app.use(express.json());

//Declaramos las rutas
const router = express.Router();
var __dirname = path.resolve();

//Declaramos la ruta principal
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//Maneja las solicitudes POST enviadas a la ruta "/addDatos".
app.post("/addDatos", async (req, res) => {
  try {
    //Extrae el nombre y los apellidos del cuerpo de la solicitud.
    const { nombre, apellidos } = req.body;

    //Se conecta a la base de datos.
    const db = client.db();

    //Se conecta a la colección dentro de la base de datos.
    const collection = db.collection("datos");

    //Inserta el nuevo documento en esta colección.
    await collection.insertOne({ nombre, apellidos });

    //Se envia una respuesta indicando que el documento se ha añadido con éxito
    res.send("Documento añadido correctamente");
  } catch (err) {
    console.error("Error: ", err);
    res.send("Error al insertar documento");
  }
});

//Maneja las solicitudes GET enviadas a la ruta "/mostrarDatos".
app.get("/mostrarDatos", async (req, res) => {
  try {
    //Se conecta a la base de datos.
    const db = client.db();

    //Se conecta a la colección dentro de la base de datos.
    const collection = db.collection("datos");

    //Obtiene todos los documentos de esta colección y lo convierte en un array.
    const documentos = await collection.find({}).toArray();

    //Se envia la respuesta con los datos obtenidos.
    res.json(documentos);
  } catch (err) {
    console.error("Error: ", err);
    res.send("Error al obtener documentos");
  }
});

//Definimos el enrutador
app.use("/", router);

//Para servir los archivos estáticos desde el directorio
app.use(express.static(__dirname));

//Establecemos la conexión en el puerto 3000
app.listen(3000, () => {
  console.log("Escuchando en puerto 3000");
});
