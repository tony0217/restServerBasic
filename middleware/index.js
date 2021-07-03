
const  validateJWT = require('../middleware/validate-jwt');
const  validateFieds = require('../middleware/validate-fields');
const  validateRole = require('../middleware/validate-rol');

module.exports = {
    ...validateJWT,
    ...validateFieds,
    ...validateRole
}