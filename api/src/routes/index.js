const express = require('express')
const productos = require('./Admin/Productos')
const tipoProductos = require('./Admin/TipoProductos')
const allUser = require('./Admin/User')
const UserProducts = require('./User/Products')
const register = require('./Auth/Auth')
const router = express();

router.use(productos)
router.use(tipoProductos)
router.use(allUser)
router.use(UserProducts)
router.use(register)


module.exports = router;