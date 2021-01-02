import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const getListPetAction = () => {
    return (dispatch) => {
        return callApi('product/pet', 'GET', null).then((response) => {
            if (response.data.msg === 'getlist-success') {
                  dispatch(getListPet(response.data.pets))     
            }
        })
    }
}
export const getListPet = (pets) =>{
    return {
        type : Types.GET_LIST_PET_SUCCESS,
        pets
    }
}
