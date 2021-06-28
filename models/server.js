const express = require('express');
const cors = require('cors')
const DIR_PUBLIC = express.static('public');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        //middlewares
        this.middlewares();


    
        //rutas app
        this.route();
       
    }


    middlewares(){

        //cors
        this.app.use(cors());


        
        // parse body
        this.app.use( express.json() );

    
       //traer carptas estaticas
        this.app.use(DIR_PUBLIC);
    }

    route(){

       // rutas user
       this.app.use(this.userPath, require('../routes/user'));


    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }



}


module.exports = Server;