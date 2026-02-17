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
import StudentDashboard from './student/StudentDashboard';
import PeerLearning from './student/PeerLearning';
import Progress from './student/Progress';
import Rewards from './student/Rewards';
import Marketplace from './student/Marketplace';
import Chatbot from './student/Chatbot';

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
  // Define pages where we hide the global Navbar/Footer
  const isAuthPage = ['/login', '/register'].includes(location.pathname);
  const isStudentPage = location.pathname.startsWith('/student');

  // Note: Home.jsx already includes Navbar and Footer.
  // To avoid duplication, we render the global Navbar/Footer only on routes that are NOT Home, Login, Register, or Student Dashboard.
  const isHomePage = location.pathname === '/';
  const shouldShowGlobalLayout = !isAuthPage && !isHomePage && !isStudentPage;

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


          // ... other imports

          {/* Protected Routes with Role Checks */}
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Upcoming Deadlines</h3>
                    <p className="text-gray-500">No pending assignments.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Grades</h3>
                    <p className="text-gray-500">GPA: 3.8</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Kuppi Groups</h3>
                    <p className="text-gray-500">2 active groups</p>
                  </div>
                </div>
              </div>
            } />
            <Route path="peer-learning" element={<PeerLearning />} />
            <Route path="progress" element={<Progress />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="chatbot" element={<Chatbot />} />
          </Route>

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
