const express = require('express');
const app = express();

app.get("", (req, res) => {
    res.send("<h1>Hello World, ExpressJs</h1>");
});
app.get("/dashboard", (req, res) => {
    res.send("<h1>ExpressJs Dashboard</h1>");
});

app.listen(4800);

