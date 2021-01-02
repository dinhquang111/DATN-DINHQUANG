import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import MenuComponent from '../menu-header/menu-component'
import FooterComponent from '../footer/footer-component'
import './user-component.css'
import routes from './user-router'
import UserListMenu from './user-list-menu/user-list-menu'
class UserComponent extends Component {
    componentDidUpdate(){
        let id = localStorage.getItem('id')
        if(!id){
            this.props.history.push('/')
        }
    }
    showContentRoutes = (routes) => {
        let result = null
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.main}
                />
            })
        }
        return result
    }
    render() {
        return (
            <div>
                <div>
                    <MenuComponent />
                    <div className="form">
                        <div className="form-hd user-new">
                            <div className="form-bg"></div>
                            <div className="form-title">
                                <div className="form-content">
                                    <h2 className="header">Welcome : {this.props.ItemUser.name}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5 container mt-5">
                            <div className="row">
                                <div className="col-sm-4">
                                        <UserListMenu/>
                                </div>
                                <div className="col-sm-8">
                                    <Switch>
                                        {this.showContentRoutes(routes)}
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterComponent />
                </div >
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        ItemUser: store.userProfileReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserComponent))