const UserService   = require('../../Service/UserService')
class UserController{
    constructor(){
        this.userService = UserService
    }
    async createUser({req,res,next}){
        const {body} = req;
        return await this.userService.createUser(body,res);
    }
    async UpdateUser({req,res,next}) {
        return await this.userService.UpdateUsers(req,res);
    }
    async Profile({req,res,next}){
        return await this.userService.Profiles(req,res)
    }
    async loginUser({req,res,next}){
        const {body} = req;
        return await this.userService.loginUser(body,res);
    }
    async GetallUser({req,res,next}){
        return await this.userService.GetallUsers(req,res)
    }
}
module.exports = new UserController();