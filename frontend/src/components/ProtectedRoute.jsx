import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    // Mock authentication state
    const isAuthenticated = true; // Set to false to test redirection
    const userRole = 'student'; // 'student', 'tutor', or 'admin'

    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login but save the current location they were trying to go to
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        // Role not authorized, redirect to home or unauthorized page
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
