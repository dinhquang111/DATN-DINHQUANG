const express = require('express')
const router = express.Router()
const ForumController = require('../../App/Controllers/Provider/Forum/ForumController')

router.post('/forum',(req,res,next)=>{
    return ForumController.createForum({req,res,next})
})
router.get('/forum',(req,res,next)=>{
    return ForumController.getAllForum({req,res,next})
})
router.patch('/forum/:id',(req,res,next)=>{
    return ForumController.editForum({req,res,next})
})
router.delete('/forum/:id',(req,res,next)=>{
    return ForumController.DeleteForum({req,res,next})
})
router.get('/forum/:id',(req,res,next)=>{
    return ForumController.getForum({req,res,next})
})
module.exports = router