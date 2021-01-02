import * as Types from '../../constants/types'


const initialState = {}
const OneOriginReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ONEORIGIN_SUCCESS:
            state = action.origins
            return { ...state }
        default:
            return state
    }
}
export { OneOriginReducers }