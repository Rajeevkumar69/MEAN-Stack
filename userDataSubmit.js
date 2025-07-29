const fs = require('fs');



function userDataSubmit(req, res) {
    fs.readFile('html/admin-dashboard.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server error');
            return;
        }
        if (data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);

        }

        res.end();
    })

}



module.exports = userDataSubmit;