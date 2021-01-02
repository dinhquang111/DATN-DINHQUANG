import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'
export const AddBrandRequestAction = (brand) =>{
    return dispatch => {
        return callApi('product/addbrands','POST',brand)
        .then((respone)=>{
            if(respone.data.msg==='created success'){
                dispatch(AddBrandRequest(respone.data.brand))
            }
        })
    }
}
export const AddBrandRequest = (brand) =>{
    return {
        type : Types.ADD_BRAND,
        brand
    }
}