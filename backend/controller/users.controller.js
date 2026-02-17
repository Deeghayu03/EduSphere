exports.getUsers = (req, res) => {
    res.status(200).json({ message: "Get all users" });
};

exports.test = (req, res) => {
    res.status(200).json({ message: "Users module is working" });
};
