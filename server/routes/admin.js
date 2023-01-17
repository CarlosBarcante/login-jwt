const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/', auth, (req, res) => {
    res.send('Este dado só deve ser visto por um administrador');
})

module.exports = router;