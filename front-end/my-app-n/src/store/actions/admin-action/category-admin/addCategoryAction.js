import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const addCategoryRequestAction = (category) => {
    return (dispatch) => {
        return callApi('product/category', 'POST', category).then((response) => {
            if (response.data.msg === 'created success') {
                dispatch(addCategoryAction(response.data.category))
            }
        })
    }
}
export const addCategoryAction = (category) => {
    return {
        type: Types.ADD_CATEGORY,
        category
    }
}