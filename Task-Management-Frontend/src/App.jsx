import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './pages/ProtectedRoute';
import SecuredRoute from './pages/SecuredRoute';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>} />
                <Route path="/login" element={<SecuredRoute><LoginPage /></SecuredRoute>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;