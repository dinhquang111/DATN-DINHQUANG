import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const DeleteBrandRequestAction = (id) => {
    return (dispatch) => {
        return callApi(`product/brands/${id}`, 'DELETE', null).then((respone) => {
            if (respone.data.msg === "Delete success!") {
                dispatch(DeleteBrandAction(id))
            }
        })
    }
}
export const DeleteBrandAction = (id) => {
    return {
        type: Types.DELETE_BRAND,
        id
    }
}
