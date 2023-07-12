import mongoose from "mongoose"

const Task = mongoose.model('Task', {
    text: String,
    category: String
})

export default Task;