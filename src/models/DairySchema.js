const mongoose = require('mongoose');
const User = require('./UserSchema');


const DairySchema = new mongoose.Schema({
    name: String,
    address: String,
    telephone: String,
    email: String,
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    }); 
//
module.exports = mongoose.model('Dairy', DairySchema);