import * as http from 'http';
import * as fs from 'fs';
//var url=require('url');
http.createServer(function (req, res) {
   // var q = url.parse(req.url, true);
    var q= new URL(`http://`+req.headers.host+req.url);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
