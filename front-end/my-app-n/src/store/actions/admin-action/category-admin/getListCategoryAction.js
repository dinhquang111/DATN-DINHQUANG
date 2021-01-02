import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const getListCategoryAction = () => {
    return (dispatch) => {
        return callApi('product/category','GET',null).then((response)=>{
            if(response.data.msg === 'getlist-success'){
                dispatch(getListCategoryToReducerAction(response.data.category))
            }
        })
    }
}
export const getListCategoryToReducerAction = (category) =>{
    return {
        type : Types.GET_LISTCATEGORY_SUCCESS,
        category
    }
}