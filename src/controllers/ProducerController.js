const axios = require('axios');
const Producer = require('../models/ProducerSchema');

const mongoose = require('mongoose');

module.exports = {
    async index(request, response){

        const userid = request.headers.authorization;              
        const producers = await Producer.find({userid: userid}).sort({_id:-1});
        return response.json(producers);
    },
    
    async index_login_producer(request, response){

        const {login} = request.headers;              
        const producer = await Producer.findOne({login});
        return response.json(producer);
    },

    async store(request, response) {
        
        const userid = request.headers.authorization;

        const {name, login, address, telephone} = request.body;
        
                        
        const producer = await Producer.create({
               name,
               login,
               address,
               telephone,
               userid,
        })
        return response.json(producer);
    },

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;
        
        const producers = await Producer.findOne({_id:id});

        if( producers.userid != user_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        
        const producer = await Producer.deleteOne(
            {_id: id})
        
        return response.status(204).send();
    }


};