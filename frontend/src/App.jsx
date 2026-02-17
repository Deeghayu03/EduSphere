import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

/**
 * Placeholder components for Role-Based Dashboards
 */
const StudentDashboard = () => (
  <div className="p-12 text-center">
    <h1 className="text-4xl font-extrabold text-primary-600 mb-4">Student Dashboard</h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Welcome to your learning portal.</p>
  </div>
);

const TutorDashboard = () => (
  <div className="p-12 text-center">
    <h1 className="text-4xl font-extrabold text-accent-600 mb-4">Tutor Dashboard</h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Manage your educational content here.</p>
  </div>
);

const AdminDashboard = () => (
  <div className="p-12 text-center">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Admin Console</h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Platform-wide oversight and management.</p>
  </div>
);

/**
 * AppContent contains the actual routing logic and layout.
 * It is wrapped by BrowserRouter in the main App component.
 */
function AppContent() {
  const location = useLocation();

  // Define pages where we hide the global Navbar/Footer
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  // Note: Home.jsx already includes Navbar and Footer.
  // To avoid duplication, we render the global Navbar/Footer only on routes that are NOT Home, Login, or Register.
  const isHomePage = location.pathname === '/';
  const shouldShowGlobalLayout = !isAuthPage && !isHomePage;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Global Navbar */}
      {shouldShowGlobalLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes with Role Checks */}
          <Route
            path="/student/*"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <Routes>
                  <Route index element={<StudentDashboard />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/tutor/*"
            element={
              <ProtectedRoute allowedRoles={['tutor']}>
                <Routes>
                  <Route index element={<TutorDashboard />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-6xl font-black text-gray-200 mb-4">404</h2>
              <p className="text-xl text-gray-500">Oops! Page not found.</p>
              <a href="/" className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Return Home
              </a>
            </div>
          } />
        </Routes>
      </main>

      {/* Global Footer */}
      {shouldShowGlobalLayout && <Footer />}
    </div>
  );
}

/**
 * Main App Component - Wraps the content with BrowserRouter
 */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
