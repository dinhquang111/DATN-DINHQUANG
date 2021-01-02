
import { callApi } from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const editBlogRequestAction = (id, blog) => {
    return dispatch => {
        return callApi(`blog/blogs/nofile/${id}`, 'PATCH', blog).then((response) => {
            if (response.data.msg === 'update-success') {
                dispatch(editBlogAction(id, response.data.blog))
            }
        })
    }
}
export const editBlogAction = (id, blog) => {
    return {
        type: Types.EDIT_BLOG,
        id, blog
    }
}
export const editBlogWithFileRequestAction = (id, blog) => {
    return dispatch => {
        return callApi(`blog/blogs/file/${id}`, 'PATCH', blog).then((response) => {
            if (response.data.msg === 'update-success') {
                dispatch(editBlogAction(id,response.data.blog))
            }
        })
    }
}