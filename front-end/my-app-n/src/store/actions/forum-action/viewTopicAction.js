import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const viewTopicActionRequest = (id)=>{
    return (dispatch) =>{
        return callApi(`forum/topic/${id}/views`,'GET',null)
        .then((response)=>{
            if(response.data.msg ==='success'){
                dispatch(viewTopicAction(id))
            }
        })
    }
}
export const viewTopicAction = (id) =>{
    return {
        type : Types.VIEWS,
        id
    }
}