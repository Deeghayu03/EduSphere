exports.chat = (req, res) => {
    res.status(200).json({ message: "Chatbot response" });
};

exports.test = (req, res) => {
    res.status(200).json({ message: "Chatbot module is working" });
};
