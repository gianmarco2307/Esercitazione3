var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    var adr = req.url;
    var q = url.parse(adr, true);
    console.log(q.pathname);
    pathname = q.pathname.split('/');
    console.log(pathname);
    fs.readFile(pathname[1], function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Non trovato!');
            res.end();
        } else {
            res.writeHead(200, {'COntent-Type': 'text/html'})
            res.write(data);
            return res.end();
        }
    });
}).listen(3000);