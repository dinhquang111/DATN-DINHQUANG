import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const getAllTopicChillActionRequest = () =>{
    return (dispatch) =>{
        return callApi('forum/topic/allreply','POST',null)
        .then((response)=>{
            if(response.data.msg === 'getlist-success'){
                dispatch(getAllTopicChillAction(response.data.allChill))
            }
        })
    }
}
export const getAllTopicChillAction = (chills) =>{
    return {
        type : Types.GET_CHILL_ALL,
        chills
    }
}