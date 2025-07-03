const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true 
    },
    email: {
        type: String, 
        unique: true, 
        lowercase: true, 
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] ,
        required: true
    },
    password: {
        type: String, 
        trim: true,
        required: true
    },
    courses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course',
        default: []
    },
    batch: {type: String, enum: ['VSICS' , 'DAMS_9:30' , 'DAMS_11:30'] },
    role: {type: String, enum: ['user' , 'admin'], default: 'user'},
    phone: { type: String },
    occupation: { type: String },
    city: { type: String },
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);