import express from "express";
import { MongoClient } from "mongodb";
import path from "path";

const app = express();

const uri = "mongodb+srv://jleocan773:K2eXak6I0DU9WIq2@cluster0.jmw3avr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Ruta para servir el archivo index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

// Endpoint para obtener los datos
app.get("/datos", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("tarea2");
        const coleccion = database.collection("datos");
        const datos = await coleccion.find().toArray();
        res.json(datos);
    } catch (error) {
        console.error("Error al obtener registros:", error);
        res.status(500).send("Error al obtener registros");
    } finally {
        await client.close();
    }
});

// Endpoint para insertar datos
app.post("/insertar", async (req, res) => {
    const { nombre, apellido } = req.body;
    try {
        await client.connect();
        const database = client.db("tarea2");
        const coleccion = database.collection("datos");
        const nuevoRegistro = await coleccion.insertOne({ nombre, apellido });
        res.json(nuevoRegistro.ops[0]);
    } catch (error) {
        console.error("Error al añadir registro:", error);
        res.status(500).send("Error al añadir registro");
    } finally {
        await client.close();
    }
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});
