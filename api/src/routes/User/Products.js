const express = require("express");
const { productoUser } = require("../../controller/User/producto.controller");

const router = express();

router.get('/user/allProducts', productoUser)

module.exports = router