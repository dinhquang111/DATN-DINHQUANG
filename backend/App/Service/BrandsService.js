const BrandsModel = require('../Models/BrandsModel')

class BrandService {
    constructor() {
        this.brandsModel = BrandsModel
    }
    async createBrands(req, res) {
        try {
            if (!req.body.name || !req.body.introduction || !req.body.context) {
                return res.status(400).send({ "msg": "req is required" })
            }
            const brand = await this.brandsModel.find({ name: req.body.name })
            if (brand.length) {
                return res.status(400).send({ 'msg': 'name is exist' })
            }

            const newBrand = new BrandsModel({
                name: req.body.name,
                introduction: req.body.introduction,
                context: req.body.context,

            })
            newBrand.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    msg: 'created success',
                    brand: docs
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
    async getAllbrands(req, res) {
        try {

            await this.brandsModel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    brands: docs,
                    msg: 'getlist-success'
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
    async getOneBrands({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': "Id is required" })
            }
            await this.brandsModel.findById(params.id, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    brand: docs,
                    msg: "getbrands-success",
                })
            })

        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async DeleteBrands({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID is required' })
            }
            const BrandE = await this.brandsModel.findByIdAndDelete(params.id)
            if (BrandE) {
                return res.status(201).send({
                    msg: 'Delete success!',
                })
            }
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async editBrands(req, res) {
        try {
            if (!req.params.id || !req.body.name || !req.body.introduction || !req.body.context) {
                return res.status(400).send({ "msg": "req is required" })
            }
            await this.brandsModel.findByIdAndUpdate(req.params.id, { ...req.body },
                { new: true }, (err, docs) => {
                    if (err) res.status(400).send({ 'msg': err })
                    return res.status(201).send({
                        'msg': 'Update success',
                        brand : docs
                    })
                })
            return res.status(400).send({ "msg": "ID not exist" })
        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
}
module.exports = new BrandService()