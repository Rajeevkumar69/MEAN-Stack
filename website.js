const http = require('http');
const fs = require('fs');
const arg = process.argv;

http.createServer((req, res) => {
    let collectHeaderData; 
    fs.readFile('html/header.html', 'utf-8', (err, headerData) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            res.end('Header not found');
            return;
        }
        collectHeaderData = headerData;
        // res.writeHead(200, { "content-type": 'text/html' });
        // res.end(headerData);
    });
    if (req.url == '/') {
        fs.readFile('html/home.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": 'text/plain' });
                res.end('Internal server error');
                return;
            }
            
            
            res.writeHead(200, { "content-type": 'text/html' });
            res.write(collectHeaderData+""+data )
            res.end();
        });
    } else if (req.url == '/style/style.css') {
        fs.readFile('style/style.css', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": 'text/plain' });
                res.end('Style not found');
                return;
            }
            res.writeHead(200, { "content-type": 'text/css' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { "content-type": 'text/plain' });
        res.end('404 Not Found');
    }

}).listen(arg[2]);
