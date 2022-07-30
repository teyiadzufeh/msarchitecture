const express = require('express')
const router = express.Router()
require('dotenv').config();
const serviceController = require('../controllers/serviceControllers');
const getUser = require("../middleware/getUser");


router.post('/fund-account/:id', getUser, serviceController.billingTransaction);

module.exports = router