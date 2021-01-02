
import * as Types from '../../constants/types'

const initialState = {}

const detailProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FIND_PRODUCT_SUCCESS:
            state = action.product
            return {...state}
        default:
            return {...state}
    }
}
export { detailProductReducer }