 
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const SecuredRoute = ({ children }) => {
    const { user, loading } = useUser();

    if (loading) {
        return (
            <div
                className="flex items-center justify-center min-h-screen bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-white transition-colors duration-300"
            >
                <div className="flex flex-col items-center"> 
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
 
                    <p className="mt-4 text-lg font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    if (user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default SecuredRoute;