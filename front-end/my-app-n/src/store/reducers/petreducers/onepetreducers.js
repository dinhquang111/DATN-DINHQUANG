import * as Types from '../../constants/types'
const initialState ={}
const OnePetReducers = (state= initialState,action)=>{
    switch(action.type){
        case Types.GET_ONE_PET_SUCCESS:
            state = action.pet
        return  {...state}
        default:
            return state
    }
}
export {OnePetReducers}