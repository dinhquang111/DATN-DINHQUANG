import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const getBlogByCategoryRequestAction = (id) =>{
    return dispatch =>{
        return callApi(`blog/blogs/category/${id}`,'GET',null).then((respone)=>{
            if(respone.data.msg==="found-success!"){
                dispatch(getBlogByCategoryAction(respone.data.blogs))
            }
        })
    }
}
export const getBlogByCategoryAction = (blog) =>{
    return {
        type : Types.FOUNDBLOG_SUCCESS,
        blog
    }
}
