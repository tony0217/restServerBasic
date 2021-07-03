const express = require('express');
const cors = require('cors')
const DIR_PUBLIC = express.static('public');

const { dbConenection } = require('../db/config')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.userPath = '/api/user';


        // conexion dbConenection
        this.conectionDB()

        //middlewares
        this.middlewares();


    
        //rutas app
        this.route();
       
    }

    async conectionDB(){
        await dbConenection();
    }


    middlewares(){

        //cors
        this.app.use(cors());

        // parse body
        this.app.use( express.json() );

        // traer carptas estaticas
        this.app.use(DIR_PUBLIC);
    }

    route(){

       //rutas auth
       this.app.use(this.authPath, require('../routes/auth.route'));
       // rutas user
       this.app.use(this.userPath, require('../routes/user.route'));


    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }



}


module.exports = Server;