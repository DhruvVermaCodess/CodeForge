const mongoose = require('mongoose');

const careerCounsellingSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
    },
    prefferedLanguage: {
        type: String,
        required: true,
        enum: ['English', 'Hindi'],
        default: 'Hindi'
    },
    experienceLevel: {
        type: String,
        required: true,
        enum: ['School_Student' , 'College_Student', 'Graduated' , 'Currently_Working_In_NonIt' , 'Currently_Working_In_It'],
        default: 'School_Student'
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CareerCounselling', careerCounsellingSchema);