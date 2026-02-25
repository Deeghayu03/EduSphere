const Progress = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Progress</h2>
            <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Your Academic Journey</h3>
                <p className="text-gray-500 max-w-md">View your grades, attendance, and skill development analytics here.</p>
                <div className="mt-6 w-full max-w-md h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
