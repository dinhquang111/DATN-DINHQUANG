import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'
export const getListOriginAction = () => {
    return (dispatch) => {
        return callApi('product/origin', 'GET', null).then((response) => {
            if (response.data.msg==='getlist-success') {
                dispatch(getListOriginToReducerAction(response.data.origins))
            }
        })
    }
}
export const getListOriginToReducerAction = (origins) => {
    return {
        type: Types.GET_LISTORIGIN_SUCCESS,
        origins
    }
}