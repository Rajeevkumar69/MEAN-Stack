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
        }
        else if (req.url == '/submit') {
            let dataBody = [];

            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);

                fs.readFile('html/admin-dashboard.html', 'utf-8', (err, dashboardData) => {
                    if (err) {
                        res.writeHead(500, { "content-type": 'text/plain' });
                        res.end('internal server error');
                        return;
                    }

                    res.writeHead(200, { "content-type": 'text/html' });
                    // res.write(`<h1>Logged In Successfully!</h1>`);
                    // res.write(`<p>Email: ${readableData.email}</p>`);
                    // res.write(`<p>Password: ${readableData.password}</p>`);
                    res.write(dashboardData);
                    res.end();
                });
            });
        }
        else {
            res.writeHead(404, { "content-type": 'text/plain' });
            res.end('Page Not Found');
        }
    });
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