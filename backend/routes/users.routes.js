const express = require('express');
const router = express.Router();
const userController = require('../controller/users.controller');

router.get('/', userController.getUsers);
router.get('/test', userController.test);

module.exports = router;
