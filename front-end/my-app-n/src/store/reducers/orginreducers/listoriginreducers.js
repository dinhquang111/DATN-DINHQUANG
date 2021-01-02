import * as Types from '../../constants/types'

const initialState = []
let findindex = (origins, id) => {
    let result = -1
    origins.forEach((origin, index) => {
        if (origin._id === id) {
            result = index
        }
    });
    return result
}

const listOriginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LISTORIGIN_SUCCESS:
            state = action.origins
            state.sort(() => {
                return -1
            })
            return [...state]
        case Types.ADD_ORIGIN:
            state.push(action.origin)
            return [...state]
        case Types.EDIT_ORIGIN: 
            let index = findindex(state,action.id)
            state[index] = action.origin
            return [...state]
        case Types.DELETE_ORIGIN:
            let indexD = findindex(state,action.id)
            state.splice(indexD,1)
            return [...state]
        default:
            return [...state]
    }
}
export { listOriginReducer }