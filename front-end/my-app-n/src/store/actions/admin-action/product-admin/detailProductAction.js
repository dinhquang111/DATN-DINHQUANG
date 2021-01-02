import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const getDetaiProductRequestAction = (id)=>{
    return (dispatch)=>{
        return callApi(`product/product/${id}`,'GET',null).then((response=>{
            if(response.data.msg==="find-success"){
                dispatch(getDetaiProductAction(response.data.product))
            }
        }))
    }
}
export const getDetaiProductAction = (product)=>{
    return {
        type : Types.FIND_PRODUCT_SUCCESS,
        product
    }
}