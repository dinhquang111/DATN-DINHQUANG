import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const getAllUserRequestAction = ()=>{
    return dispatch =>{
        return callApi(`users/profile`,'GET',null).then((response)=>{
            if(response.data.msg ==="get-success"){
                dispatch(getAllUserAction(response.data.users))
            }
        })
    }
}
export const getAllUserAction = (users) =>{
    return{
        type : Types.GET_ALL_USER,
        users
    }
}