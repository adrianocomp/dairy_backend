const mongoose = require('mongoose');
const User = require('./UserSchema');


const TesteSchema = new mongoose.Schema({
    name: String,
    date: {type: Date},
    time: String,
    cpp: {type: Number},
    ccs:{type:Number},
    temp:{type: Number},
    alizarol: String,
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    },{
    timestamps:true,
    }
    ); 

module.exports = mongoose.model('Teste', TesteSchema);