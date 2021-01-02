import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

//////        axios.delete(`http://localhost:3000/api/v1/product/origin/${id}`)
/////Delete success!
/////DELETE_ORIGIN
export const DeleteOriginAction = (id) => {
    return (dispatch) => {
        return callApi(`product/origin/${id}`, 'DELETE', null).then((response) => {
            if (response.data.msg === 'Delete success!') {
                dispatch(DeleteOriginToReducerAction(id))
            }
        })
    }
}
export const DeleteOriginToReducerAction = (id) => {
    return {
        type: Types.DELETE_ORIGIN,
        id
    }
}