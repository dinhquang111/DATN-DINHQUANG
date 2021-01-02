import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'


export const getTopicRequestAction = (id) =>{
    return (dispatch) =>{
        return callApi(`forum/topic/${id}`,'GET',null)
        .then((response)=>{
            if(response.data.msg === "getlist-success"){
                dispatch(getTopicAction(response.data.topics))
            }
        })
    }
}
export const getTopicAction = (topic)=>{
    return{
        type : Types.GET_TOPIC,
        topic
    }
}

export const getDetailTopicRequest = (id)=>{
    return (dispatch) =>{
        return callApi(`forum/topic/detail/${id}`,'GET',null)
        .then((respone)=>{
            if(respone.data.msg === "gettopic-success"){
                dispatch(getDetailTopic(respone.data.topic))
            }
        })
    }
}

export const getDetailTopic = (topic) =>{
    return {
        type : Types.GET_TOPIC_DETAIL,
        topic
    }
}