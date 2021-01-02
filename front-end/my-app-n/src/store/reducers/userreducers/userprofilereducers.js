import * as Types from '../../constants/types'

const initialState = {}

export const userProfileReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.USER_PROFILE:
            state = action.user
            return { ...state }
        case Types.EDIT_USER:
            localStorage.setItem("name", action.user.name)
            state = action.user
            return {...state}
        default:
            return { ...state }
    }
}