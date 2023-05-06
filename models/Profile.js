const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
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
        type: String,
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
        type: String
    },
    university: {
        type: String
    },
});

const StudentProfile = mongoose.model('StudentProfile', ProfileSchema);

module.exports = StudentProfile;