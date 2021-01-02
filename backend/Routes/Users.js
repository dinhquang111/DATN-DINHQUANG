const express = require('express');
const AuthenMiddlware = require('../App/Middlewares/AuthMiddleware');
const verify = require('../App/Middlewares/verifyToken')
const router = express.Router();
const UserController = require('../App/Controllers/Provider/UserController')

router.post('/register', (req, res, next) => {
    return UserController.createUser({ req, res, next });
})
router.patch('/edit/:id', (req, res, next) => {
    return UserController.UpdateUser({ req, res, next });
})
router.post('/login', (req, res, next) => {
    return UserController.loginUser({ req, res, next });
})
router.get('/cookie', (req, res, next) => {
    res.cookie("nhan",123);
    res.send("132")
})
router.get('/profile/:id',(req,res,next)=>{
    return UserController.Profile({req,res,next})
})
router.get('/test',verify, (req, res, next) => {
    // res.send(req.user)//// decode ra lại ID
    console.log(req.cookies)
})
router.get('/profile',(req,res,next)=>{
    return UserController.GetallUser({req,res,next})
})
module.exports = router;