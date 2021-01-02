import * as Types from '../../constants/types'
const initialState = []


let findindex = (categorys, id) => {
    let result = -1
    categorys.forEach((category, index) => {
        if (category._id === id) {
            result = index
        }
    });
    return result
}
const ListcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LISTCATEGORY_SUCCESS:
            state = action.category
            state.sort(() => {
                return -1
            })
            return [...state]
        case Types.ADD_CATEGORY:
            state.push(action.category)
            return [...state]

        case Types.EDIT_CATEGORY:
            let index = findindex(state, action.id)
            state[index] = action.category
            return [...state]
        case Types.DELETE_CATEGORY:
            let indexD = findindex(state, action.id)
            state.splice(indexD, 1)
            return [...state]
        default:
            return state
    }
}
export { ListcategoryReducer }