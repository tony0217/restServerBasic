const { response, request } = require('express');
const User= require('../models/user.model');
const bcrypt = require('bcrypt');

const {generateJWT } = require('../helper/jwt-generate');



const login = async (req = request, res = response) => {

    try {


        const { email, password } = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                msg: 'usuario no se encuentra registrado',
                
           });
        }

        if (!user.estado) {
            return res.status(400).json({
                msg: 'usuario no se encuentra registrado',
                
           });
        }


        // compare password
        const Validpassword = await bcrypt.compareSync(password, user.password);

        if (!Validpassword) {
            return res.status(400).json({
                msg: 'Contraseña  incorrecta',
           });
        }


        // jwt

        const token = await generateJWT(user.id);

        
       res.status(201).json({
            msg: 'login ok',
            user,
            token
       });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'error 500 contactar con el administrador',
            
       });
        
    }

}


module.exports = {
    login,
    
}