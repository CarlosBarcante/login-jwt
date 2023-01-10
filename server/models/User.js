const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
    password: { type: String, required: true, minlength: 6, maxlength: 100 },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema);