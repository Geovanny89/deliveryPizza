const express = require('express');
const { allUser } = require('../../controller/Admin/user.controller');

const router = express();

router.get('/all/user',allUser)
module.exports = router;
