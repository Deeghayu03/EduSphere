const express = require('express');
const router = express.Router();
const chatbotController = require('../controller/chatbot.controller');

router.post('/', chatbotController.chat);
router.get('/test', chatbotController.test);

module.exports = router;
