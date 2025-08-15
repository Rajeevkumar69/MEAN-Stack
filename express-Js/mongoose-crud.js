
// #54 | GET REST API with Mongoose to Fetch Data from MongoDB

import mongoose from "mongoose";
import express from "express";
import studentModel from "./models/student-model.js";

const app = express();
app.use(express.json());

await mongoose.connect('mongodb://localhost:27017/school').then(() => {
    console.log('___________Connected_______________');

});

app.get('/', async (req, res) => {
    const studentModelData = await studentModel.find();
    res.send(studentModelData);
});

// #55 | Make Post method REST API with Mongoose to insert data

app.post("/save", async (req, res) => {
    try {
        const studentModelData = await studentModel.create(req.body);
        res.send({
            message: 'Data Stored',
            success: true,
            data: studentModelData
        });
    } catch (error) {
        res.status(500).send({
            message: 'Server Error',
            success: false,
            error: error.message
        });
    }
});

// #56 Make PUT & DELETE REST API with Mongoose

app.put("/update/:id", async (req, res) => {
    let userId = req.params.id;

    try {
        const studentModelData = await studentModel.findByIdAndUpdate(userId, req.body);
        res.send({
            message: 'Data Updated',
            success: true,
            data: studentModelData
        });
    } catch (error) {
        res.status(500).send({
            message: 'Server Error',
            success: false,
            error: error.message
        });
    }
})

app.delete("/delete/:id", async (req, res) => {
    let userId = req.params.id;

    try {
        const studentModelData = await studentModel.findByIdAndDelete(userId);
        res.send({
            message: 'Data Deleted',
            success: true,
            data: studentModelData
        });
    } catch (error) {
        res.status(500).send({
            message: 'Server Error',
            success: false,
            error: error.message
        });
    }
})


app.listen(4800);