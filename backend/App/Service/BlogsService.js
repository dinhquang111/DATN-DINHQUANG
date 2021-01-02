const BlogsModel = require('../Models/BlogsModel')

class BlogsService {
    constructor() {
        this.blogsModel = BlogsModel
    }
    async createBlogs({ body, file }, res) {
        try {
            // if (!body.id_categoryblog
            //     || !body.title
            //     || !body.introduction
            //     || !body.context || !file.filename) {
            //     return res.status(400).send({ 'msg': 'req is required' })
            // }
            // const blog = await this.blogsModel.find({ title: body.title })
            // if (blog.length) {
            //     return res.status(400).send({ 'msg': 'title is exist' })
            // }
            const newBlog = new BlogsModel({
                id_categoryblog: body.id_categoryblog,
                title: body.title,
                introduction: body.introduction,
                image: file.filename,
                context: body.context,
            })
            newBlog.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    'msg': "create success",
                    blog: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllBlogs(req, res) {
        console.log("1")
        try {
            
            await this.blogsModel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    msg: "getlist-success",
                    blogs: docs
                })
            })
        }
        catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getOneBlogs({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.blogsModel.findOne({ _id: params.id }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    blog: docs,
                    msg: 'getblog-success'
                })
            })
        }
        catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async DeleteBlogs({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID is required' })
            }
            await this.blogsModel.findByIdAndDelete(params.id, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(200).send({
                    "msg": 'Delete success!'
                })
            })
            return res.status(400).send({'msg':'id no exist'})
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async findBlogwithCategorys({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.blogsModel.find({ id_categoryblog: params.id }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    msg: 'found-success!',
                    blogs: docs
                })
            })
        }
        catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async editProductNoFiles({ params, body }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.blogsModel.findByIdAndUpdate(params.id, { ...body }, { new: true }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(200).send({
                    msg: 'update-success',
                    blog: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async editblogWithFiles({ params, body, file }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            await this.blogsModel.findByIdAndUpdate(params.id,
                { ...body, image: file.filename }, { new: true },
                (err, docs) => {
                    if (err) return res.status(400).send({ 'msg': err })
                    return res.status(200).send({
                        msg: 'update-success',
                        blog: docs
                    })
                }
            )
            return res.status(400).send({ 'msg': 'id  exist' })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
}
module.exports = new BlogsService()