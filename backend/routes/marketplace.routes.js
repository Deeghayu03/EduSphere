const express = require('express');
const router = express.Router();
const marketplaceController = require('../controller/marketplace.controller');

router.get('/', marketplaceController.getMarketplace);
router.get('/test', marketplaceController.test);

module.exports = router;
