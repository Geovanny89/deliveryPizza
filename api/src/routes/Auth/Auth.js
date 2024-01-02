const express = require('express');
const { register } = require('../../controller/Auth/auth.controller');
const { validateRegister } = require('../../validators/auth');

const router= express();

router.post('/register',validateRegister, register)

module.exports=router