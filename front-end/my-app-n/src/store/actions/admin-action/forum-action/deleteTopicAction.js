import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const deleleTopicRequestAction = (id) => {
    return dispatch => {
        return callApi(`forum/topic/${id}`, 'DELETE', null).then((response) => {
            if (response.data.msg === 'Delete success!') {
                dispatch(deleleTopicAction(id))
            }
        })
    }

}
export const deleleTopicAction = (id) => {
    return {
        type: Types.DELETE_TOPIC,
        id
    }

}