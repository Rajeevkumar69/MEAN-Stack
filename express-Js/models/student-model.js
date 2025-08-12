import mongoose from "mongoose";
import studentSchema from "../schema/student-schema.js";

const studentModel = mongoose.model("students", studentSchema);

export default studentModel;