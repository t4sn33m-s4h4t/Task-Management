import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ThemeToggle from './ThemeToggler';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { logout } = useUser();
    const navigate = useNavigate();
        const {isDarkMode} = useTheme()

    const handleLogout = async () => {
        try {
            await logout(); 
            navigate('/login'); 
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };


    return (
        <nav
            className={`flex items-center justify-between px-2 md:px-6 py-4 shadow-md  ${
                    isDarkMode ? " bg-purple-800 text-white" : " bg-purple-200 text-purple-950 transition-colors duration-300"
            }`}
        >
            
            

            <button
                onClick={handleLogout}
                className=" transition px-2 md:px-5 py-2 bg-purple-700 hover:text-purple-800 hover:bg-white text-white rounded-md cursor-pointer  "
            >
                Logout
            </button>
            <div className="md:text-2xl text-xl font-bold">
                <Link to="/" >
                    Task Management
                </Link>
            </div>
            <ThemeToggle />
        </nav>
    );
};

export default Navbar;