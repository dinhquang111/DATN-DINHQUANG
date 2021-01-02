import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const getOneForumRequestAction = (id) =>{
    return dispatch =>{
        return callApi(`forum/forum/${id}`,'GET',null).then((response)=>{
            if(response.data.msg==='getforums-success'){
                dispatch(getOneForumAction(response.data.forum))
            }
        })
    }
}
export const getOneForumAction =  (forum) =>{
    return {
        type : Types.GET_ONE_FORUM,
        forum
    }
}
