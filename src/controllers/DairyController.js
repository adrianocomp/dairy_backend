const axios = require('axios');
const Dairy = require('../models/DairySchema');
const User = require('../models/UserSchema');

const mongoose = require('mongoose');
//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        
        const userid = request.headers.authorization;
        
        const dairys = await Dairy.find(
            {userid: userid}).sort({userid:-1});
        return response.json(dairys);
    },
    
    async store(request, response) {
        
        const {name, address, telephone, email} = request.body;
        
        const userid = request.headers.authorization;
        
        const dairy = await Dairy.create({
               name,
               address,
               telephone,
               email,
               userid,
        })
        return response.json(dairy);
    },   

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;
        
        const dairys = await Dairy.findOne({_id:id});

        console.log(dairys.userid);

        if( dairys.userid != user_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        
        const dairy = await Dairy.deleteOne(
            {_id: id})
        
        return response.status(204).send();
    }

};