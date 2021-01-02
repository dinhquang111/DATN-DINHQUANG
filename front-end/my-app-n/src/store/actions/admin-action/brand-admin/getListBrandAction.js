import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const GetListBrandRequestAction = ()=>{
    return dispatch =>{
        return callApi('product/getallbrands','GET',null)
        .then((response)=>{
            if(response.data.msg === 'getlist-success'){
                dispatch(GetListBrandRequest(response.data.brands))
            }
        })
    }
}
export const GetListBrandRequest = (brands)=>{
    return{
        type : Types.GET_LIST_BRANDS_SUCCESS,
        brands
    }
}
