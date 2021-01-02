import * as Types from '../../constants/types'

let initialState  = {}
export const filterProductReducers = (state = initialState,action)=>{
    switch (action.type) {
        case Types.FILTER_PRODUCT:
            state = action.filter
            return {...state};
        default:
            return {state};
    }
}