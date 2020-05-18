const axios = require('axios');
const User = require('../models/UserSchema');

//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        
        const { login, pass } = request.headers;
        
        const user = await User.findOne({login, pass});
        
        return response.json(user);
       
    },
    
    async store(request, response) {
        
        const { login, pass, name, email } = request.body;
                  
            const user = await User.create({
               login,
               pass,
               name,
               email,
               canpublish: true,
            })
        return response.json(user);
    }    
};