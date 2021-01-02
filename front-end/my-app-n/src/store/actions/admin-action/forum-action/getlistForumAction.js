import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const getListForumAction = () => {
    return (dispatch) => {
        return callApi(`forum/forum`, 'GET', null).then((response) => {
            if (response.data.msg === 'getlist-success') {
                dispatch(getListForumToReducerAction(response.data.forum))
            }
        })
    }
}
export const getListForumToReducerAction = (forum) =>{
    return {
        type : Types.GET_LISTFORUMS_SUCCESS,
        forum
    }
}