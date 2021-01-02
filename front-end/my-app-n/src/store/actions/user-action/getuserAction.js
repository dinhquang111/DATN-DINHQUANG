import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const getProfileRequestAction = (id)=>{
    return dispatch =>{
        return callApi(`users/profile/${id}`,'GET',null)
        .then((response)=>{
            if(response.data.msg==='get-user-success'){
               dispatch(getProfileAction(response.data.user)) 
            }
        })
    }
}
export const getProfileAction = (user) =>{
    return {
        type : Types.USER_PROFILE,
        user
    }
}