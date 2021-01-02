import * as Types from '../../constants/types'

const initialState = []

let findIndex = (blogs,id) =>{
    let result = -1
    blogs.forEach((blog,index) => {
        if(blog._id === id){
            result = index
        }
    });
    return result
}
const AllBlogsReducers = (state = initialState,action) =>{
    switch (action.type) {
        case Types.GET_ALLBLOG_SUCCESS:
            state = action.blogs
            state.sort(()=>{
                return -1
            })
           return[...state]
        case Types.ADD_BLOG:
            state.push(action.blog)
            return [...state]
        case Types.EDIT_BLOG:
            let index = findIndex(state,action.id)
            state[index] = action.blog
            return [...state]
        case Types.DELETE_BLOG:
            let indexD = findIndex(state,action.id)
            state.splice(indexD,1)
            return [...state]
        default:
           return  [...state]
    }
}
export {AllBlogsReducers}