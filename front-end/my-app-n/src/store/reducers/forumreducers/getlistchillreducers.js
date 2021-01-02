import * as Types from '../../constants/types'

const initialState = []


export const getListChillReducers = (state = initialState , action) =>{
    switch (action.type) {
        case Types.ADD_TOPIC_REPLY:
            state.push(action.reply)
            return [...state];
        case Types.GET_TOPIC_CHILL:
            state = action.chills
            return [...state]
        default:
            return [...state];
    }
}