const UserModel = require("../Models/UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
class UserService {
    constructor() {
        this.userModel = UserModel
    }
    async createUser(body, res) {
        try {
            console.log(body)
            if (!body.username || !body.password) {
                return res.status(400).send({ "msg": "username or password is required!" });
            }

            const user = await this.userModel.find({ username: body.username })
            if (user.length) {
                return res.status(400).send({ "msg": "username is exist" })
            }
            //  const salt = await bcrypt.gentSalt(10);
            //  const hashPassword = await bcrypt.hash(body.password , salt);
            const dataInsert = {
                username: body.username,
                password: body.password,
                name: body.name,
                numberphone: body.numberphone
            }
            await this.userModel.create(new UserModel(dataInsert))
            const userN = await this.userModel.findOne({ username: body.username })
            const token = jwt.sign({_id: userN._id}, process.env.TOKEN_SECRET)

            
            return res.status(201).send({ 
                msg: "created success",
                token : token,
                name : userN.name,
                created : userN.created,
                level : userN.level,
                id : userN._id,
            });

        } catch (error) {
            return res.status(400).send({ "msg": error });
        }
    }
    async loginUser(body, res) {
        try {
            if (!body.username || !body.password) {
                return res.status(400).send({ "msg": "name or password is required!" });
            }
            const user = await this.userModel.findOne({ username: body.username })
            if (!user) {
                return res.status(400).send({ "msg": "username is not found" })
            }
            if(user.password===body.password){
                const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
                return res.status(201).send({ 
                    "msg": "login success",
                    token : token,
                    name : user.name,
                    id : user._id,
                    level : user.level,
                    created : user.created,
                 });
            }else{
                return res.status(400).send({ "msg": "password is wrong" });
            }
        } catch (error) {
            return res.status(400).send({ "msg": error });
        }
    }
    async Profiles({params}, res) {
        try{
            if(!params.id){
                return res.status(400).send({'msg':err})
            }
            await this.userModel.findById(params.id,(err,docs)=>{
                if(err) return res.status(400).send({'msg':err})
                return res.status(200).send({
                    'msg':'get-user-success',
                    user : docs
                })
            })
        }catch(err){
            return res.status(400).send({'msg':err})
        }
    }
    async UpdateUsers({params,body},res){
        try{
            if(!params.id){
                return res.status(400).send({'msg':'id is required'})
            }
            await this.userModel.findByIdAndUpdate(params.id,{...body},{new : true},
                (err,docs)=>{
                    if(err) return res.status(400).send({'msg':err})
                    return res.status(200).send({
                        'msg': "edit-success",
                        user: docs
                    })
                })
        }catch(err){
            return res.status(400).send({'msg': err})
        }
    }
    async GetallUsers(req,res){
        try{
            await this.userModel.find({},(err,docs)=>{
                if(err) return res.status(400).send({'msg':err})
                return res.status(200).send({
                    'msg':'get-success',
                    users : docs
                })
            })
        }catch(err){
            return res.status(400).send({'msg':err})
        }
    }

}
module.exports = new UserService();