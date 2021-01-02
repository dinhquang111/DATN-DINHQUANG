import { callApi } from '../Apicall/apiCaller'
import * as Types from '../../constants/types'

export const addBlogRequestAction = (data) => {
    return (dispatch) => {
        return callApi('blog/blogs', 'POST', data).then((respone) => {
            // if (respone.data.msg === 'create success') {
            //     dispatch(addBlogAction(respone.data.blog))
            // }
        })
    }
}
export const addBlogAction = (blog) => {

    return {
        type: Types.ADD_BLOG,
        blog
    }
}

