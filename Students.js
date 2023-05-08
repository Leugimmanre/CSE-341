const mongoose = require("mongoose");
const generateId = require('../helpers/generateId.js');
<<<<<<< HEAD
=======
const { number, string } = require("joi");
>>>>>>> 8727aa301393daa777db91a187f053c5065e5f6a

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
        required: true,
    },
    university: {
        type: String,
        required: true,
    }
});

const StudentProfile = mongoose.model('StudentProfile', studentSchema);

module.exports = StudentProfile;