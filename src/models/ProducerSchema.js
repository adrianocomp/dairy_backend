const mongoose = require('mongoose');
const User = require('./UserSchema');



const ProducerSchema = new mongoose.Schema({
    name: String,
    login: String,
    address: String,
    telephone: String,
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    }); 

module.exports = mongoose.model('Producer', ProducerSchema);