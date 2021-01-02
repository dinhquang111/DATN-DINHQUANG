const CartService = require('../../Service/CartsService')

class CartController{
    constructor(){
        this.cartService = CartService
    }
    async createCart({req,res,next}){
        return await this.cartService.createCarts(req,res)
    }
}
module.exports = new CartController()