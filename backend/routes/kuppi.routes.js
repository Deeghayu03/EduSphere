const express = require('express');
const router = express.Router();
const kuppiController = require('../controller/kuppi.controller');

router.get('/', kuppiController.getKuppi);
router.get('/test', kuppiController.test);

module.exports = router;
