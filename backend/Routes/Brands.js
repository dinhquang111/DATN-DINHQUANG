const express = require('express');
const router = express.Router();
const BrandsController = require('../App/Controllers/Provider/BrandsController')
const multer = require('multer');

router.post('/addbrands', (req, res, next) => {
    return BrandsController.creatBrand({ req, res, next })
})
router.patch('/brands/:id', (req, res, next) => {
    return BrandsController.editBrand({ req, res, next })
})
router.get('/getallbrands',(req, res, next) => {
    return BrandsController.getAddBrand({ req, res, next })
})
router.get('/brands/:id',(req,res,next)=>{
    return BrandsController.getOneBrand({req,res,next})
})
router.delete('/brands/:id',(req,res,next)=>{
    return BrandsController.DeleteBrand({req,res,next})
})
module.exports = router;