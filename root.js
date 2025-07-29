const http = require('http');
const arg = process.argv;
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');

http.createServer((req, res) => {
    if (req.url === '/') {
        userForm(req, res);
    } else if (req.url === '/submit') {
        userDataSubmit(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(arg[2]);
