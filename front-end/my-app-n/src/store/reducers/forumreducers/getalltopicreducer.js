import * as Types from '../../constants/types'

const initialState = []
export const getAllTopicReducer = (state = initialState , action) =>{
    switch (action.type) {
        case Types.GET_TOPIC_ALL:
            state = action.topics
            return [...state];
    
        default:
            return [...state];
    }
}