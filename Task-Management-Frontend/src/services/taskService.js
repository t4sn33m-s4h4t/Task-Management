import axios from 'axios';

const API_URL = 'https://task-management-backend-blush.vercel.app/api/tasks';

export const getTasks = async (userId) => {
    const response = await axios.get(`${API_URL}?userId=${userId}`);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(API_URL, task); 
    return response.data;
};

export const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};