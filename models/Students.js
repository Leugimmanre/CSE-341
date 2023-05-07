const mongoose = require("mongoose");
const generateId = require('../helpers/generateId.js');
const { number, string } = require("joi");

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,

    },
    degree: {
        type: String,
        default: null
    },
    university: {
        type: String,
    }
});

const StudentProfile = mongoose.model('StudentProfile', studentSchema);

module.exports = StudentProfile;