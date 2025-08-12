import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    course: String,
    dob: String,
    gender: String,
    phone: String
});

export default studentSchema;