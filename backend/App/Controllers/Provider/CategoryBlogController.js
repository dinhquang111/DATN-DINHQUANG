const CategoryBlogService = require('../../Service/CategoryBlogService')
class CategoryBlogController{
    constructor(){
        this.categoryBlogService = CategoryBlogService
    }
    async createCategoryBlog({req,res,next}){
        return await this.categoryBlogService.createCategoryBlogs(req,res);
    }
    async getAllCategoryBlogs({req,res,next}){
        return await this.categoryBlogService.getAllCategoryBlogs(req,res)
    }
}
module.exports = new CategoryBlogController()