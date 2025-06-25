const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token)  {
        return res.status(400).json({message: 'Token is missing'})
    } 

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(404).json({message: 'Invalid token'})
    }
}

module.exports = auth
