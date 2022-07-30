require('dotenv').config();
require('../models/db');
const Fund = require('../models/fund');
const User = require('../models/user');
const updateBalance = require('../middleware/updateBalance');


/**
 * POST /customer/create
 * function to create customer account
 */
exports.createUser = async(req,res) => {
    const { surname, othernames, customerId, acctBalance  } = req.body
            try {
                await User.insertMany([ //mongoose function to insert data into database
                    {
                        "surname": surname,
                        "othernames": othernames,
                        "customerId": customerId,
                        "acctBalance": acctBalance,
                    }
                ]);
                res.json({message: "Customer successfully created"});
            }  catch (error) {
        res.status(500).send({message: error.message || "Error Occurred"});   
    }
}

/**
 * POST /billing/fund-account/:id
 * function to fund account of customer
 */
exports.billingTransaction = async(req,res) => {
            const { customerId, amount, status, transactionType } = req.body
            try {
                await Fund.insertMany([
                    {
                        "customerId": customerId,
                        "amount": amount,
                        "status": status,
                        "transactionType": transactionType,
                    }
                ]);
                res.json({message: "Account successfully updated"});
            }  catch (error) {
        res.status(500).send({message: error.message || "Error Occurred"});   
    }
}

/**
 * PATCH /working/transacttions/:id
 * 
 */
exports.updateTransaction = async(req,res) => {

    const filter = { _id: req.params.id };

    try {
        // Find record to be edited
        let doc = await Fund.findById(req.params.id);
        if (doc.status == "pending"){
        // Update record
        await Fund.updateOne(filter, {status: 'success'});
        //update acctBalance
        await updateBalance;
        // Save Record
        await doc.save();
        res.json({message: "The records have been updated"});
        }
        else {
            res.json({message: "Status is already \'success\'"})
        }
    }  catch (error) {
        return res.status(500).send({message: error.message || "Error Occurred"});   
}
}
