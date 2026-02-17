exports.getEngagement = (req, res) => {
    res.status(200).json({ message: "Get all engagement data" });
};

exports.test = (req, res) => {
    res.status(200).json({ message: "Engagement module is working" });
};
