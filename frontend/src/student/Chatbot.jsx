const Chatbot = () => {
    return (
        <div className="p-6 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">AI Academic Assistant</h2>
            <div className="flex-1 bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                    <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How can I help you today?</h3>
                <p className="text-gray-500 max-w-md mb-8">I can help you understand complex topics, summarize notes, or plan your study schedule.</p>

                <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex gap-4">
                    <input
                        type="text"
                        placeholder="Ask me anything..."
                        className="flex-1 outline-none text-gray-600"
                    />
                    <button className="text-primary-600 font-semibold hover:text-primary-700">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
