const initialState = {
    name: "",
    level: "",
    token: "",
    login : false,
    id : "",

}
const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.data.token)
            localStorage.setItem("name", action.data.name)
            localStorage.setItem("level", action.data.level)
            localStorage.setItem("create", action.data.created)
            localStorage.setItem("id", action.data.id)
            return {
                name: action.data.name,
                level: action.data.level,
                token: action.data.token,
                login: action.data.login,
                created: action.data.created,
                id : action.data.id
            }
        case "REGISTER_SUCCESS":
            localStorage.setItem("token", action.data.token)
            localStorage.setItem("name", action.data.name)
            localStorage.setItem("level", action.data.level)
            localStorage.setItem("create", action.data.created)
            localStorage.setItem("id", action.data.id)

            return {
                name: action.data.name,
                level: action.data.level,
                token: action.data.token,
                login: action.data.login,
                created: action.data.created,
                id : action.data.id
            }
        case "CHECK_TOKEN":
            console.log(action.token)
            return {
                ...state,
                check : action.token

            }
        case "DEFAULT_ACTION":{
            console.log(action.login)
            return{
                ...state,
                login: action.login
            }
        }
        default:
            return state;
    }

}
export { loginReducers }