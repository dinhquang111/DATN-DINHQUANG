import axios from 'axios'

const getCategoryBlogAction = () =>{
    console.log("1");
    return (dispatch) =>{
        axios.get('http://localhost:3000/api/v1/blog/categoryblog')
        .then((response)=>{
            console.log("2");
            if(response.data.msg ==="getlist-success"){
                console.log(response.data);
                dispatch({
                    type:"GETLISTCATEGORYBLOG_SUCCESS",
                    categoryblog : response.data.categoryblog
                })
            }
        })
        .catch((err)=>{
            dispatch({
                type : "OPERATION_FAILED"
            })
        })
    }
}
export {getCategoryBlogAction}