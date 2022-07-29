require('dotenv').config();
require('../models/db');
const fund = require('../models/fund');
const user = require('../models/user');
// const User = require('../models/user');


/**
 * POST /customer/create
 * 
 */
exports.createUser = async(req,res) => {
    const { surname, othernames, customerId, acctBalance  } = req.body
            try {
                await user.insertMany([
                    {
                        "surname": surname,
                        "othernames": othernames,
                        "customerId": customerId,
                        "acctBalance": acctBalance,
                    }
                ]);
                res.json(res.user);
            }  catch (error) {
        res.status(500).send({message: error.message || "Error Occurred"});   
    }
}

/**
 * POST /billing/fund-account
 * 
 */
exports.billingTransaction = async(req,res) => {

            const { customerId, amount, status, transactionType } = req.body
            try {
                await fund.insertMany([
                    {
                        "customerId": customerId,
                        "amount": amount,
                        "status": status,
                        "transactionType": transactionType,
                    }
                ]);
            }  catch (error) {
        res.status(500).send({message: error.message || "Error Occurred"});   
    }
}
