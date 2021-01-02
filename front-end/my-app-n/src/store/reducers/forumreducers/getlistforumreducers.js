import * as Types from '../../constants/types'

const initialState = []


let findIndex = (forums, id) => {
    let result = -1
    forums.forEach((forum, index) => {
        if (forum._id === id) {
            result = index
        }
    });
    return result
}
const getListForumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LISTFORUMS_SUCCESS:
            state = action.forum
            state.sort(() => {
                return -1
            })
            return [...state]
        case Types.ADD_FORUM:
            state.push(action.forum)
            return [...state]
        case Types.EDIT_FORUM:
            let index = findIndex(state, action.id)
            state[index] = action.forum
            return [...state]
        case Types.DELETE_FORUM:
            let indexD = findIndex(state, action.id)
            let newA = state
            newA.forEach((forum, index) => {
                if (forum.id_parents === action.id) {
                    state.splice(index, 1)
                }
            })
            state.splice(indexD, 1)
            return [...state]
        default:
            return state;
    }
}
export { getListForumsReducer }