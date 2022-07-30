const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceControllers');


router.patch('/transactions/:id', serviceController.updateTransaction);

module.exports = router