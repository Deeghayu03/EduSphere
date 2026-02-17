import { Link } from 'react-router-dom';
import { ArrowLeft, LogIn } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-md w-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-4">
                            <LogIn className="h-8 w-8 text-primary-600" />
                        </div>
                        <h1 className="text-3xl font-bold gradient-text mb-2">Login</h1>
                        <p className="text-gray-600">Welcome back to EduSphere</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="your.email@university.edu"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Sign In
                        </button>
                    </div>

                    <p className="text-center mt-6 text-gray-600">
                        Don't have an account? <Link to="/register" className="text-primary-600 font-semibold hover:underline">Register</Link>
                    </p>

                    <Link to="/" className="flex items-center justify-center gap-2 mt-6 text-gray-600 hover:text-primary-600 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
