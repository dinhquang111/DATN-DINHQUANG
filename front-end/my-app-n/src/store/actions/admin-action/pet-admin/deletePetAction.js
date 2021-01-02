import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'
// product/pet/${id}
// GETLISTPET_SUCCESS
// Delete success!
export const DeletePetRequestAction = (id) => {
    return (dispatch) => {
        return callApi(`product/pet/${id}`,'DELETE',null).then((response)=>{
            if(response.data.msg==="Delete success!"){
                dispatch(DeletePetAction(id))
            }
        })
    }}
export const DeletePetAction = (id) =>{
    return {
        type : Types.DELETE_PET,
        id
    }
}