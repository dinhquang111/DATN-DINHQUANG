const ProductModel = require('../Models/ProductModel')

class ProductService {
    constructor() {
        this.productmodel = ProductModel
    }
    async createProducts(req, res) {

        try {

            if (!req.body.id_brands || !req.body.id_origins
                || !req.body.id_pets || !req.body.name
                || !req.file.filename || !req.body.content || !req.body.weight || !req.body.price || !req.body.id_category) {
                return res.status(400).send({ 'msg': 'requied' })
            }
            const Product = await this.productmodel.find({ name: req.body.name })
            if (Product.lenght) {
                return res.status(400).send({ 'msg': 'exist' })
            }
            const newProduct = new ProductModel({
                id_brands: req.body.id_brands,
                id_origins: req.body.id_origins,
                id_pets: req.body.id_pets,
                id_category: req.body.id_category,
                name: req.body.name,
                image: req.file.filename,
                content: req.body.content,
                weight: req.body.weight,
                price: req.body.price
            })
            newProduct.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': "2" })
                return res.status(201).send({
                    'msg': 'create success',
                    product: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async getAllproducts(req, res) {
        try {
            await this.productmodel.find({}, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    product: docs,
                    msg: 'getlist-success'
                })
            })

        } catch (error) {
            return res.status(400).send({ "msg": error })
        }
    }
    async findProducts({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'requied' })
            }
            const ProductF = await this.productmodel.findById(params.id, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    product: docs,
                    msg: 'find-success'
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async deleteProducts({ params }, res) {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'ID required' })
            }
            await this.productmodel.deleteOne({_id:  params.id},(err,docs)=>{
                if(err){
                return res.status(400).send({'msg':err})} 
            })
            return res.status(200).send({'msg':'Delete success!'})
    }
    async findProductwithCategorys({ params }, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            console.log(params.id)

            await this.productmodel.find({ id_category: params.id }, (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                res.status(201).send({
                    products: docs,
                    msg: 'found-success!'
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
    async editProductWithFiles({ params, body, file }, res) {
        if (!params.id) {
            return res.status(400).send({ 'msg': 'id is required' })
        }
        await this.productmodel.findByIdAndUpdate(params.id,
            { ...body, image: file.filename }, { new: true },
            (err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(200).send({
                    'msg': 'update-success',
                    product: docs
                })
            }
        )
        // try {
        //     if (!params.id) {
        //         return res.status(400).send({ 'msg': 'id is required' })
        //     }
        //     await this.productmodel.findByIdAndUpdate(params.id,
        //         { ...body, image: file.filename }, { new: true },
        //         (err, docs) => {
        //             if (err) return res.status(400).send({ 'msg': err })
        //             return res.status(200).send({
        //                 'msg': 'update-success',
        //                 product: docs
        //             })
        //         }
        //     )
        //     return res.status(400).send({ 'msg': 'id  exist' })
        // } catch (err) {
        //     return res.status(400).send({ 'msg': err })
        // }
    }
    async editProductNoFiles({ params, body}, res) {
        try {
            if (!params.id) {
                return res.status(400).send({ 'msg': 'id is required' })
            }
            console.log("before update", params, body);
            console.log('params.id :>> ', params.id);
            await this.productmodel.updateOne({_id: params.id},
                { ...body}, { new: true },
            )
            return res.status(400).send({ 'msg': 'id  exist' })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
}
module.exports = new ProductService()