import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const EditPetRequestAction = (id, pet) => {
    return (dispatch) => {
        return callApi(`product/pet/${id}`, 'PATCH', pet).then((response) => {
            if (response.data.msg === 'Update success!') {
                dispatch(EditPetRequest(id,response.data.pet))
            }
        })
    }
}
export const EditPetRequest = (id,pet) =>{
    return {
        type : Types.EDIT_PET,
        id,
        pet
    }
}
