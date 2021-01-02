const ProductService = require('../../Service/ProductService')

class ProductController{
    constructor(){
        this.productservice = ProductService
    }
    async createProduct({req,res,next}){
        return await this.productservice.createProducts(req,res)
    }
    async getAllproduct({req,res,next}){
        return await this.productservice.getAllproducts(req,res)
    }
    async deleteProduct({req,res,next}){
        return await this.productservice.deleteProducts(req,res)
    }
    async findProduct({req,res,next}){
        return await this.productservice.findProducts(req,res)
    }
    async findProductwithCategory({req,res,next}){
        return await this.productservice.findProductwithCategorys(req,res)
    }
    async editProductWithFile({req,res,next}){
        return await this.productservice.editProductWithFiles(req,res)
    }
    async editProductNoFile({req,res,next}){
        return await this.productservice.editProductNoFiles(req,res)
    }
}
module.exports = new ProductController()