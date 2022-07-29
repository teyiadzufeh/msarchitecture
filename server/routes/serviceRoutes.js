const express = require('express');
const router = express.Router();


/**
 * App Routes
 */

router.use('/customer', require('./customerService'))//Customer Service Routes
router.use('/billing', require('./billingService')) //Billing Service Routes
router.use('/working', require('./billingWorkerService')) //Billing Worker Service Routes


module.exports = router;