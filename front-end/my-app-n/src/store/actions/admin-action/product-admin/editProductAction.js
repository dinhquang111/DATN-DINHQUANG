import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

// export const editProductRequestAction = (id,data)=>{
//     return dispatch =>{

//     }
// }
export const editProductNofileRequestAction = (id, data) => {
    return dispatch => {
        return callApi(`product/product/nofile/${id}`, 'PATCH', data).then((response) => {
            console.log("response ",response)
            // if (response.data.msg === 'update-success') {
            //     dispatch(editProductNofileAction(id, response.data.product))
            // }
        })
    }
}
export const editProductNofileAction = (id, product) => {
    return {
        type: Types.EDIT_PRODUCT,
        id,
        product
    }
}
export const editProductWithFileRequestAction = (id, data) => {
    return dispatch => {
        return callApi(`product/product/withfile/${id}`, 'PATCH', data).then((response) => {
            if (response.data.msg === 'update-success') {
                dispatch(editProductWithFileAction(id, response.data.product))
            }
        })
    }
}
export const editProductWithFileAction = (id, product) => {
    return {
        type: Types.EDIT_PRODUCT,
        id,
        product
    }
}