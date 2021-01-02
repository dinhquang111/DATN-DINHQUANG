import * as Types from '../../constants/types'
const initialState = []

let findIndex = (brands, id) => {
    let result = -1
    brands.forEach((brand, index) => {
        if (brand._id === id) {
            result = index
        }
    });
    return result
}
export const getListBrandReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_BRAND:
            state.push(action.brand)
            return [...state]
        case Types.GET_LIST_BRANDS_SUCCESS:
            state = action.brands
            state.sort(() => {
                return -1
            })
            return [...state]
        case Types.EDIT_BRAND:
            let index = findIndex(state, action.id)
            state[index] = action.brand
            return [...state]
        case Types.DELETE_BRAND:
            let indexD = findIndex(state, action.id)
            state.splice(indexD, 1)
            return [...state]
        default:
            return [...state]
    }
}

