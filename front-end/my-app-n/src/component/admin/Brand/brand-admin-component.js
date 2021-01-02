import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import {GetListBrandRequestAction} from '../../../store/actions/admin-action/brand-admin/getListBrandAction'
import router from './brand-router'
import {bindActionCreators} from 'redux'
class BrandAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CheckC: true
        }
    }
    componentWillMount(){
        this.props.GetListBrandRequestAction()
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
    ShowContentRouter = (router) => {
        let result = null
        if (router.length > 0) {
            result = router.map((routes,index) => {
                return <Route
                    key={index}
                    exact={routes.exact}
                    path={routes.path}
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
                                            {this.ShowContentRouter(router)}
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
    return bindActionCreators({GetListBrandRequestAction},dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrandAdminComponent))