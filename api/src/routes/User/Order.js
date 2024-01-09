const express = require("express");
const { createOrder, updateOrder, deleteOrder } = require("../../controller/User/order.controller");

const router=express();

router.post('/order/:id', createOrder)
router.put('/order/update/:id',updateOrder)
router.delete('/order/delete/:id',deleteOrder)


module.exports = router;