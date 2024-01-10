const express = require('express');
const {allProduct,createProduct, productName, updateProduct, deleteProduct} = require('../../controller/Admin/productos.controller');
const authMiddleware = require('../../middleware/sesion');
const checkRol = require('../../middleware/rol');
const router = express();

router.get('/allProduct',authMiddleware,checkRol(["admin"]),allProduct)
router.get('/:name',authMiddleware,checkRol(["admin"]),productName)
router.post('/create',authMiddleware,checkRol(["admin"]),createProduct);
router.put('/update/:id',authMiddleware,checkRol(["admin"]),updateProduct)
router.delete('/delete/:id',authMiddleware,checkRol(["admin"]),deleteProduct)


module.exports = router