import axios from 'axios'
import * as Types from '../constants/types'
const loginAction = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_PROGRESS"
        })
        axios.post("http://localhost:3000/api/v1/users/login", { username, password })
            .then((response) => {
                if (response.data.msg === "login success") {
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        data: {
                            name: response.data.name,
                            level: response.data.level,
                            token: response.data.token,
                            login: true,
                            created: response.data.created,
                            id: response.data.id
                        }
                    })
                    dispatch({
                        type : Types.LOGIN_SUCCESS
                    })
                }
                else {
                    dispatch({
                        type: "LOGIN_FAILED"
                    })
                }
            })
            .catch((err) => {
                if (err.response&&err.response.data.msg === 'username is not found') {
                    dispatch({
                        type: Types.USER_WRONG
                    })
                }
                if (err.response&&err.response.data.msg === 'password is wrong') {
                    dispatch({
                        type: Types.PASSWORD_WRONG
                    })
                }
            })
    }
}
export { loginAction }