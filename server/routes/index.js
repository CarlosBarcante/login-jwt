const express = require('express');
const router = express.Router();
const user = require('./user');
const admin = require('./admin');

router.use('/user', user);
router.use('/admin', admin);
router.use('/', (req, res) => {
    res.json({
        success: false,
        message: 'Please, do not call /api, it is for our server'
    })
})

module.exports = router;