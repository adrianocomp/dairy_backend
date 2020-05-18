const axios = require('axios');
const Teste = require('../models/TesteSchema');

const mongoose = require('mongoose');
//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        
        const userid = request.headers.authorization;
        
        const testes = await Teste.find(
            {userid: userid}).sort({_id:-1});
        return response.json(testes);
    },

    async index_producer(request, response){
        
        const {producername} = request.headers;
        
        const testes = await Teste.find(
            {name: producername}).sort({_id:-1});
        return response.json(testes);
    },
    
    async store(request, response) {
        
        const userid = request.headers.authorization;
        
        const {name, date, time, cpp, ccs, temp, alizarol} = request.body;
          
        const teste = await Teste.create({
               name,
               date,
               time,
               cpp,
               ccs,
               temp,
               alizarol,
               userid,
        })
        return response.json(teste);
        
    },
    
    async update_teste(request, response) {
        
        const  teste_id  = request.params.id;
        
        const user_id = request.headers.authorization;
        
        const name = request.body.name;
        const date = Date.parse(request.body.date);
        const time = request.body.time;
        const cpp = Number(request.body.cpp);
        const ccs = Number(request.body.ccs);
        const temp = Number(request.body.temp);
        const alizarol = request.body.alizarol;
        
           
        const teste = await Teste.findByIdAndUpdate(teste_id,
                {name, 
                date, 
                time,
                cpp,
                ccs,
                temp,
                alizarol,
                user_id},
               {new:true},
               function(err, doc){
                console.log(err);
                })

        return response.json(teste).status(204).send();
        
    },   

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;
        
        const testes = await Teste.findOne({_id:id});

        if( testes.userid != user_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        
        const teste = await Teste.deleteOne(
            {_id: id})
        
        return response.status(204).send();
    }

};