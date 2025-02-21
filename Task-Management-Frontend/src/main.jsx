import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { ActivityLogProvider } from './context/ActivityLogContext';

ReactDOM.createRoot(document.getElementById('root')).render(

    <UserProvider>
        <ThemeProvider>
            <ActivityLogProvider>
                <App />
            </ActivityLogProvider>
        </ThemeProvider>
    </UserProvider>
);