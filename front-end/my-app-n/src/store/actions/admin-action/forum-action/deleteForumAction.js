import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const DeleteForumAction = (id) => {
    return (dispatch) => {
        return callApi(`forum/forum/${id}`, 'DELETE', null).then((response) => {
            if (response.data.msg === 'Delete success!') {
                dispatch(DeleteForumToReducerAction(response.data.forum))
            }
        })
    }
}
export const DeleteForumToReducerAction = (forum) => {
    return {
        type: Types.GET_LISTFORUMS_SUCCESS,
        forum
    }
}