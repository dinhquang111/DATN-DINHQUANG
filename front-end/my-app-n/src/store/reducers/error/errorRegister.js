import * as Types from '../../constants/types'

const initialState = ''

export const Error = (state = initialState,action)=>{
    switch (action.type) {
        case Types.USER_EXIST:
            state = '* Username is exist'
            return state
        case Types.USER_DONE:
            state = ''
            return state
        default:
            return state
    }
}
