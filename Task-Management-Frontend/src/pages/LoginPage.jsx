 import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import {saveUserToBackend} from '../services/userServices'

const LoginPage = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user; 
            const res = await saveUserToBackend({displayName: user.displayName, email: user.email, userId: user.uid});  
            console.log(res)
            setUser(user);
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <div
            className={`px-5 flex flex-col items-center justify-center h-screen 
            bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-white 
            transition-colors duration-300`}
        > 
            <h1 className="text-4xl font-extrabold mb-8 text-center">
                Welcome to <span className="text-purple-500">Task Management App</span>
            </h1>
 
            <button
                onClick={handleLogin}
                type="button"
                className="flex cursor-pointer items-center justify-center w-64 px-5 py-3 bg-white text-black hover:text-white font-medium rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-300"
            >
                <svg
                    className="mr-3 w-5 h-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                >
                    <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                </svg>
                Sign in with Google
            </button>
        </div>
    );
};

export default LoginPage;