const express = require('express');
const router = express.Router();

// Import routes
const userRoutes = require('./users.routes');
const kuppiRoutes = require('./kuppi.routes');
const engagementRoutes = require('./engagement.routes');
const marketplaceRoutes = require('./marketplace.routes');
const chatbotRoutes = require('./chatbot.routes');
const gradePredictorRoutes = require('./gradePredictor.routes');

// Mount routes
router.use('/users', userRoutes);
router.use('/kuppi', kuppiRoutes);
router.use('/engagement', engagementRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/chatbot', chatbotRoutes);
router.use('/grade-predictor', gradePredictorRoutes);

module.exports = router;
