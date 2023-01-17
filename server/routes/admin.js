const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/', auth, (req, res) => {
    if (req.user.admin) {
        res.json({
            success: true,
            message: 'Este dado só deve ser visto por um administrador.'
        })
    } else {
        res.json({
            success: false,
            message: 'Access Denied'
        })
    }
})

module.exports = router;