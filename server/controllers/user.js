const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidate, registerValidate } = require('./validate');

const userController = {
    register: async function (req, res) {
        const { error } = registerValidate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists.'
            })
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try {
            const savedUser = await user.save()
            res.status(200).json({
                success: true,
                message: 'User registered with success'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    login: async function (req, res) {
        const { error } = loginValidate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) {
            return res.status(400).json({
                success: false,
                message: 'Email or Password invalid.'
            })
        }

        const passwordMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Email or Password invalid.'
            })
        }

        const token = jwt.sign({ _id: selectedUser._id, email: selectedUser.email, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

        res.header('authorization-token', token)
        res.send("User Logged");
        res.status(200).json({
            success: true,
            message: 'User Logged.',
            authorization_token: token
        })
    }
}

module.exports = userController;