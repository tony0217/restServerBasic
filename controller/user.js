const { response, request } = require('express');

const getUser = (req, res = response) => {

    // query params
    const {q,nombre,apikey,page=1,limit } = req.query;

    res.json({
        msg: 'get Api - controller',
        q,
        nombre,
        apikey,
        page,
        limit 
    });

}

const postUser = (req = request, res = response) => {

    const {nombre,edad } = req.body;

    res.json({
        msg: 'post Api - controller',
        nombre,
        edad
    });
}


const putUser = (req = request, res = response) => {

     //  params route
    const {id} = req.params
    const {nombre,edad } = req.body;

    res.status(200).json({
        msg: 'put Api hey loco que pasa valemia!',
        id,
        nombre,
        edad
    });
}


const deleteUser = (req = request, res = response) => {
    res.json({
        msg: 'delete Api'
    });
}


const patchUser = (req = request, res = response) => {
    res.json({
        msg: 'patch Api'
    });
}




module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    patchUser
}