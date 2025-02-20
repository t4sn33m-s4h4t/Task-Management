const Task = require('../models/taskModel');
 
const getTasks = async (req, res) => {
    try {
        const { userId } = req.query;  
        const tasks = await Task.find({ userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

 
const addTask = async (req, res) => {
    try {
        console.log(5)
        const { title, description, category, userId } = req.body;
        const newTask = new Task({ title, description, category, userId });
        const savedTask = await newTask.save();
        console.log(5)
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error adding task', error });
    }
};
 
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};
 
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
};