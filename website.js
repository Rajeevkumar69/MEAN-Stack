const http = require('http');
const fs = require('fs');
const arg = process.argv;

http.createServer((req, res) => {

    // Best is sync approach
    let collectHeaderData = fs.readFileSync('html/header.html', 'utf-8');
    let collectedFooterData = fs.readFileSync('html/footer.html', 'utf-8');

    // fs.readFile('html/header.html', 'utf-8', (err, headerData) => {
    //     if (err) {
    //         res.writeHead(500, { "content-type": 'text/plain' });
    //         res.end('Header not found');
    //         return;
    //     }
    //     collectHeaderData = headerData;
    //     // res.writeHead(200, { "content-type": 'text/html' });
    //     // res.end(headerData);
    // });

    // Node routing
    let file = '/home';
    if (req.url !== '/' && req.url !== '/style/style.css') {
        file = req.url;
    }

    if (req.url === '/' || (!req.url.endsWith('.css') && !req.url.includes('.'))) {
        let file = req.url === '/' ? '/home' : req.url;

        fs.readFile("html" + file + ".html", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": 'text/plain' });
                res.end('Internal server error');
                return;
            }

            res.writeHead(200, { "content-type": 'text/html' });
            res.write(collectHeaderData + "" + data + "" + collectedFooterData)
            res.end();
        });
    } else if (req.url === '/style/style.css') {
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
