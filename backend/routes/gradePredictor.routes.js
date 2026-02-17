const express = require('express');
const router = express.Router();
const gradePredictorController = require('../controller/gradePredictor.controller');

router.get('/', gradePredictorController.predict);
router.get('/test', gradePredictorController.test);

module.exports = router;
