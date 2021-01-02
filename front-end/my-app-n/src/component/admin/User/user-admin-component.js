import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import routes from './user-router'
class UserAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CheckC: true
        }
    }
    checkin = () => {
        this.setState({
            CheckC: false
        })
    }
    checkout = () => {
        this.setState({
            CheckC: true
        })
    }
    showContentRouter = (router) => {
        let result = null
        if (router.length > 0) {
            result = router.map((routes, index) => {
                return <Route
                    key={index}
                    path={routes.path}
                    exact={routes.exact}
                    component={routes.main}
                ></Route>
            })
        }
        return result
    }
    render() {
        return (
            <div>
                {/* table  */}
                <section>
                    <div className="container-fluid">
                        <div className="row table-magin-top">
                            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto ">
                                <div className="row">
                                    <div className="col-10 m-auto">
                                        <Switch>
                                            {this.showContentRouter(routes)}
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                {/* end-table */}

            </div>

        )
    }
}
const mapStateToProps = (store) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserAdminComponent))