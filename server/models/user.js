const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: 'This field is required.'
    },
    othernames: {
        type: String,
        required: 'This field is required.'
    },
    customerId: {
        type: String,
        required: 'This field is required.'
    },
    acctBalance: {
        type: Number,
        required: 'This field is required.'
    },
    created: {
        type: Date,
        required: 'This field is required.',
        default: Date.now
    },
});

module.exports = mongoose.model('Users', userSchema);