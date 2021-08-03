const { response, request } = require('express');

const validateFile = (req, res,next) => {

    if (
        !req.files || 
        Object.keys(req.files).length === 0 || 
        !req.files.file
    ) {
        return res.status(400).json({
            msg: 'El archivo no fue cargado'
        });
    }

    next();
}

module.exports = {  
    validateFile
}