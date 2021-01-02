import * as Types from '../../constants/types'
const initialState = []

let findIndex = (Arrpet, id) => {
    let result = -1
    Arrpet.forEach((pet, index) => {
        if (pet._id === id) {
            result = index
        }
    });
    return result
}
const listPetReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LIST_PET_SUCCESS:
            state = action.pets
            state.sort(() => {
                return -1
            })
            return [...state]
        case Types.ADD_PET:
            state.push(action.pet)
            return [...state]
        case Types.EDIT_PET:
            let index = findIndex(state, action.id)
            state[index] = action.pet
            return [...state]
        case Types.DELETE_PET:
            let indexD = findIndex(state, action.id)
            state.splice(indexD, 1)
            return [...state]
        default:
            return state
    }
}
export { listPetReducer }