const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'Token format is invalid or missing' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user; 
        next();
        
    } catch (err) {
        res.status(403).json({ msg: 'Token is not valid or has expired' });
    }
};

module.exports = authenticateToken;