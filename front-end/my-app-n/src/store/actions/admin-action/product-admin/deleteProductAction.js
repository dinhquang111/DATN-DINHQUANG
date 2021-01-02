import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const DeleteProductRequestAction = (id) => {
    console.log(id);
    return (dispatch) => {
        return callApi(`product/product/${id}`,'DELETE',null).then((response)=>{
            // if(response.data.msg ==='Delete success!'){
            //     dispatch(DeleteProductAction(id))
            // }
            if(response.data.msg ==='Delete success!'){
                dispatch(DeleteProductAction(id))
            }
        })
    }
}
export const DeleteProductAction = (id)=>{
    return{
        type : Types.DELETE_PRODUCT,
        id
    }
}