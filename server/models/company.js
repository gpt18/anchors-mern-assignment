const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
    },
    websiteLink: {
        type: String,
    },
    companySize: {
        type: String,
    },
    companyLogo: {
        type: String,
    },
    postRoles: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'JOB'
        }
    ],
    balance: {
        type: Number,
        default: 0
    },
    accountHistory: [
        {
            amount: {
                type: Number
            },
            type: {
                type: String
            },
            date: {
                type: Date
            },
            reason: {
                type: String
            }
    
        }
    ]

},{timestamps: true});

const Company = mongoose.model('COMPANY', companySchema);

module.exports = Company;