import { callApi } from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'


export const DeleteCategoryAction = (id) => {
    return (dispatch) => {
        return callApi(`product/category/${id}`, 'DELETE', null).then((response) => {
            if (response.data.msg === 'Delete success!') {
                dispatch(DeleteCategoryToReducerAction(id))
            }
        })
    }
}
export const DeleteCategoryToReducerAction = (id) =>{
    return {
        type : Types.DELETE_CATEGORY,
        id
    }
} 