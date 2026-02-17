import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';
import { useAuth } from '../context/AuthContext';
import { Bell, Search, Menu } from 'lucide-react';

const StudentDashboard = () => {
    const { user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Handle screen resize to auto-collapse on mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setIsSidebarOpen(false);
            } else {
                setIsMobile(false);
                setIsSidebarOpen(true);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <StudentSidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                isMobile={isMobile}
            />

            {/* Mobile Overlay */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content Wrapper */}
            <div className={`flex-1 transition-all duration-300 ease-in-out ${isMobile ? 'ml-0' : (isSidebarOpen ? 'ml-64' : 'ml-20')
                }`}>
                <div className="p-8">
                    {/* Top Header */}
                    <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleSidebar}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <Menu className="h-6 w-6" />
                            </button>

                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name?.split(' ')[0] || 'Student'}! 👋</h1>
                                <p className="text-gray-500 text-sm hidden md:block">Here's what's happening with your studies today.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative hidden md:block">
                                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                                />
                            </div>

                            <button className="p-2 relative hover:bg-gray-100 rounded-full transition-colors">
                                <Bell className="h-6 w-6 text-gray-600" />
                                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>

                            <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                                {user?.name?.charAt(0) || 'S'}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[calc(100vh-180px)] p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
