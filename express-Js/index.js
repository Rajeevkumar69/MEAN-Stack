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


import express from 'express';
import path from 'path';
const arg = process.argv;

const app = express();

const filePath = path.resolve('views');

app.get('/', (req, res) => {
  res.sendFile(filePath + '/home.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(filePath + '/dashboard.html');
});

// load 404 page

app.use((req, res) => {
  res.sendFile(filePath + '/error-page.html');
});


app.listen(arg[2]);
