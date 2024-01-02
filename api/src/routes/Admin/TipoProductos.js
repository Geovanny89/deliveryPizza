const express = require('express');
const {allTipesProductos,createTipeProduct,  tipeProductName,updateTipeName, deleteTipe} = require('../../controller/Admin/tipoProductos.controller')
const router = express();

router.get('/all/tipes', allTipesProductos);
router.get('/tipe/:name',tipeProductName)
router.post('/createTipe',createTipeProduct);
router.put('/update/tipe/:id',updateTipeName)
router.delete('/delete/tipe/:id', deleteTipe)


module.exports = router;