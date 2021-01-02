import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const addProductRequestAction = (product) => {
    return (dispatch) => {
        return callApi('product/product','POST',product).then((response)=>{
            if(response.data.msg === 'create success'){
                dispatch(addProductAction(response.data.product))
            }
        })
    }}
export const addProductAction = (product)=>{
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}
 