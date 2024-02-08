// leeHtml.js
import { createServer } from "http";
import * as fs from "fs";
createServer(function (req, res) {
	fs.readFile("demo1.html", function (err, data) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		res.end();
	});
}).listen(8080);

//Para crear un archivo
fs.writeFile("prueba1.txt", "Contenido….", function (err) {
	if (err) throw err;
	console.log("Creado!");
});

//Para añadir texto a un archivo
fs.appendFile("prueba1.txt", "\n más contenido….", function (err) {
	if (err) throw err;
	console.log("Añadido!");
});

// //Para borrar un
// fs.unlink('prueba1.txt', function (err) {
//   if (err) throw err;
//   console.log('Archivo borrado!');
// });

fs.rename('prueba1.txt', 'prueba2.txt', function (err) {
  if (err) throw err;
  console.log('Archivo renombrado!');
});

