import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen 
            bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-white 
            transition-colors duration-300"
        >
            <h1 className="text-8xl font-extrabold mb-4">404</h1>
            <p className="text-lg md:text-xl mb-6 text-center">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md 
                hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;