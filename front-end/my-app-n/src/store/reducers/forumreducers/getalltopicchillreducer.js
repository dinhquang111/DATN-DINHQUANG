import * as Types from '../../constants/types'

const initialState = []

export const allTopicChillReducer = (state = initialState , action) =>{
    switch (action.type) {
        case Types.GET_CHILL_ALL:
            state = action.chills
            return [...state]
    
        default:
            return [...state]
    }
}