const express = require('express')
const router = express.Router()
const ForumChillController = require('../../App/Controllers/Provider/Forum/ForumChillController')

router.post('/topic/reply',(req,res,next)=>{
    return  ForumChillController.creatChill({req,res,next})
})
router.get('/topic/reply/:id',(req,res,next)=>{
    return  ForumChillController.getListChill({req,res,next})
})
router.post('/topic/allreply',(req,res,next)=>{
    return  ForumChillController.getAllChill({req,res,next})
})
module.exports = router