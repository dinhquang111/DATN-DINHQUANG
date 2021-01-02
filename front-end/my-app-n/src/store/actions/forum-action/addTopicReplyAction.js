import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const AddTopicReplyRequest = (reply) =>{
    return (dispatch) =>{
        return callApi('forum/topic/reply','POST',reply)
        .then((respone)=>{
            if(respone.data.msg === 'create success'){
                dispatch(AddTopicReply(respone.data.chill))
            }
        })
    }
}
export const AddTopicReply = (reply) =>{
    return {
        type : Types.ADD_TOPIC_REPLY,
        reply
    }
}