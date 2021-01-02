import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'
export const AddTopicActionRequest = (topic) =>{
    return dispatch => {
        return callApi('forum/topic','POST',topic)
        .then((response)=>{
            if(response.data.msg === 'create success'){
                dispatch(AddTopicAction(response.data.topic))
            }
        })
    }
}
export const AddTopicAction = (topic) =>{
    return {
        type : Types.ADD_TOPIC,
        topic
    }
}

