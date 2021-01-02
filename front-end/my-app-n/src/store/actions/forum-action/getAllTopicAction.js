import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const getAllTopicActionRequest = () =>{
    return (dispatch) =>{
        return callApi('forum/topic','GET',null).then((respone)=>{
            if(respone.data.msg === 'getlist-success'){
                dispatch(getAllTopicAction(respone.data.alltopics))
            }
        })
    }
}
export const getAllTopicAction = (topics) =>{
    return {
        type : Types.GET_TOPIC_ALL,
        topics
    }
}