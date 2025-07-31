import express from 'express';
import home from './pages/home.js';
import about, { contact } from './pages/about.js';

const app = express();


app.get("/", (req, res) => {
    res.send(home()); 
});

app.get("/about", (req, res) => {
    res.send(about()); 
});

app.get("/contact", (req, res) => {
    res.send(contact());
});

app.listen(4800, () => {
    console.log("Server is running on http://localhost:4800");
});
