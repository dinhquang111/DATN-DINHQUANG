

const AddProductIntoList = (product, quantity) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_LIST",
            product,
            quantity
        })
    }
}
export { AddProductIntoList }

const DeleteProductCartAction = (product) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_CART",
            product
        })
    }
}
export { DeleteProductCartAction }
const UpdateProducAction = (product, quantity) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_CART",
            product,
            quantity
        })
    }
}
export {UpdateProducAction}