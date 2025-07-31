import express from 'express';
const app = express();


app.get("", (req, res) => {
    res.send("<h1>Welcome to ExpressJs learning</h1>");
});

app.listen(4800);