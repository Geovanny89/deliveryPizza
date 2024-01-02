const express = require('express');
const {allProduct,createProduct, productName, updateProduct, deleteProduct} = require('../../controller/Admin/productos.controller')
const router = express();

router.get('/allProduct',allProduct)
router.get('/:name',productName)
router.post('/create',createProduct);
router.put('/update/:id',updateProduct)
router.delete('/delete/:id',deleteProduct)


module.exports = router