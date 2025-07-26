const http = require('http');
const arg = process.argv;
const fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('html/web.html', 'utf-8', (err, data) => {

        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            res.end('Internal server error');
            return;
        } else if (data) {
            res.writeHead(200, { "content-type": 'text/html' });
            if (req.url == '/') {
                res.write(data);
            } else if (req.url == '/submit') {
                res.write('<h1>Logged In Successfully!</h1>');
            }
            res.end();
        }


    })


}).listen(arg[2]);


// http.createServer((req, res) => {

//     res.writeHead(200, { "content-type": 'text/html' });

//     if (req.url == '/') {
//         res.write(`
//         <form action='/submit' method="post" >
//             <input type="text" placeholder='Enter name' name='name'  />
//             <input type="email" placeholder='Enter email' name='email'  />
//             <button>Submit</button>
//         </form>
//         `)
//     } else if (req.url == '/submit') {
//         res.write('<h1>Data Submitted</h1>')
//     }

//     res.end();

// }).listen(arg[2]);