const express = require('express');
const router = express.Router();


/**
 * App Routes
 */

router.use('/customer', require('./customerService'))//Customer Service Routes with /customer as prefix
router.use('/billing', require('./billingService')) //Billing Service Routes with /billing as prefix
router.use('/working', require('./billingWorkerService')) //Billing Worker Service Routes with /working as prefix


module.exports = router;