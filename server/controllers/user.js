const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    register: async function (req, res) {
        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) {
            return res.status(400).send('Email already exists.');
        }

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
    login: async function (req, res) {
        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) {
            return res.status(400).send("Email or Password invalid");
        }

        const passwordMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if (!passwordMatch) {
            return res.status(400).send("Email or Password invalid");
        }

        const token = jwt.sign({ _id: selectedUser._id, email: selectedUser.email, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

        res.header('authorization-token', token)
        res.send("User Logged");
    }
}

module.exports = userController;