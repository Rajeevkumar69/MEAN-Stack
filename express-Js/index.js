// Plain express module

// import express from 'express';
// const app = express();


// app.get("", (req, res) => {
//     res.send("<h1>Welcome to ExpressJs learning</h1>");
// });

// app.listen(4800);


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

// import express from "express";
// const arg = process.argv;

// const app = express();

// function checkAgeRouteMiddleware(req, res, next) {
//     if(!req.query.age || req.query.age < 18 ){
//         res.send(`<p>You can't access this application</p>`);
//     }
//     else{
//         next();
//     }
// }

// app.get('', (req, res)=>{
//     res.send(`<h1>Home Page</h1>`);
// } );

// app.get('/login',  (req, res)=>{
//     res.send(`<h1>Login Page</h1>`);
// } );

// app.get('/dashboard', checkAgeRouteMiddleware, (req, res)=>{
//     res.send(`<h1>Dashboard Page</h1>`);
// } );

// app.listen(arg[2]);

// Built-In Middleware with Code Examples

// import express from "express";
// import path from 'path';
// const arg = process.argv;

// const app = express();

// app.use(express.urlencoded({extended:false})); // builtin middleware
// const viewsPath = path.resolve('views');
// const stylePath = path.resolve('style');

// app.use(express.static(stylePath));

// app.get('', (req, res) => {
//     res.send(`<h1>Home Page</h1>`);
// });


// app.get('/login', (req, res) => {
//     res.send(`
//         <form action="/dashboard" method="post" >
//             <input placeholder="Enter name" type="text" name="name" />
//             <br/>
//             <br />
//             <input placeholder="Enter password" type="password" name="password" />
//              <br/>
//             <br />
//             <button> Submit </button>
//         </form>
//         `);
// });

// app.post('/dashboard', (req, res) => {
//   res.sendFile(viewsPath + '/dashboard.html');
// });


// app.listen(arg[2]);

// 34 External Middleware in Express.js 

// import express from "express";
// import path from 'path';
// import morgan from "morgan";
// const arg = process.argv;

// const app = express();


// app.use(morgan('dev'));

// app.get("/", (req, res) => {
//     res.send(`<p>Hello world!</p>`)
// });

// app.get("/dashboard", (req, res) => {
//     res.send(`<p>Welcome budy</p>`)
// });

// app.listen(arg[2]);

// 35 Error Handling Middleware in Express.js

// import express from "express";
// import path from "path";
// const arg = process.argv;

// const app = express();

// app.get("/", (req, res) => {
//     res.send(`<h1>Home Page</h1>`);
// });

// app.get("/dashboard", (req, res) => {
//     res.send(`<h1>Dashboard Page</h1>`);
// });

// app.use((req, res, next) => {
//   const error = new Error("Page Not Found");
//   error.status = 404;
//   next(error);
// });

// function handleErrorPage(error, req, res, next) {
//     res.status(error.status || 500).send('Something went wrong or try later');
// }

// app.use(handleErrorPage);

// app.listen(arg[2]);

// 36 EJS | Template engine in express JS

// import express from "express";
// import  path from 'path'
// const arg = process.argv;

// const app = express();


// app.set('view engine', 'ejs' );
// app.get("/", (req, res)=>{
//     res.render('home', { name: 'Rajeev Kumar', course: 'NodeJs' });
// } );

// app.get("/dashboard", (req, res)=>{
//     res.send(`<h1>Dashboard Page</h1>`)
// } );

// app.listen(arg[2]);


// 37 submit form data and display on ejs template engine page

// import express from "express";
// import path from 'path';
// const arg = process.argv;

// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));


// app.get("/", (req, res) => {
//     res.render('add-user');
// });


// app.post("/submit-user", (req, res) => {
//     res.render('submit-user');
// });

// app.listen(arg[2]);

// 38 Loops and Conditions in EJS Template Files

// import express from "express";
// const arg = process.argv;

// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));

// app.get("", (req, res) => {
//     res.render('add-user');
// });

// app.get("/users", (req, res) => {
//     const users = [
//         { name: " Brown", email: "alice@example.com" },
//         { name: "Alice ", email: "alice@example.com" },
//         { name: "Alice Brown", email: "alice@example.com" },
//         { name: "John Doe", email: "john@example.com" },
//         { name: "Jane Smith", email: "jane@example.com" },
//         { name: "Alice Brown", email: "alice@example.com" }
//     ];
//     res.render('users', {users:users} );
// });

// app.listen(arg[2]);