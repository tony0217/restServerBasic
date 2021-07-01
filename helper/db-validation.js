const Rol = require('../models/rol.model');
const User = require('../models/user.model');


const rolValidate = async (rol)=>{

    //rol existe
    const rolExist = await Rol.findOne({rol});
    if (!rolExist) throw new Error(` El rol ${rol} no existe en la DB`);
}

const emailValidate = async (email)=>{

     //email existe
     const emailExist = await User.findOne({email});
     if (emailExist) throw new Error(` El correo ${email} ya existe en la DB`);
}




const UserExistById = async (id)=>{

    //user existe
    const userExist = await User.findById(id);
    if (!userExist) throw new Error(` El usuario con el id:${id}  no existe en la DB`);
}



      


module.exports = {
    rolValidate,
    emailValidate,
    UserExistById
};