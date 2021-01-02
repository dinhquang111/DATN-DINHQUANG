import {callApi} from '../../Apicall/apiCaller'
import * as Types from '../../../constants/types'

export const EditCategoryRequestAction = (id, category) => {
    return (dispatch) => { 
        return callApi(`product/category/${id}`,'PATCH', category).then((response)=>{
            if(response.data.msg === 'Update success!'){
                dispatch(EditCategoryAction(id,response.data.category))
            }
        })
    }
}
export const EditCategoryAction = (id,category) =>{
    return {
        type : Types.EDIT_CATEGORY,
        category,id
    }
}