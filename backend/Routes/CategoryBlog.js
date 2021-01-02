const express = require('express')
const router = express.Router()
const CategoryBlogController = require('../App/Controllers/Provider/CategoryBlogController')

router.post('/categoryblog',(req,res,next)=>{
    return CategoryBlogController.createCategoryBlog({req,res,next})
})
router.get('/categoryblog',(req,res,next)=>{
    return CategoryBlogController.getAllCategoryBlogs({req,res,next})
})

module.exports = router