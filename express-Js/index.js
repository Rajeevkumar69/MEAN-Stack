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

app.get('/', (req, res) => {
  const absPath = path.resolve('views/home.html');
  res.sendFile(absPath);
});

app.get('/dashboard', (req, res) => {
  const absPath = path.resolve('views/dashboard.html');
  res.sendFile(absPath);
});

app.listen(arg[2]);
