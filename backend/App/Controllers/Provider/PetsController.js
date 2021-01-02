const PetsService = require('../../Service/PetsService')
class PetsController {
    constructor(){
        this.petsservice = PetsService
    }
    async createPet({req,res,next}){
        const {body} = req
        return await this.petsservice.createPets(body,res)
    }
    async editPet({req,res,next}){
        return await this.petsservice.editPets(req,res)
    }
    async deletePet({req,res,next}){
        return await this.petsservice.deletePets(req,res)
    }
    async getAllpet({req,res,next}){
        return await this.petsservice.getAllpets(req,res)
    }
    async getOnepet({req,res,next}){
        return await this.petsservice.getOnepets(req,res)
    }
}
module.exports = new PetsController()