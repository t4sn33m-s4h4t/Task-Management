import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      setIsDarkMode(isDark);
    }
  }, [setIsDarkMode]);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={`shadow-2xl p-2 md:p-3 rounded-full
        ${isDarkMode ? 'bg-purple-700 text-white' : 'bg-white text-purple-900'}
        hover:transform hover:scale-110 hover:shadow-xl
        transition-all duration-300 ease-in-out
        cursor-pointer z-10
      `}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;