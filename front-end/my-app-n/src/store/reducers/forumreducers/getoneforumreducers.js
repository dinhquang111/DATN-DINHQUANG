import * as Types from '../../constants/types'

const initialState = {}
export const getOneForumReducers = (state = initialState ,action)=>{
    switch (action.type) {
        case Types.GET_ONE_FORUM:
            state = action.forum
            return {...state}
        default:
            return {...state}
    }
}