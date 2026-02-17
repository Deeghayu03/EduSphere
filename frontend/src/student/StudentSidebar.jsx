import { Link, useLocation } from 'react-router-dom';
import {
    Users,
    TrendingUp,
    Award,
    ShoppingBag,
    MessageSquare,
    LogOut,
    LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const StudentSidebar = ({ isOpen, isMobile }) => {
    const location = useLocation();
    const { logout } = useAuth();

    const isActive = (path) => {
        return location.pathname === path
            ? "bg-primary-50 text-primary-600 border-r-4 border-primary-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-primary-600";
    };

    const navItems = [
        { path: '/student/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/student/peer-learning', icon: Users, label: 'Peer Learning' },
        { path: '/student/progress', icon: TrendingUp, label: 'My Progress' },
        { path: '/student/rewards', icon: Award, label: 'Rewards' },
        { path: '/student/marketplace', icon: ShoppingBag, label: 'Marketplace' },
    ];

    return (
        <div className={`
            h-screen bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col z-20 
            transition-all duration-300 ease-in-out
            ${isMobile
                ? (isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full')
                : (isOpen ? 'w-64' : 'w-20')
            }
        `}>
            {/* Logo Area */}
            <div className={`p-6 border-b border-gray-200 flex items-center ${isOpen ? 'justify-start gap-2' : 'justify-center'}`}>
                <Link to="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0">
                        E
                    </div>
                    <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 hidden'}`}>
                        EduSphere
                    </span>
                </Link>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 py-6 space-y-1 overflow-y-auto overflow-x-hidden">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        title={!isOpen ? item.label : ''}
                        className={`
                            w-full flex items-center px-6 py-3 transition-all duration-200 
                            ${isActive(item.path)}
                            ${isOpen ? 'gap-3' : 'justify-center'}
                        `}
                    >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className={`font-medium transition-all duration-300 whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0 hidden'}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-200 space-y-2">
                <Link
                    to="/student/chatbot"
                    title={!isOpen ? 'AI Chatbot' : ''}
                    className={`
                        w-full flex items-center px-6 py-3 rounded-lg transition-all duration-200 
                        ${isActive('/student/chatbot')}
                        ${isOpen ? 'gap-3' : 'justify-center'}
                    `}
                >
                    <MessageSquare className="h-5 w-5 shrink-0" />
                    <span className={`font-medium transition-all duration-300 whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0 hidden'}`}>
                        AI Chatbot
                    </span>
                </Link>

                <button
                    onClick={logout}
                    title={!isOpen ? 'Logout' : ''}
                    className={`
                        w-full flex items-center text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 px-6 py-3
                        ${isOpen ? 'gap-3' : 'justify-center'}
                    `}
                >
                    <LogOut className="h-5 w-5 shrink-0" />
                    <span className={`font-medium transition-all duration-300 whitespace-nowrap ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0 hidden'}`}>
                        Logout
                    </span>
                </button>
            </div>
        </div>
    );
};

export default StudentSidebar;
