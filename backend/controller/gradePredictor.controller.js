exports.predict = (req, res) => {
    res.status(200).json({ message: "Grade prediction result" });
};

exports.test = (req, res) => {
    res.status(200).json({ message: "Grade Predictor module is working" });
};
