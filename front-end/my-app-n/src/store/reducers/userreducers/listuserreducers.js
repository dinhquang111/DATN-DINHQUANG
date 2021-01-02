import * as Types from '../../constants/types'

const initialState = []

export const listUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_USER:
            state = action.users
            return [...state]

        default:
            return [...state]
    }
}