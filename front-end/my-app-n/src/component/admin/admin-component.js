import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import "./admin-component.css"
import routes from './admin-router'
class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }
    }
    showContentRouter = (routes) => {
        let result = null
        if (routes.length > 0) {
            result = routes.map((router, index) => {
                return <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.main}
                ></Route>
            })
        }
        return result
    }   
    componentDidMount(){
        let level = localStorage.getItem('level')
        if(level<2){
            this.props.history.push('/')
        }
    }
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
    render() {
        let userLevel = localStorage.getItem('level')
        return (
            <div className="admin-component">
                <div>
                    <nav className="navbar navbar-expand-md navbar-light">
                        <button className="navbar-toggler ml-auto mb-2 bg-light"
                            type="button" data-toggle="collapse" data-target="#myNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <div className="container-fluid">
                                <div className="row ">
                                    {/* sidebar */}
                                    <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top ">
                                        <Link to="/" className="navbar-brand text-white d-block mx-auto text-center admin-brand mb-4 bottom-border custom-logo">ADMIN</Link>
                                        {/* <div className="bottom-border pb-3">
                                            <img src={admin} width="50" className="rounded-circle mr-3" />
                                            <a href={1} className="text-white">Helen Smith</a>
                                        </div> */}
                                        <ul className="navbar-nav flex-column mt-4">
                                            {(userLevel == 3 || userLevel == 4) && <li className="nav-item">
                                                <Link to="/admin/users" className="nav-link text-white p-3 mb-2 current">
                                                <i class="fas fa-users text-light fa-lg mr-3"></i>
                                                    User</Link>
                                            </li>}
                                            <li className="nav-item">
                                                {(userLevel == 2 || userLevel == 4) && <Link to="/admin/brands" className="nav-link text-white p-3 mb-2 current">
                                                    <i className="far fa-copyright text-light fa-lg mr-3"></i>
                                                    Brands</Link>}
                                            </li>
                                            <li className="nav-item">
                                                {(userLevel == 2 || userLevel == 4) && <Link to="/admin/origins" className="nav-link text-white p-3 mb-2 current">
                                                    <i className="fas fa-globe-africa  text-light fa-lg mr-3"></i>Project</Link>}

                                            </li>
                                            <li className="nav-item">
                                                {(userLevel == 2 || userLevel == 4) && <Link to="/admin/categorys" className="nav-link text-white p-3 mb-2 current">
                                                <i class="far fa-list-alt text-light fa-lg mr-3"></i> Price range</Link>}
                                            </li>
                                            <li className="nav-item">
                                                {(userLevel == 2 || userLevel == 4) && < Link to="/admin/pets" className="nav-link text-white p-3 mb-2 current">
                                                    <i className="fas fa-city fa-lg  text-light mr-3"></i>Location</Link>}
                                            </li>
                                            <li className="nav-item">
                                                {(userLevel == 2 || userLevel == 4) && <Link to="/admin/products" className="nav-link text-white p-3 mb-2 current">
                                                    <i className="fab fa-linux text-light mr-3 fa-lg"></i>Product</Link>}
                                            </li>
                                            <li className="nav-item">
                                                {(userLevel == 2 || userLevel == 4) && <Link to="/admin/blogs" className="nav-link text-white p-3 mb-2 current">
                                                <i class="fab fa-blogger-b text-light mr-3 fa-lg"></i>Blog</Link>}
                                            </li>
                                            {/* <li className="nav-item">
                                                <a href={1} className="nav-link text-white p-3 mb-2 current">
                                                    <i className="fas fa-chart-bar text-light fa-lg mr-3"></i>Charts</a>
                                            </li> */}
                                            <li className="nav-item">
                                                {(userLevel === 3 || userLevel === 4) && <Link to="/admin/forums" className="nav-link text-white p-3 mb-2 current">
                                                    <i className="fas fa-table text-light fa-lg mr-3"></i>Forum</Link>}
                                            </li>
                                            {/* <li className="nav-item">
                                                <a href={1} className="nav-link text-white p-3 mb-2 current">
                                                    <i className="fas fa-wrench text-light fa-lg mr-3"></i>Setting</a>
                                            </li> */}
                                            {/* <li className="nav-item">
                                                <a href={1} className="nav-link text-white p-3 mb-2 sidebar-link">
                                                    <i className="fas fa-file-alt text-light fa-lg mr-3"></i>Documentation</a>
                                            </li> */}
                                        </ul>
                                    </div>
                                    {/*end of sidebar */}
                                    {/* top-nav */}
                                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 top-navbar fixed-top header-bg">
                                        <div className="row align-items-center">
                                            <div className="col-md-9 text-light text-uppercase mb-0">
                                                <h4></h4>
                                            </div>
                                            {/* <div className="col-md-5">
                                                <form>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control search-input" placeholder="Search..." />
                                                        <button type="button" className="btn btn-light search-button"><i className="fas fa-search"></i></button>
                                                    </div>

                                                </form>
                                            </div> */}
                                            <div className="col-md-3">
                                                <ul className="navbar-nav ">
                                                    <li className="nav-item ml-md-auto" >
                                                        <Link className="nav-link" data-toggle="modal" data-target="#sign-out" >
                                                            <i className="fas fa-sign-out-alt text-muted fa-lg"></i>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    {/*end-top-nav */}
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* end of navbar */}
                    {/* modal */}
                    {/* confirm logout */}
                    <div className="modal" id="sign-out">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Want to leave</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    Press logout to leave
                                                        </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-dismiss="modal">Stay here</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.logout()}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end-modal */}
                    {/* Route display content when click navbar*/}
                    <Switch>
                        {this.showContentRouter(routes)}
                    </Switch>
                </div>

            </div >

        )
    }
}
const mapStateToProps = (store) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminComponent))