import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserPlus } from 'lucide-react';

const Register = () => {
    const [role, setRole] = useState('Student');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [studentID, setStudentID] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');

    // Check if all required fields are filled for Student role
    const isFormValid = role === 'Student' && 
                        name.trim() !== '' && 
                        email.trim() !== '' && 
                        studentID.trim() !== '' && 
                        gender !== '' && 
                        birthdate !== '' && 
                        password.trim() !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // Handle form submission
            console.log({ role, name, email, studentID, gender, birthdate, password });
        }
    };

    // Get today's date in YYYY-MM-DD format for max date
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-md w-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-4">
                            <UserPlus className="h-8 w-8 text-primary-600" />
                        </div>
                        <h1 className="text-3xl font-bold gradient-text mb-2">Register</h1>
                        <p className="text-gray-600">Join the EduSphere community</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Role Selection Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                            >
                                <option value="Student">Student</option>
                                <option value="Tutor">Tutor</option>
                                <option value="Marketplace Seller">Marketplace Seller</option>
                            </select>
                        </div>

                        {/* Student Registration Form */}
                        {role === 'Student' ? (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@university.edu"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                                    <input
                                        type="text"
                                        value={studentID}
                                        onChange={(e) => setStudentID(e.target.value)}
                                        placeholder="STU123456"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Birthdate</label>
                                    <input
                                        type="date"
                                        value={birthdate}
                                        onChange={(e) => setBirthdate(e.target.value)}
                                        max={today}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </>
                        ) : (
                            // Message for non-student roles
                            <div className="py-8 text-center">
                                <p className="text-gray-600 text-lg">
                                    Currently only Student registration is enabled.
                                </p>
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold transition-all duration-300 ${
                                isFormValid 
                                    ? 'hover:shadow-lg hover:scale-105 cursor-pointer' 
                                    : 'opacity-50 cursor-not-allowed'
                            }`}
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-6 text-gray-600">
                        Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:underline">Login</Link>
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

export default Register;
