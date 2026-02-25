const Rewards = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Engagement & Rewards</h2>
            <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Achievements</h3>
                <p className="text-gray-500 max-w-md">Earn badges and points for your active participation and academic milestones.</p>
                <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                    View Leaderboard
                </button>
            </div>
        </div>
    );
};

export default Rewards;
