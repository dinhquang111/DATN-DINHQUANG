import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getListCategoryAction } from '../../store/actions/admin-action/category-admin/getListCategoryAction'
import { bindActionCreators } from 'redux'
import { loginAction } from "../../store/actions/loginAction"
import './menu-component.css'
import { SeacrchProductRequestAction } from '../../store/actions/product-action/search-product-action'
import { getListProductRequestAction } from '../../store/actions/admin-action/product-admin/getListProductAction'

class MenuComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            name2: '',
            isCheck: false,
            scrolled: false,
            carts: 0,
            username: "",
            password: ""
        }
    }
    componentWillMount() {
        if (localStorage.getItem("name")) {
            this.setState({
                name: localStorage.getItem("name"),
                isCheck: true
            })
        }
        this.props.getListCategoryAction()

    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const istop = window.scrollY < 250

            if (istop !== true) {
                this.setState({
                    scrolled: true
                })
            } else {
                this.setState({
                    scrolled: false
                })
            }
        })
        this.CartCount()
        if (localStorage.getItem("name")) {
            this.setState({
                name: localStorage.getItem("name"),
                isCheck: true,
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.ItemUser) {
            let { ItemUser } = nextProps
            this.setState({
                name2: ItemUser.name,
            })
        }
    }
    // componentWillUpdate() {
    //     this.CartCount()
    //     setTimeout(() => {
    //         if (localStorage.getItem('token')) {
    //             document.querySelector(".popup2").style.display = "none";
    //             this.setState({
    //                 name: localStorage.getItem("name"),
    //                 isCheck: true,
    //             })
    //         }

    //     }, 150);
    // }

    logout() {
        localStorage.removeItem("name");
        localStorage.removeItem("level");
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("create");
        this.setState({
            isCheck: false
        })
        this.props.history.push('/')
    }
    login() {
        this.props.loginAction(this.state.username, this.state.password)
        setTimeout(() => {
            if (!this.props.error) {
                if (localStorage.getItem('token')) {
                    document.querySelector(".popup2").style.display = "none";
                    this.setState({
                        name: localStorage.getItem("name"),
                        isCheck: true,
                    })
                }
                if (localStorage.getItem("level") && localStorage.getItem("level") == 4) {
                    this.props.history.push("/admin");
                }
                this.setState({
                    username: "",
                    password: ""
                })
            }
        }, 200);
    }
    CartCount() {
        let count = 0
        this.props.carts.forEach(cart => {
            count += cart.quantity
        });
        return count
    }
    displayFormLogin = () => {
        document.querySelector(".popup2").style.display = "flex"
    }
    closeFormLogin = () => {
        document.querySelector(".popup2").style.display = "none"
    }
    
    // getProduct = () => {
    //     this.props.getListProductRequestAction()
    // }
    SearchProduct = (id) => {
        this.props.SeacrchProductRequestAction(id)
    }

    render() {
        let listCategory = this.props.listCategory.map((category, index) => {
            return <li key={index}>
                <Link to={`/product/search/${category._id}`} className="chid" onClick={() => this.SearchProduct(category._id)}>{category.name}</Link>
            </li>
        })
        let userLevel = localStorage.getItem('level')
        return (
            <div>
                <header className={this.state.scrolled ? "sticky" : "sIndex"}>
                    <div className="main-menu-area position-relative">
                        <div className="container-fluid position-absolute border-btm"
                            className={this.state.scrolled ? "container-fluid position-absolute border-btm newBB shadow bg-white rounded" : "container-fluid position-absolute border-btm"}
                        >
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="logo">
                                        <Link to="/">BĐS 24h</Link>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="main-menu text-right">
                                        <div>
                                            <nav>
                                                <ul>
                                                    <li>
                                                        <Link to="/" className="parent">Home</Link>
                                                        {/* <ul className="text-left rounded ">
                                                            <li><a href={1} className="chid">Introduction</a></li>
                                                            <li><a href={1} className="chid">Contact</a></li>

                                                        </ul> */}
                                                    </li>
                                                    <li><Link to="/product" className="parent">Properties</Link>
                                                        {/* <div className="sub-menu-l">
                                                            <ul className="text-left rounded">
                                                                <li><a href={1} className="chid">List1</a></li>
                                                        <li><a href={1} className="chid">List1</a></li>
                                                        <li><a href={1} className="chid">List1</a></li>
                                                        <li><a href={1} className="chid">List1</a></li>
                                                                {listCategory}
                                                            </ul>
                                                        </div> */}
                                                    </li>
                                                    <li><Link to='/predict' className="parent">Predict</Link></li>
                                                    <li><Link to='/blog' className="parent">Blog</Link></li>
                                                    {/* <li><Link to='/forum' className="parent">Forum</Link></li> */}
                                                    <li><Link to="/cart" className="parent cart-border">
                                                        <i className="fab fa-buffer d-inline"></i>                                                  
                                                        <span className="pl-2">Tick</span>
                                                        {/* <span className="sll">{this.CartCount()}</span> */}
                                                    </Link>
                                                    </li>
                                                    <li className="login ">
                                                        {!this.state.isCheck && <p className="parent " onClick={() => this.displayFormLogin()} id="button">LOGIN</p>
                                                        }
                                                        {this.state.isCheck && <div className="dropdown parent2 dropdown-parent">
                                                            <button className="btn dropdown-toggle bg-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                {this.state.name2 ? this.state.name2 : this.state.name}
                                                            </button>
                                                            <div className="dropdown-menu custom-drop-menu" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item custom-drop-item" to={'/profile'}>Profile</Link>
                                                                {userLevel > 1 && <Link className="dropdown-item custom-drop-item" to={'/admin'}>Manage</Link>}
                                                                <span onClick={() => {
                                                                    this.logout()
                                                                }} className="dropdown-item custom-drop-item" >Logout</span>
                                                            </div>
                                                        </div>}
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        </div>

                    </div>
                    
                    {/* !------------------------Login-form------------------------! */}
                    <div className="popup2">
                        <div className="popup2-content">
                            <span className="bg-chan"></span>
                            <span className="close" onClick={() => this.closeFormLogin()}><i className="far fa-times-circle"></i></span>
                            <div className="container">
                                <h1 className="mb-4 text-center title-header">
                                    Sign In
                                    </h1>
                                <div className="row">
                                    <div className="col-sm">
                                        <div>
                                            {this.props.error ? <div style={{ fontSize: 12, color: "red" }} className="">{this.props.error}</div> : null}
                                            <p className="login-title">Username</p>
                                            <div className="textbox">
                                                <i className="fas fa-user"></i>
                                                <input type="text"
                                                    onChange={(event) => { this.setState({ username: event.target.value }); }}
                                                    placeholder="Enter Username"
                                                    value={this.state.username}
                                                />
                                            </div>
                                            <p className="login-title">Password</p>
                                            <div className="textbox">
                                                <i className="fas fa-lock"></i>
                                                <input type="password"
                                                    onChange={(event) => { this.setState({ password: event.target.value }); }}
                                                    placeholder="Enter Password"
                                                    value={this.state.password}
                                                />
                                            </div>
                                            <div className="text-center mt-4">
                                                <button className="btn btn-login"
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
                    
                    {/* !------------------------End-Login-form------------------------! */}
                </header>
            </div>
        )
    }
}
const mapStatetoProps = (store) => {
    return {
        name: store.loginReducers.name,
        token: store.loginReducers.token,
        login: store.loginReducers.login,
        listCategory: store.ListcategoryReducer,
        carts: store.CartReducers,
        ItemUser: store.userProfileReducers,
        error: store.ErrorLogin

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListCategoryAction,
        loginAction,
        getListProductRequestAction,
        SeacrchProductRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(MenuComponent))