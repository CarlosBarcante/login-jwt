const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('authorization-token');
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    res.send('Token recebido');
}

module.exports = auth;