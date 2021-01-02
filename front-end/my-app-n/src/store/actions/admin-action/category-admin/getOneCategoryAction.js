import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const getOneCategoryAction = (id) => {
    return (dispatch) => {
        return callApi(`product/category/${id}`, 'GET', null).then((response) => {
            if (response.data.msg === 'getcategorys-success') {
                dispatch(getOneCategoryToReducerAction(response.data.category))
            }
        })
    }
}
export const getOneCategoryToReducerAction = (category) => {
    return {
        type : Types.GET_ONECATEGORY_SUCCESS,
        category
    }
}