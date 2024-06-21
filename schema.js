const mongoose = require('mongoose');

const PaySchema = new mongoose.Schema({
    perday_salary : {
        type: Number,
        required: true,
    },
    gross_salary : {
        type: Number,
        required: true,
    },
    pay_period : {
        type: String,
        required: true,
    },
    salary_date : {
        type: Date,
        required: true,
    },
    created_date : {
        type: Date,
        default: Date.now,
    },
    updated_date : {
        type: Date,
        default: null,
    },
    status : {
        type: String,
        default: 1,
    },

})

module.exports = mongoose.model('Pay', PaySchema);