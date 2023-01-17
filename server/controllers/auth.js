const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('authorization-token');
    if (!token) {
        return res.json({
            success: false,
            message: 'Need to be logged to access this area.'
        })
    }

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next()
    } catch (error) {
        return res.json({
            success: false,
            message: 'Invalid authentication, try to login again.'
        })
    }
}

module.exports = auth;