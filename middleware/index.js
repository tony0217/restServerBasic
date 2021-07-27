
const  validateJWT = require('../middleware/validate-jwt');
const  validateFields = require('../middleware/validate-fields');
const  validateRole = require('../middleware/validate-rol');
const  validareCategory = require('../middleware/validate-category');

module.exports = {
    ...validateJWT,
    ...validateFields,
    ...validateRole,
    ...validareCategory
}