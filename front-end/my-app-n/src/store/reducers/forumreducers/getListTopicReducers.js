import * as Types from '../../constants/types';
const initialState = []


var findIndex = (topics,id)=>{
    let result = -1
    topics.forEach((topic,index)=>{
        if(topic._id===id){
            result = index
        }
    })
    return result
}

 const getListTopicReducers = (state = initialState, action) =>{
    switch (action.type) {
        case Types.GET_TOPIC:
            state = action.topic
            state.sort(()=>{
                return -1
            })
            return [...state]
        case Types.ADD_TOPIC:
            state.push(action.topic[0])
            state.sort(()=>{
                return -1
            })
            return [...state]
        case Types.VIEWS:
            let index = findIndex(state,action.id)
            if(index !==-1){
                state[index].views = state[index].views+1;
            }
            return [...state]
        case Types.DELETE_TOPIC:
            let indexD = findIndex(state,action.id)
            state.splice(indexD,1)
            return [...state]
        default:
            return state;
    }
}
export {getListTopicReducers}