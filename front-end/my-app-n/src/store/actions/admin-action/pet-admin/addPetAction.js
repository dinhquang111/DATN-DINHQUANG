
import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'
export const addPetRequestAction = (pet) => {
    return (dispatch) => {
        return callApi(`product/pet`, 'POST', pet).then((response) => {
            if (response.data.msg === "created success") {
                dispatch(addPetAction(response.data.pet))
            }
        })
    }
}
export const addPetAction = (pet) => {
    return {
        type : Types.ADD_PET,
        pet
    }
}