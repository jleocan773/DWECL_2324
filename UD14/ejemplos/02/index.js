import { createServer } from 'http';
createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); // Devuelve '/directorio'
  res.end();
}).listen(8080);