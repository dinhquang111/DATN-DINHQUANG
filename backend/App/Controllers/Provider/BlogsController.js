const BlogsService = require('../../Service/BlogsService')

class BlogsController{
    constructor(){
        this.blogsService = BlogsService
    }
    async createBlog({req,res,next}){
        return await this.blogsService.createBlogs(req,res)
    }
    async getAllBlog({req,res,next}){
        return await this.blogsService.getAllBlogs(req,res)
    }
    async getOneBlog({req,res,next}){
        return await this.blogsService.getOneBlogs(req,res)
    }
    async DeleteBlog({req,res,next}){
        return await this.blogsService.DeleteBlogs(req,res)
    }
    async findBlogwithCategory({req,res,next}){
        return await this.blogsService.findBlogwithCategorys(req,res)
    }
    async editProductNoFile({req,res,next}){
        return await this.blogsService.editProductNoFiles(req,res)
    }
    async editblogWithFile({req,res,next}){
        return await this.blogsService.editblogWithFiles(req,res)
    }
}
module.exports = new BlogsController()