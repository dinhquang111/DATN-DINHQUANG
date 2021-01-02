import axios from 'axios'
import * as Types from '../constants/types'
const registerAction = (user) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_PROGRESS"
        })
        axios.post("http://localhost:3000/api/v1/users/register", user)
            .then((response) => {
                if (response.data.msg === "created success") {
                    dispatch({
                        type: "REGISTER_SUCCESS",
                        data: {
                            name: response.data.name,
                            level: response.data.level,
                            token: response.data.token,
                            login: true,
                            created: response.data.created,
                            id: response.data.id,
                        }
                    })
                    dispatch({
                        type:Types.USER_DONE,
                    })
                    alert("Register success")
                }
                else {
                    dispatch({
                        type: "REGISTER_FAILED"
                    })
                }
            })
            .catch((err) => {
                if (err.response&&err.response.data.msg === 'username is exist') {
                    dispatch({
                        type: Types.USER_EXIST,
                    })
                }

            })
    }
}
export { registerAction }