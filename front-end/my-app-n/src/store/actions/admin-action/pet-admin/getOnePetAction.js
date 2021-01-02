import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const getOnePetRequestAction = (id)=>{
    return (dispatch)=> {
        return  callApi(`product/pet/${id}`,'GET',null).then((response)=>{
            if(response.data.msg==='getpet-success'){
                dispatch(getOnePetAction(response.data.pets))
            }
        })
    }
}
export const getOnePetAction = (pet) =>{
    return{
        type : Types.GET_ONE_PET_SUCCESS,
        pet
    }
}
       