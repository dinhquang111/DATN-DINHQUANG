
import { callApi2} from '../../store/actions/Apicall/apiCaller'
import * as Types from '../../../src/store/constants/types'

export const predictAction = (data)=>{
    console.log(data);
    return (dispatch)=>{
        return callApi2(data,'GET',null).then((response)=>{
          console.log(response);
                 dispatch(predictAction(response))
            
        })
    }
}
