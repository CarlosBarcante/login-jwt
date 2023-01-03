const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    console.log('register');
    res.json('Register');
});

router.post('/login', (req, res) => {
    console.log('login');
    res.json('Login');
});

module.exports = router;