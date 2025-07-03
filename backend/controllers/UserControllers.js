const User = require('../models/AuthModel')

exports.getUserProfile =  async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password -role');
        if (!user) {
            return res.status(400).json({err: 'No user found'});
        }
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.updateUserProfile = async (req, res) => {
    try {
        const updates = {};
        const allowedFields = ['name', 'email', 'phone', 'occupation', 'city'];
        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) updates[field] = req.body[field];
        });
        const user = await User.findByIdAndUpdate(
            req.user.userId,
            { $set: updates },
            { new: true, select: '-password -role' }
        );
        if (!user) {
            return res.status(400).json({ err: 'No user found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
