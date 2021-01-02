import * as Types from '../../constants/types'
const initialStatus = []
const SearchProductReducer = (state=initialStatus,action)=>{
    switch (action.type) {
        case Types.SEARCH_PRODUCT:
            state = action.product
            state.sort(()=>{
                return -1
            })
            return [...state]
        default:
            return [...state]
    }
}
export {SearchProductReducer}