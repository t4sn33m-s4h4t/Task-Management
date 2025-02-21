import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import TaskBoard from '../components/TaskBoard';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar'; 
import { useTheme } from '../context/ThemeContext';
const DashboardPage = () => {
    const { user } = useUser();
    const navigate = useNavigate(); 
    const {isDarkMode} = useTheme()
    if (!user) {
        navigate('/');
        return null;
    }
    return (
        <>
            <Navbar />
            <div
                className={`md:px-6 py-6 min-h-screen  ${
                    isDarkMode ? "bg-purple-950 text-white" : "bg-white text-purple-900"
                  }`}
            >
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">
                    Manage Your Tasks, <span className="text-purple-500">{user.displayName}</span>!
                </h1>

                <ErrorBoundary>
                    <TaskBoard />
                </ErrorBoundary>


            </div>
        </>
    );
};

export default DashboardPage;