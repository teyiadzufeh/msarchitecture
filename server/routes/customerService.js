const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceControllers');
const getUser = require("../middleware/getUser");



router.post('/create', serviceController.createUser);

module.exports = router