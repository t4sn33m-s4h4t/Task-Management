const User = require('../models/userModel');

const addUser = async (req, res) => {
    try { 
        const { email, displayName, userId } = req.body;
 
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json(existingUser);
        }
 
        const newUser = new User({ email, displayName, userId });
        const savedUser = await newUser.save(); 
        
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error adding User', error: error.message });
    }
};

module.exports = { addUser };
