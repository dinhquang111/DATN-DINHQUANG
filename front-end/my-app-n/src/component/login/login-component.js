import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter, Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { loginAction } from "../../store/actions/loginAction"
import { checkToken } from "../../store/actions/checktokenAction"
import "./login.css";
import h2 from '../../image/h2.png'
import { defaultAction } from "../../store/actions/defaultAction"
import MenuComponent from '../menu-header/menu-component'
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }
    // componentDidMount(){
    // if(this.props.name&&this.props.level===4){
    //     this.props.history.push("/admin");
    // }else if(this.props.name&&this.props.level<4){
    //     this.props.history.push("/");
    // }
    componentDidUpdate() {
        if (this.props.login === true) {
            this.props.defaultAction();
            if (localStorage.getItem("level") && localStorage.getItem("level") < 4) {
                this.props.history.push("/");
            } else if (localStorage.getItem("level") && localStorage.getItem("level") === 4) {
                this.props.history.push("/admin");
            }
        }
    }
    componentWillMount() {
        if (localStorage.getItem("level") && localStorage.getItem("level") < 4) {
            this.props.history.push("/");
        } else if (localStorage.getItem("level") && localStorage.getItem("level") === 4) {
            this.props.history.push("/admin");
        }
    }
    login() {
        this.props.loginAction(this.state.username, this.state.password)
    }
    render() {
        return (
            <div>
                <MenuComponent />
                <div className="product">
                    <div className="product-hd">
                        <div className="product-bg"></div>
                        <div className="product-title">
                            <div className="product-content">
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product-search mb-5 ">
                        <div className="product-search-hd">
                            <div className="product-formSearch">
                                <div className="container">
                                    <h4 className="mb-4">
                                        Đăng nhập
                                    </h4>
                                    <div className="row">
                                        <div className="col-sm">
                                            <div>
                                                <p >Username</p>
                                                <div className="textbox">
                                                    <i className="fas fa-user"></i>
                                                    <input type="text"
                                                        onChange={(event) => { this.setState({ username: event.target.value }); }}
                                                        placeholder="Enter Username" />
                                                </div>
                                                <p >Password</p>
                                                <div className="textbox">
                                                    <i className="fas fa-lock"></i>
                                                    <input type="password"
                                                        onChange={(event) => { this.setState({ password: event.target.value }); }}
                                                        placeholder="Enter Password" />
                                                </div>

                                                <button className={"btn btn-primary btn-login"}
                                                    type="button"
                                                    disabled={!this.state.username || !this.state.password}
                                                    onClick={() => { this.login() }}> Login
                                                </button>
                                                <p className="p-login-register"><span>Not a member?</span> <Link to={"/register"} className="link-login-register">Sign up now</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container product-main mt-5">
                        <div className="product-list-menu">
                            {/* <ProductListMenu /> */}
                            {/* <ProductListMenu />
                            <ProductListMenu /> */}
                        </div>
                        {/* <ProductListSlider /> */}
                        {/* <Switch>
                            <Route exact path={"/product"}>
                                {listProductWithCategory}
                            </Route>
                            <Route path={"/product/search"}>
                                <ProductListFindComponent />
                            </Route>
                            <Route path={"/product/detail"}>
                                <ProductDetailComponent />
                            </Route>
                        </Switch> */}
                        {/* {!this.props.listProductsFound.product.length && listProductWithCategory}
                        {this.props.listProductsFound.product.length !== 0 && <ProductListFindComponent />} */}
                    </div>
                </div>
                {/* <div className="body-login">
                    <div className="loginbox">
                        <img src={h2} className="avatar" alt="" />
                        <div>
                            <h1>Login</h1>
                            <p >Username</p>
                            <div className="textbox">
                                <i className="fas fa-user"></i>
                                <input type="text"
                                    onChange={(event) => { this.setState({ username: event.target.value }); }}
                                    placeholder="Enter Username" />
                            </div>
                            <p >Password</p>
                            <div className="textbox">
                                <i className="fas fa-lock"></i>
                                <input type="password"
                                    onChange={(event) => { this.setState({ password: event.target.value }); }}
                                    placeholder="Enter Password" />
                            </div>

                            <button className={"btn btn-primary btn-login"}
                                type="button"
                                disabled={!this.state.username || !this.state.password}
                                onClick={() => { this.login() }}> Login  <i className="fas fa-paw"></i>
                            </button>
                            <p className="p-login-register"><span>Not a member?</span> <Link to={"/register"} className="link-login-register">Sign up now</Link></p>
                        </div>
                    </div>
                </div > */}
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        name: store.loginReducers.name,
        level: store.loginReducers.level,
        check: store.loginReducers.check,
        login: store.loginReducers.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loginAction, checkToken, defaultAction }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))