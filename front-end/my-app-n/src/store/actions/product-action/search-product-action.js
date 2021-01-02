
import * as Types from '../../constants/types'
import {callApi} from '../Apicall/apiCaller'


export const SeacrchProductRequestAction = (id) =>{
    return dispatch =>{
        return callApi(`product/product/category/${id}`,'GET',null).then((response)=>{
            if(response.data.msg==="found-success!") {
                dispatch(SeacrchProductAction(response.data.products))
            }
        })
    }
}
export const SeacrchProductAction = (product)=>{
    return{
        type : Types.SEARCH_PRODUCT,
        product
    }
}

export const FilterProduct = (filter) =>{
    return {
        type : Types.FILTER_PRODUCT,
        filter
    }
}