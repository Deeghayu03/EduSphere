const PeerLearning = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Peer Learning & Kuppi System</h2>
            <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Find or Host a Kuppi Session</h3>
                <p className="text-gray-500 max-w-md">Connect with peers for collaborative learning. Schedule sessions, share resources, and grow together.</p>
                <button className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Start a Session
                </button>
            </div>
        </div>
    );
};

export default PeerLearning;
