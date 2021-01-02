const express = require('express')
const router =  express.Router()
const CategoryController = require('../App/Controllers/Provider/CategoryController')

router.post('/category',(req,res,next)=>{
    return CategoryController.createCategory({req,res,next})
})
router.get('/category',(req,res,next)=>{
    return CategoryController.getAllCategory({req,res,next})
})
router.get('/category/:id',(req,res,next)=>{
    return CategoryController.getOneCategory({req,res,next})
})
router.delete('/category/:id',(req,res,next)=>{
    return CategoryController.deleteCategory({req,res,next})
})
router.patch('/category/:id',(req,res,next)=>{
    return CategoryController.editCategory({req,res,next})
})
module.exports = router