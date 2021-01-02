const express = require('express')
const router = express.Router()
const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./upload/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname)
    }
})
const upload = multer({storage:storage})
router.post('/image',upload.single('productImage'),(req,res,next)=>{
    console.log(req.file);
    return res.status(201).send({'msg':'done'})
})
module.exports = router