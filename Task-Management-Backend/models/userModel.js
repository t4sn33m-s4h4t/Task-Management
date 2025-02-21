const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    { 
        email: {
            type: String,
            required: true,
            unique: true,  
            match: [/.+@.+\..+/, 'Please enter a valid email address'], 
        },
        displayName: {
            type: String,
            required: true,
            trim: true,  
        },
        userId: {
            type: String,
            required: true, 
            unique: true,  
        },
    },
    {
        timestamps: true 
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
