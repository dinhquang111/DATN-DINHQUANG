import {callApi} from '../Apicall/apiCaller'
import * as Types from '../../constants/types'


// getlist-success
// GET_ALLBLOG_SUCCESS
// response.data.blogs        axios.get('http://localhost:3000/api/v1/blog/blogs')

export const getAllblogsAction = ()=>{
   
    return (dispatch) =>{
        return callApi('blog/Blogs','GET',null).then((response)=>{
            console.log(response.data);
            if(response.data.msg === 'getlist-success'){
                dispatch(getAllblogsToReducersAction(response.data.blogs))
            }
        })
    }
}
export const getAllblogsToReducersAction = (blogs)=>{
    return{
        type : Types.GET_ALLBLOG_SUCCESS,
        blogs
    }

}