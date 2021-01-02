
const express = require('express')
const router = express.Router()
const CartController = require('../App/Controllers/Provider/CartsController')

router.post('/cart', (req, res, next) => {
    return CartController.createCart({ req, res, next })
})
module.exports = router;