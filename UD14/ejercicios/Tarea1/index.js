// index.js
import express from "express";
import path from "path";

const app = express();
const router = express.Router();
const __dirname = path.resolve(); // Resuelve y adapta para módulos ES6

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

// Esta es la ruta para manejar la solicitud AJAX
router.get("/pagAjax", function (req, res) {
	//Devolvemos un objeto json
	res.json({ NOMBRE: "León 🦁", APELLIDO: "Escolástico" });
});

app.use("/", router);
app.use(express.static(__dirname)); // IMPORTANTE carga archivos js, css, etc., cargados en los html desde directorio
app.listen(3000);
console.log("Escuchando en puerto 3000");
