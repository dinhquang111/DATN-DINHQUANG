import * as Types from '../../constants/types'
const initialStatus = []
const Blogbycategoryreducers = (state=initialStatus,action)=>{
    switch (action.type) {
        case Types.FOUNDBLOG_SUCCESS:
            
            state = action.blog
            state.sort(()=>{
                return -1
            })
            return [...state]
    
        default:
            return [...state]
    }
}
export {Blogbycategoryreducers}