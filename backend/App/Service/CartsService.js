const CartsModel = require('../Models/CartsModel')

class CartService {
    constructor() {
        this.cartsModel = CartsModel
    }
    async createCarts({ body }, res) {
        try {
            if (!body.ordername || !body.address || !body.numberphone || !body.order) {
                return res.status(400).send({ 'msg': 'req is required' })
            }
            console.log(body)
            console.log(body.order[0].quantity)
            const newCart = new CartsModel({
                ordername: body.ordername,
                address: body.address,
                numberphone: body.numberphone,
                order: body.order
            })
            newCart.save((err, docs) => {
                if (err) return res.status(400).send({ 'msg': err })
                return res.status(201).send({
                    msg: 'created success',
                    order: docs
                })
            })
        } catch (err) {
            return res.status(400).send({ 'msg': err })
        }
    }
}
module.exports = new CartService()