import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Enter a Title"],
        },
        description: {
            type: String,
            required: [true, "Please Enter a Description"],
        }
    },
    {
        timestamps: true,
    })

const Todo = mongoose.models.SATodo || mongoose.model('SATodo', TodoSchema)

export default Todo;