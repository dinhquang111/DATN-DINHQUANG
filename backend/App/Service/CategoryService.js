const CategoryModel = require('../Models/CategoryModel')
const ProductModel = require('../Models/ProductModel')
class CategoryService {
    constructor() {
        this.categoryModel = CategoryModel,
            this.productModel = ProductModel
    }
    async createCategorys({ body }, res) {
        try {
            if (!body.name) {
                return res.status(400).send({ 'msg': 'name is required' })
            }
            const category = this.categoryModel.find({ name: body.name })
            if (category.length) {
                return res.status(400).send({ 'msg': 'name is exist' })
            }
            const newCategory = new CategoryModel({
                name: body.name
            })
            newCategory.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    'msg': 'created success',
                    category: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllCategorys(req, res) {
        try {
            await this.categoryModel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    category: docs,
                    msg: 'getlist-success'
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getOneCategorys({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID is required' })
            }
            await this.categoryModel.findById(params.id, (err, docs) => {
                if (err) return res.status(400).send({ "msg": err })
                return res.status(201).send({
                    msg: "getcategorys-success",
                    category: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async deteleCategorys({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID is required' })
            }
            const categoryE = await this.categoryModel.findByIdAndDelete(params.id)
            const dele = await this.productModel.deleteMany({ id_category: params.id })
            if (categoryE && dele) {
                await this.categoryModel.find({}, (err, docs) => {
                    if (err) return res.status(400).send({ 'msg': err })
                    return res.status(201).send({
                        msg: "Delete success!"
                    })
                })
            }
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async editCategorys({ params, body }, res) {
        try {
            if (!params.id || !body) {
                return res.status(400).send({ 'msg': "requied" })
            }
            await this.categoryModel.findByIdAndUpdate(params.id, { ...body }, { new: true }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    'msg': 'Update success!',
                    category: docs
                })
            })
            return res.status(400).send({ 'msg': "ID is exist" })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }

}

module.exports = new CategoryService()