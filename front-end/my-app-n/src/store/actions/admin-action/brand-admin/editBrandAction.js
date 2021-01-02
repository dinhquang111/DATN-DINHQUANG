import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'
export const EditBrandRequestAction = (id,brand) =>{
    return (dispatch) =>{
        return callApi(`product/brands/${id}`,'PATCH',brand).then((response)=>{
            if(response.data.msg==='Update success'){
                dispatch(EditBrandAction(id,response.data.brand))
            }
        })
    }
}
export const EditBrandAction = (id,brand) =>{
    return {
        type : Types.EDIT_BRAND,
        id,
        brand
    }
}
        