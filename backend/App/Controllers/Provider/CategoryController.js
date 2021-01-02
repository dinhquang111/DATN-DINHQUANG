const CategoryService = require('../../Service/CategoryService')


class CategoryController {
    constructor() {
        this.categoryService = CategoryService
    }
    async createCategory({req, res, next}) {
        return await this.categoryService.createCategorys(req, res)
    }
    async getAllCategory({req,res,next}){
        return await this.categoryService.getAllCategorys(req,res)
    }
    async getOneCategory({req,res,next}){
        return await this.categoryService.getOneCategorys(req,res)
    }
    async deleteCategory({req,res,next}){
        return await this.categoryService.deteleCategorys(req,res)
    }
    async editCategory({req,res,next}){
        return await this.categoryService.editCategorys(req,res)
    }
}
module.exports = new CategoryController()