const express =  require("express")
const router = express.Router()
const PetsController = require("../App/Controllers/Provider/PetsController")
router.post('/pet',(req,res,next)=>{
    return PetsController.createPet({req,res,next})
})
router.get('/pet',(req,res,next)=>{
    return PetsController.getAllpet({req,res,next})
})
router.get('/pet/:id',(req,res,next)=>{
    return PetsController.getOnepet({req,res,next})
})

router.patch('/pet/:id',(req,res,next)=>{
    return PetsController.editPet({req,res,next})
})

router.delete('/pet/:id',(req,res,next)=>{
    return PetsController.deletePet({req,res,next})
})
module.exports = router;