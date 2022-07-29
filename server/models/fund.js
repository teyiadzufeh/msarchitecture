const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const billingServiceSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: 'This field is required.'
    },
    amount: {
        type: Number,
        required: 'This field is required.'
    },
    status: {
        type: String,
        required: 'This field is required.',
        default: 'pending'
    },
    transactionType: {
        type: String,
        enum: ['Deposit','Withdrawal'],
        required: 'This field is required.'
    },
    transactionDate: {
        type: Date,
        required: true,
        default: Date.now
    },
});
module.exports = mongoose.model('Transactions', billingServiceSchema);