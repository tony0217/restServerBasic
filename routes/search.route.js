const { Router } = require('express');
const { check } = require('express-validator');

// middelware
const {
    validateJWT,
    validateFields,
    validateAdminRole,
    validateHasRole
} = require('../middleware');


const { CategoryExistById } = require('../helper/db-validation');

const { getCategory, } = require('../controller/category.controller');
const { search } = require('../controller/search.controller');

const router = Router();



router.get('/', search);
router.get('/:collection/:arg', search);


module.exports = router;