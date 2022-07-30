const User = require('../models/user');
const Fund = require('../models/fund');

const updateBalance =  async (req, res, next) => {
    const accFilter = { customerId: req.body.customerId };
    try {
        //UPDATE ACCOUNTBALANCE OF USER
        let accDoc = await User.find({customerId : req.body.customerId});
        let transaction = await Fund.findById(req.params.id)
        // Update record
        await User.updateOne(accFilter, {acctBalance: accDoc.acctBalance  + transaction.amount});

        // Save Record
        await accDoc.save();
        }
     catch (err) {
        return res.status(500).json({ message: err.mesage })
    }
    next();
}

module.exports = { updateBalance }