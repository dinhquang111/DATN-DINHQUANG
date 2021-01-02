

const data = JSON.parse(localStorage.getItem('CART'))
const initialState = data ? data :[]

const CartReducers = (state = initialState, action) => {
    var {product , quantity } = action
    var index = -1
    switch (action.type) {
        case "ADD_LIST":
            index = findProductInCart(state,product)
            if(index !== -1){
                state[index].quantity += quantity
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [
                ...state]
        case "DELETE_CART" :
            index = findProductInCart(state,product)
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        case "UPDATE_CART":
            index = findProductInCart(state,product)
            if(index !== -1){
                state[index].quantity= quantity
            }
            localStorage.setItem('CART',JSON.stringify(state))
        default:
            return state;
    }
}
var findProductInCart= (cart,product)=>{
    var index = -1;
    if(cart.length>0){
        for(let i = 0; i<cart.length;i++){
            if(cart[i].product._id===product._id){
                index = i
                break;
            }
        }
    }
    return index
}
export { CartReducers }