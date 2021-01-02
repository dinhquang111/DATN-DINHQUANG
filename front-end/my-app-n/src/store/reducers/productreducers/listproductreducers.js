import * as Types from '../../constants/types'

const initialState = []
let findIndex = (products,id)=>{
    let result = -1
    products.forEach((product,index) => {
        if(product._id===id){
            result = index
        }
    });
    return result
}
const listProductReducer = (state = initialState,action) =>{
    switch(action.type){
        case Types.GET_LIST_PRODUCT_SUCCESS:
            state = action.product
            state.sort(()=>{
                return -1
            })
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.EDIT_PRODUCT:
            let index = findIndex(state,action.id)
            state[index] = action.product
            return [...state]
        case Types.DELETE_PRODUCT:
            let indexD = findIndex(state,action.id)
            state.splice(indexD,1)
            return [...state]
        default : 
            return [...state]
    }
}
export {listProductReducer}