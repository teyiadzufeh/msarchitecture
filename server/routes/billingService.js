const express = require('express')
const router = express.Router()
require('dotenv').config();
const serviceController = require('../controllers/serviceControllers');
const getUser = require("../middleware/getUser");


router.post('/fund-account', serviceController.billingTransaction);

module.exports = router