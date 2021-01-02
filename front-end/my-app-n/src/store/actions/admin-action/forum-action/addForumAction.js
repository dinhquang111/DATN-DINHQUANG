import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const addForumAction = (forum) => {
    return (dispatch) => {
        return callApi('forum/forum', 'POST', forum).then((response) => {
            if (response.data.msg === 'create success') {
                dispatch(addForumToReducerAction(response.data.forum))
            }
        })
    }
}
export const addForumToReducerAction = (forum) => {
    return {
        type : Types.ADD_FORUM,
        forum
    }
}