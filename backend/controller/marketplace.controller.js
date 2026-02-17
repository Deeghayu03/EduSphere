exports.getMarketplace = (req, res) => {
    res.status(200).json({ message: "Get all marketplace items" });
};

exports.test = (req, res) => {
    res.status(200).json({ message: "Marketplace module is working" });
};
