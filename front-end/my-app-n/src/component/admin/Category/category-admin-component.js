import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Route, Switch} from 'react-router-dom'
import routes from './category-router'
class CategoryAdminComponent extends Component {
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
    ShowContentRouter = (routes) => {
        let result = null
        if (routes.length > 0) {
            result = routes.map((router, index) => {
                return <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.main}
                >
                </Route>
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
                                    <div className="col-11 m-auto">

                                        <Switch>
                                            {this.ShowContentRouter(routes)}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryAdminComponent))