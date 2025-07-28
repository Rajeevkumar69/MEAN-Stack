const http = require('http');
const arg = process.argv;
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, res) => {
    fs.readFile('html/web.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            res.end('Internal server error');
            return;
        }
        if (req.url == '/') {
            res.writeHead(200, { "content-type": 'text/html' });
            res.write(data);
            res.end();
        } else if (req.url == '/submit') {
            let dataBody = [];

            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                res.write('<h1>Logged In Successfully</h1>')
                let dataString = `Username ${readableData.email} Password ${readableData.password}`;
                console.log(dataString);



                res.end();
            });
        }
    })
}).listen(arg[2])
