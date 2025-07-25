const http = require('http');

http.createServer((req, res)=>{
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.method);

    if(req.url == '/' || req.url == '/home' ){
        res.write(' <h1>Home Page</h1> ');
    }else if(req.url == '/login'){
        res.write( ' <h1>Login Page</h1> ' )
    }else{
        res.write(' <h1>Other Page</h1> ')
    }
    
    
    

    // res.write('Hello');
    res.end();

}).listen(4800);