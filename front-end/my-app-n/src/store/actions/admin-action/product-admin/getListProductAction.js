import * as Types from '../../../constants/types'
import {callApi} from '../../Apicall/apiCaller'

export const getListProductRequestAction = ()=>{
    return (dispatch)=>{
        return callApi('product/product','GET',null).then((response)=>{
            if((response.data.msg)==="getlist-success"){
                dispatch(getListProductAction(response.data.product))
            }
        })
    }
}
export const getListProductAction = (product)=>{
    return {
        type : Types.GET_LIST_PRODUCT_SUCCESS,
        product
    }
}
