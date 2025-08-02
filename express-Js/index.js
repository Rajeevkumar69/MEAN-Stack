// Render HTML code from another path
// import express from 'express';
// import home from './pages/home.js';
// import about, { contact } from './pages/about.js';

// const app = express();


// app.get("/", (req, res) => {
//     res.send(home()); 
// });

// app.get("/about", (req, res) => {
//     res.send(about()); 
// });

// app.get("/contact", (req, res) => {
//     res.send(contact());
// });

// app.listen(4800, () => {
//     console.log("Server is running on http://localhost:4800");
// });

// Render HTML file from another path

// import express from 'express';
// import path from 'path';
// const arg = process.argv;

// const app = express();
// const viewsPath = path.resolve('views');
// const stylePath = path.resolve('style');

// app.use(express.static(stylePath));


// app.get('/', (req, res) => {
//   res.sendFile(viewsPath + '/home.html');
// });

// app.get('/dashboard', (req, res) => {
//   res.sendFile(viewsPath + '/dashboard.html');
// });

// // load 404 page

// app.use((req, res) => {
//   res.sendFile(viewsPath + '/error-page.html');
// });


// app.listen(arg[2]);

// Middleware details with Node & ExpressJs

// import express from "express";
// import path from 'path';
// const arg = process.argv;

// const app = express();


// app.use((req, res, next)=>{
//  console.log(req.url);
//     next();
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/home', (req, res) => {
//     res.send('Home World!');
// });

// app.get('/dashboard', (req, res) => {
//     res.send('Dashboard World!');
// });



// app.listen(arg[2]);

// Route Middleware with Code Examples

import express from "express";
const arg = process.argv;

const app = express();

function checkAgeRouteMiddleware(req, res, next) {
    if(!req.query.age || req.query.age < 18 ){
        res.send(`<p>You can't access this application</p>`);
    }
    else{
        next();
    }
}

app.get('', (req, res)=>{
    res.send(`<h1>Home Page</h1>`);
} );

app.get('/login',  (req, res)=>{
    res.send(`<h1>Login Page</h1>`);
} );

app.get('/dashboard', checkAgeRouteMiddleware, (req, res)=>{
    res.send(`<h1>Dashboard Page</h1>`);
} );

app.listen(arg[2]);
