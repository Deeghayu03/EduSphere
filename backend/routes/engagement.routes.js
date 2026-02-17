const express = require('express');
const router = express.Router();
const engagementController = require('../controller/engagement.controller');

router.get('/', engagementController.getEngagement);
router.get('/test', engagementController.test);

module.exports = router;
