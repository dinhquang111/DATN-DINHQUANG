import * as Types from '../../constants/types'
const initialState = {}

export const OneBrandReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ONE_BRAND_SUCCESS:
            state = action.brand
            return {...state}
        default:
            return {...state}
    }
}