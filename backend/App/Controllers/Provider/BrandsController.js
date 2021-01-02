const BrandsService = require('../../Service/BrandsService')
class BrandController{
    constructor(){
        this.brandService = BrandsService
    }
    async creatBrand({req,res,next}){
        return await this.brandService.createBrands(req,res);
    }
    async getAddBrand({req,res,next}){
        return await this.brandService.getAllbrands(req,res);
    }
    async editBrand({req,res,next}){
        return await this.brandService.editBrands(req,res);
    }
    async getOneBrand({req,res,next}){
        return await this.brandService.getOneBrands(req,res)
    }
    async DeleteBrand({req,res,next}){
        return await this.brandService.DeleteBrands(req,res)
    }
}
module.exports = new BrandController()