const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/', auth, (req, res) => {
    if (req.user.admin) {
        res.send('Este dado só deve ser visto por um administrador');
    } else {
        res.status(401).send('Access Denied');
    }
})

module.exports = router;