const ForumChillService = require('../../../Service/Forum/ForumChillService')

class ForumChillController{
    constructor(){
        this.forumchillservice = ForumChillService
    }
    async creatChill({req,res,next}){
        return await this.forumchillservice.creatChills(req,res)
    }
    async getListChill({req,res,next}){
        return await this.forumchillservice.getListChills(req,res)
    }
    async getAllChill({req,res,next}){
        return await this.forumchillservice.getAllChills(req,res)
    }
}
module.exports = new ForumChillController()