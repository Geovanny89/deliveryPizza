const express = require('express');
const { allUser, updateUser, deleteUser } = require('../../controller/Admin/user.controller');

const router = express();

router.get('/all/admin/user',allUser)
router.put('/user/admin/update/:id',updateUser)
router.delete('/user/admin/delete/:id', deleteUser)


module.exports = router;
