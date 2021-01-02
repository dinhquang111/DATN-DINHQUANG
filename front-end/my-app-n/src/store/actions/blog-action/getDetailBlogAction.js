import { callApi } from '../Apicall/apiCaller'
import * as Types from '../../constants/types'
export const getDetailBlogRequestAction = (id) => {
    return (dispatch) => {
        return callApi(`blog/blogs/${id}`, 'GET', null)
            .then((response) => {
                if (response.data.msg === "getblog-success") {
                    dispatch(getDetailBlogtAction(response.data.blog))
                }
            })
    }
}

export const getDetailBlogtAction = (blog) =>{
    return {
        type : Types.GETBLOG_SUCCESS,
        blog
    }
}