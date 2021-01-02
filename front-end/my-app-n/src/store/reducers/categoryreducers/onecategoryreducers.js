import * as Types from '../../constants/types'
const initialState = {}
const OneCategoryReducers = (state=initialState,action)=>{
    switch (action.type) {
        case Types.GET_ONECATEGORY_SUCCESS:
            state = action.category
            return{...state};
        default:
            return{...state};
    }
    
}
export {OneCategoryReducers}