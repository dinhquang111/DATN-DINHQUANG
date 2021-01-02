import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const editForumRequestAction = (id,forum) =>{
    return dispatch =>{
        return callApi(`forum/forum/${id}`,'PATCH',forum).then((response)=>{
            if(response.data.msg === 'Update success'){
                dispatch(editForumAction(id,response.data.forum))
            }
        })
    }
}

export const editForumAction = (id,forum)=>{
    return {
        type : Types.EDIT_FORUM,
        id,forum
    }
}
