import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Internships from './pages/Internships';
import Competitions from './pages/Competitions';
import Courses from './pages/Courses';
import Mentorship from './pages/Mentorship';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider, useAuth } from './contexts/AuthContext';
const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const PublicOnlyRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useAuth();   
  return !user ? element : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/mentorship" element={<Mentorship />} />

              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={<PublicOnlyRoute element={<Login />} />}
              />

              <Route
                path="/register"
                element={<PublicOnlyRoute element={<Register />} />}
              />
              <Route
                path="/dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;