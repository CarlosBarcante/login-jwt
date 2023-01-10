const User = require('../models/User');
const bcrypt = require('bcryptjs');

const userController = {
    register: async function (req, res) {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try {
            const savedUser = await user.save()
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    login: function (req, res) {
        console.log('login');
        res.json('Login');
    }
}

module.exports = userController;