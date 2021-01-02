import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const getOneOriginRequestAction = (id) => {
    return (dispatch) => {
        return callApi(`product/origin/${id}`, 'GET', null).then((response) => {
            if (response.data.msg === 'getorigin-success') { 
                dispatch( getOneOriginAction(response.data.origins))
            }
        })
    }
}
export const getOneOriginAction = (origins) =>{
    return {
        type : Types.GET_ONEORIGIN_SUCCESS,
        origins
    }
}
