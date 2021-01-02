import { callApi } from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const DeleteBlogRequestAction = (id) => {
    return (dispatch) => {
        return callApi(`blog/blogs/${id}`, 'DELETE', null).then((response) => {
            if (response.data.msg === 'Delete success!') {
                dispatch(DeleteBlogAction(id))
            }
        })
    }
}
export const DeleteBlogAction = (id) => {
    return {
        type: Types.DELETE_BLOG,
        id
    }
}