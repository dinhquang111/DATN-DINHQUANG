
const categoryblogreducers = (state = [] ,action)=>{
    switch (action.type) {
        case "GETLISTCATEGORYBLOG_SUCCESS":
            return [...action.categoryblog]
        default:
            return state
    }
}
export{categoryblogreducers}