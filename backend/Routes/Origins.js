const express =  require("express")
const router = express.Router()
const OriginsController = require("../App/Controllers/Provider/OriginsController")
router.post('/origin',(req,res,next)=>{
    return OriginsController.createOrigin({req,res,next})
})
router.get('/origin',(req,res,next)=>{
    return OriginsController.getAllOrigin({req,res,next})
})
router.get('/origin/:id',(req,res,next)=>{
    return OriginsController.getOneorigin({req,res,next})
})

router.patch('/origin/:id',(req,res,next)=>{
    return OriginsController.editOrigin({req,res,next})
})

router.delete('/origin/:id',(req,res,next)=>{
    return OriginsController.deleteOrigin({req,res,next})
})

module.exports = router;