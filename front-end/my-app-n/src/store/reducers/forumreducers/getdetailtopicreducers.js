import * as Types from '../../constants/types'
const initialState = {}

export const getDetailTopicReducers = (state = initialState , action) =>{
    switch (action.type) {
        case Types.GET_TOPIC_DETAIL:
            state = action.topic
            return {...state}
    
        default:
            return state
    }
}