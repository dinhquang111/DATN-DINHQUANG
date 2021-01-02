import * as Types from '../../constants/types'

const initialState = {}
export const getDetailBlogReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GETBLOG_SUCCESS:
            state = action.blog
            return {...state}
        default:
            return {...state}
    }
}
