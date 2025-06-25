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
