const express = require('express')
const router = express.Router()
const ProductController = require('../App/Controllers/Provider/ProductController')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload2/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
router.post('/product', upload.single('productImage'), (req, res, next) => {
    return ProductController.createProduct({ req, res, next })
})
router.patch('/product/withfile/:id', upload.single('productImage'), (req, res, next) => {
    return ProductController.editProductWithFile({ req, res, next })
})
router.patch('/product/nofile/:id',(req,res,next)=>{
    return ProductController.editProductNoFile({req,res,next})
})
router.get('/product', (req, res, next) => {
    return ProductController.getAllproduct({ req, res, next })
})
router.delete('/product/:id', (req, res, next) => {
    return ProductController.deleteProduct({ req, res, next })
})
router.get('/product/:id', (req, res, next) => {
    return ProductController.findProduct({ req, res, next })
})
router.get('/product/category/:id', (req, res, next) => {
    return ProductController.findProductwithCategory({ req, res, next })
})

module.exports = router;