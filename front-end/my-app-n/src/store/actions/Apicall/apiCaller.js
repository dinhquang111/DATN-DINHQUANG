import axios from 'axios'
import * as Config from './Config'

export const callApi = (endpoint,method,body) =>{
    
    return axios({
        method : method,
        url : `${Config.API_URL}/${endpoint}`,
        data : body
    }).catch((err)=>{
        
    })
}

export const callApi2 = (endpoint,method,body) =>{
    
    return axios({
        method : method,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        url : `${Config.API_URL2}/${endpoint}`,
        data : body
    }).catch((err)=>{
        
    })
}
