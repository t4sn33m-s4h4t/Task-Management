const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    description: {
        type: String,
        maxlength: 200,
    },
    category: {
        type: String,
        enum: ['To-Do', 'In Progress', 'Done'],
        default: 'To-Do',
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: String,
        required: true,
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;