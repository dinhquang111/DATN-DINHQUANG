import * as Types from '../../constants/types'

const initialState = ''

export const ErrorLogin = (state = initialState, action) => {
    switch (action.type) {
        case Types.USER_WRONG:
            state = '* Invalid Usermane'
            return state
        case Types.PASSWORD_WRONG:
            state = '* Invalid Password'
            return state
        case Types.LOGIN_SUCCESS:
            state = ''
            return state
        default:
           return state
    }
}