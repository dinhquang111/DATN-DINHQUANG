import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const getTopicChillActionRequest = (id)=>{
    return (dispatch)=>{
        return callApi(`forum/topic/reply/${id}`,'GET',null)
        .then((respone)=>{
            if(respone.data.msg === 'getlist-success'){
                dispatch(getTopicChillAction(respone.data.chills))
            }
        })
    }
}

export const getTopicChillAction = (chills) =>{
    return {
        type : Types.GET_TOPIC_CHILL,
        chills
    }
}