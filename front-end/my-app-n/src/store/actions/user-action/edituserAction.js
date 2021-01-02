import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const editUserRequestAction = (id,user)=>{
    return dispatch =>{
        return callApi(`users/edit/${id}`,'PATCH',user).then((response)=>{
            if(response.data.msg==='edit-success'){
                console.log(response.data.user)
                dispatch(editUserAction(response.data.user))
            }
        })
    }
}
export const editUserAction = (user)=>{
    return {
        type : Types.EDIT_USER,
        user
    }
}