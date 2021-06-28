const { Router } = require('express');

const 
{ 
 getUser,
 postUser,
 putUser,
 deleteUser,
 patchUser
} = require('../controller/user');


const router = Router();


router.get('/',  getUser);

router.post('/', postUser);

router.put('/:id',putUser );

router.delete('/',deleteUser );

router.patch('/', patchUser);



module.exports = router;