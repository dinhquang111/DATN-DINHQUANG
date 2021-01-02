import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const EditOrigin = (id, origin) => {
    return (dispatch) => {
        return callApi(`product/origin/${id}`,'PATCH', origin).then((response) => {
            if (response.data.msg === 'Update success!') {
                dispatch(EditOriginToReducerAction(id, response.data.origin))
            }
        })
    }
}
export const EditOriginToReducerAction = (id, origin) => {
    return {
        type: Types.EDIT_ORIGIN,
        origin, id
    }
}