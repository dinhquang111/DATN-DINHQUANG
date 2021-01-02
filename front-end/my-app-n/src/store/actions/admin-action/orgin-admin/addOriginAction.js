import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const addOrginRequestAction = (origin) => {
    return (dispatch) => {
        return callApi(`product/origin`, 'POST', origin).then((response) => {
            if (response.data.msg === 'created success') {
                dispatch(addOrginAction(response.data.origin))
            }
        })
    }
}
export const addOrginAction = (origin) =>{
    return {
        type : Types.ADD_ORIGIN,
        origin
    }
}