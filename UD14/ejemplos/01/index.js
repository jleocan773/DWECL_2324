import { createServer } from "http";
import { suma } from "./miModulo.mjs";
import { Saludo } from "./miClase.mjs";
var saluda = new Saludo();
createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("La suma es: " + suma(3, 4) + "<br>");
	res.write(saluda.hi());
	res.end();
}).listen(8080);
