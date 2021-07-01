
const mongoose = require('mongoose');

const dbConenection = async () => {

    try {

        // conexion db
       await mongoose.connect( process.env.MONGODB_CNN, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:true
       });

       //console.log('db up');
        
    } catch (error) {
        console.log(error);
        throw new Error(' error en la base de datos')
        
    }

}


module.exports = {dbConenection};