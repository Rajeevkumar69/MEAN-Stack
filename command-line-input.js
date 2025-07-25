const http = require('http');

const arg = process.argv;
const portId = arg[2];

http.createServer((req, res) => {
    res.write("<h1>Input from command line</h1>");
    res.end();

}).listen(portId);




// let arg = process.argv;
// console.log(`--`, arg);

// nodemon command-line-input.js 4300  Pass Input Like This