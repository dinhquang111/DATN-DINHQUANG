import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './forum-component.css'
import MenuComponent from '../menu-header/menu-component'
import FooterComponent from '../footer/footer-component'
import { getListForumAction } from '../../store/actions/admin-action/forum-action/getlistForumAction'
import routes from './forum-router'
class ForumComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getListForumAction()
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
                <MenuComponent />
                <div className="form">
                    <div className="form-hd">
                        <div className="form-bg"></div>
                        <div className="form-title">
                            <div className="form-content">
                                <h2 className="header">forum</h2>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5 color-bg">
                        <Switch>
                            {this.showContentRoutes(routes)}
                        </Switch>
                    </div>
                </div>
                <FooterComponent />
            </div >
        )
    }
}

const mapStateToProps = (store) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getListForumAction }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForumComponent))