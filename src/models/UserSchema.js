const mongoose = require('mongoose');
require('dotenv').config()
const UserSchema = new mongoose.Schema({
    login: {type: String, required: true, unique: true},
    pass: String,
    name: String,
    email: String,
    canpublish: Boolean,
    });

    module.exports = mongoose.model('User', UserSchema);