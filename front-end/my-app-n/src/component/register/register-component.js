import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { registerAction } from "../../store/actions/registerAction"
import "./register.css";
import silverpen from "../../image/silverpen.png"
import { defaultAction } from "../../store/actions/defaultAction"

const initialState = {
    username: "",
    password: "",
    numberphone: "",
    name: "",
    usernameError: "",
    numberphoneError: "",
    passwordError: "",
    nameError: "",
    userNameExistError: ""
}
class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    // componentWillMount() {
    //     if (localStorage.getItem("level") && localStorage.getItem("level") < 4) {
    //         this.props.history.push("/");
    //     } else if (localStorage.getItem("level") && localStorage.getItem("level") === 4) {
    //         this.props.history.push("/admin");
    //     }
    // }

    componentDidUpdate() {
    }
    handleonSubmit = async event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let { username, password, name, numberphone } = this.state
            let user = {
                username, password, name, numberphone
            }
            this.props.registerAction(user)
            this.setState({
                username: "",
                password: "",
                numberphone: "",
                name: "",
                usernameError: "",
                numberphoneError: "",
                passwordError: "",
                nameError: "",
                userNameExistError: "",
            })
            setTimeout(() => {
                if (!this.props.error) {
                    this.props.history.goBack()
                }
            }, 200);
        }

    }
    validate = () => {
        let { username, password, numberphone, name } = this.state
        let passwordError = '';
        let numberphoneError = '';
        let nameError = ''
        let usernameError = '';
        if (username.length < 6) {
            usernameError = 'Minimum 6 characters required'
        }
        if (password.length < 6) {
            passwordError = 'Minimum 6 characters required'
        }
        if (numberphone.length < 6) {
            numberphoneError = 'Minimum 10 characters required'
        }
        if (name.length < 2) {
            nameError = 'Minimum 2 characters required'
        }
        if (usernameError || passwordError || numberphoneError || nameError) {
            this.setState({
                usernameError, nameError, numberphoneError, passwordError
            })
            return false
        }
        return true
    }
    register() {

        // this.props.registerAction(this.state.username, this.state.password, this.state.name, this.state.numberphone)
    }
    render() {
        return (
            <div>
                <div className="body-register">
                    <div className="loginbox register">
                        <img src={silverpen} className="avatar" alt="" />
                        <div>
                            <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                <h1>Register</h1>
                                {this.props.error && (
                                    !this.state.passwordError &&
                                    !this.state.numberphoneError &&
                                    !this.state.nameError &&
                                    !this.state.usernameError
                                )
                                    ? <div style={{ fontSize: 12, color: "red" }} className="ml-3">{this.props.error}</div> : null}
                                <p className="d-inline-block mr-4">User Name</p>  {this.state.usernameError ? <span style={{ fontSize: 12, color: "red" }}>
                                    {this.state.usernameError}
                                </span> : null}
                                <div className="textbox">
                                    <i className="fas fa-user"></i>
                                    <input type="text"
                                        onChange={(event) => { this.setState({ username: event.target.value }); }}
                                        placeholder="Enter username"
                                        value={this.state.username}
                                    />

                                </div>
                                <p className="d-inline-block mr-4">Name</p> {this.state.nameError ? <span style={{ fontSize: 12, color: "red" }}>
                                    {this.state.nameError}
                                </span> : null}
                                <div className="textbox">
                                    <i className="far fa-user-circle"></i>
                                    <input type="text"
                                        onChange={(event) => { this.setState({ name: event.target.value }); }}
                                        placeholder="Enter name"
                                        value={this.state.name} />

                                </div>
                                <p className="d-inline-block mr-4">Number Phone</p> {this.state.numberphoneError ? <span style={{ fontSize: 12, color: "red" }}>
                                    {this.state.numberphoneError}
                                </span> : null}
                                <div className="textbox">
                                    <i className="fas fa-mobile-alt "></i>
                                    <input type="number"
                                        onChange={(event) => { this.setState({ numberphone: event.target.value }); }}
                                        placeholder="Enter number phone"
                                        value={this.state.numberphone}
                                    />

                                </div>
                                <p className="d-inline-block mr-4">Password</p>   {this.state.passwordError ? <span style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </span> : null}
                                <div className="textbox">
                                    <i className="fas fa-lock"></i>
                                    <input type="password"
                                        onChange={(event) => { this.setState({ password: event.target.value }); }}
                                        placeholder="Enter password"
                                        value={this.state.password} />

                                </div>

                                <button className={"btn btn-primary btn-login"}
                                    type="submit"
                                    disabled={!this.state.username.trim() || !this.state.password.trim() || !this.state.numberphone.trim() || !this.state.name.trim()}
                                > Register Now
                                </button>

                                <p className="p-login-register"><Link className="link-login-register" onClick={() => {
                                    this.props.history.goBack()
                                }}>Back</Link></p>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        error: store.Error,
        name: store.loginReducers.name,
        level: store.loginReducers.level,
        login: store.loginReducers.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ registerAction, defaultAction }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterComponent))