const express = require('express');
const { updateUser, deleteUser } = require('../../controller/User/user.controller');

const router = express();

router.put('/user/update/:id',updateUser)
router.delete('/user/delete/:id',deleteUser)

module.exports=router