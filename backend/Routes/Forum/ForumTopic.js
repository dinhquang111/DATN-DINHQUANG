const express = require('express')
const router = express.Router()
const ForumTopicController = require('../../App/Controllers/Provider/Forum/ForumTopicController')

router.post('/topic',(req,res,next)=>{
    return ForumTopicController.createTopic({req,res,next})
})
router.get('/topic/:id',(req,res,next)=>{
    return ForumTopicController.getTopic({req,res,next})
})
router.get('/topic/detail/:id',(req,res,next)=>{
    return ForumTopicController.getOneTopic({req,res,next})
})
router.get('/topic/:id/views',(req,res,next)=>{
    return ForumTopicController.increView({req,res,next})
})
router.delete('/topic/:id',(req,res,next)=>{
    return ForumTopicController.deleteTopic({req,res,next})
})
router.get('/topic',(req,res,next)=>{
    return ForumTopicController.getAllTopic({req,res,next})
})
module.exports = router