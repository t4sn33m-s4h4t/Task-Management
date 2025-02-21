import axios from 'axios';

const API_URL = 'https://task-management-backend-blush.vercel.app/api/users';
// const API_URL = 'http://localhost:5000/api/users';

export const saveUserToBackend = async (user) => {
    try {
        await axios.post(`${API_URL}`, user);
    } catch (error) {
        console.error('Error saving user to backend:', error);
    }
};