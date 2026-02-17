exports.getKuppi = (req, res) => {
    res.status(200).json({ message: "Get all kuppi sessions" });
};

exports.test = (req, res) => {
    res.status(200).json({ message: "Kuppi module is working" });
};
