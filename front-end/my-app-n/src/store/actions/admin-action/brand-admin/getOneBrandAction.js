import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const GetOneBrandRequestAction = (id)=>{
    return (dispatch)=>{
        return callApi(`product/brands/${id}`,'GET',null).then((response)=>{
            if(response.data.msg==="getbrands-success"){
                dispatch(GetOneBrandAction(response.data.brand))
            }
        })
    }
}
export const GetOneBrandAction = (brand) =>{
    return {
        type : Types.GET_ONE_BRAND_SUCCESS,
        brand
    }
}