const http = require('http');
const arg = process.argv;
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('html/web.html', 'utf8', (err, data) => {
        if (data) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        } else {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.write(err);
            res.end();
            return;
        }

    })

}).listen(arg[2])