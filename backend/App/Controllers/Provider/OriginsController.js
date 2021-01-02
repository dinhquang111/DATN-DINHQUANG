const OriginsService = require("../../Service/OriginsService")

class OriginsController{
    constructor(){
        this.originsService = OriginsService
    }
    async createOrigin({req,res,next}){
        const {body} = req
        return await this.originsService.createOrigins(body,res)
    }

    async editOrigin({req,res,next}){
        return await this.originsService.editOrigins(req,res)
    }

    async deleteOrigin({req,res,next}){
        return await this.originsService.deleteOrigins(req,res)
    }
    async getAllOrigin({req,res,next}){
        return await this.originsService.getAllorigins(req,res)
    }
    async getOneorigin({req,res,next}){
        return await this.originsService.getOneorigins(req,res)
    }
}
module.exports = new OriginsController()