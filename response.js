const http = require('http');

const age = 25;
http.createServer((req, res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
        <head>
        <title>
        NodeJs Learning
        </title>
        </head>
        <body>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <b> `+age+  ` </b><br>
        <code> `+new Date()+` </code>
        </body>
        </html>
        `)

    res.end();
    process.exit(); // to exit the server

}).listen(4800);