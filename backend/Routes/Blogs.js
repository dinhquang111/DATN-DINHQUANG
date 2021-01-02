const express = require('express')
const router = express.Router()
const BlogsController = require('../App/Controllers/Provider/BlogsController')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './blogupload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage:storage})
router.post('/blogs',upload.single('blogImage'), (req, res, next) => {
    return BlogsController.createBlog({ req, res, next })
})
router.patch('/blogs/nofile/:id',(req,res,next)=>{
    return BlogsController.editProductNoFile({req,res,next})
})
router.patch('/blogs/file/:id',upload.single('blogImage'),(req,res,next)=>{
    return BlogsController.editblogWithFile({req,res,next})
})
router.get('/blogs',({req,res,next})=>{
    return BlogsController.getAllBlog({req,res,next})
})
router.get('/blogs/:id',(req,res,next)=>{
    return BlogsController.getOneBlog({req,res,next})
})
router.delete('/blogs/:id',(req,res,next)=>{
    return BlogsController.DeleteBlog({req,res,next})
})
router.get('/blogs/category/:id',(req,res,next)=>{
    return BlogsController.findBlogwithCategory({req,res,next})
})
module.exports = router;