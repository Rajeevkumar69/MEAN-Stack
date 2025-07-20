const http = require('http');
const userData = require('./constant/user-data');

http.createServer((req, res)=>{

    res.setHeader("Content-Type",'application/json');
    res.write(
        JSON.stringify(userData)
    );
    res.end();


}).listen(4800);