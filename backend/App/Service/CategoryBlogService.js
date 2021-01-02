const CategoryBlogModel = require('../Models/CategoryBlogModel')

class CategoryBlogService {
    constructor(){
        this.categoryBlogModel = CategoryBlogModel
    }

    async createCategoryBlogs({body},res){
        try{
            if(!body.name){
                return res.status(400).send({'msg':'name is required'})
            }
            const blog = await this.categoryBlogModel.find({name : body.name})
            if(blog.length){
                return res.status(400).send({"msg":"name is exist"})
            }
            const newCategoryBlog = new CategoryBlogModel({
                name : body.name
            })
            newCategoryBlog.save((err)=>{
                if(err) return res.status(400).send({'msg':err})
                return res.status(201).send({'msg':'created success'})
            })
        }catch(err){
            return res.status(400).send({'msg':err})
        }
    }
    async getAllCategoryBlogs(req,res){
        
        await this.categoryBlogModel.find({},(err,docs)=>{
            console.log(docs);
            if(err) return res.status(400).send({'msg':err})
            return res.status(201).send({
                categoryblog : docs,
                msg :'getlist-success'

            })
        })
    }
}
module.exports = new CategoryBlogService()