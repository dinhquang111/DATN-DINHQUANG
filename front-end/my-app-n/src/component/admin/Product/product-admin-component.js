import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Route, Switch} from 'react-router-dom'
import router from './product-router'
import { getListProductRequestAction } from '../../../store/actions/admin-action/product-admin/getListProductAction'
import { GetListBrandRequestAction } from '../../../store/actions/admin-action/brand-admin/getListBrandAction'
import { getListPetAction } from '../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { bindActionCreators } from 'redux'
class ProductAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CheckC: true
        }
    }
    componentWillMount() {
        this.props.getListProductRequestAction()
        this.props.GetListBrandRequestAction()
        this.props.getListPetAction()
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
                                    <div className="col-11 m-auto">
                                        {/* <h3 className="text-muted text-center mb-3"><i className="fas fa-user-graduate mr-2"></i>Staff Salary</h3> */}
                                        {/* {this.state.CheckC ? <Link to={"/admin/products/addproduct"} className="btn view mb-4" onClick={() => this.checkin()}>
                                            <i className="fas fa-plus-square mr-2"></i>Add Product
                                        </Link> : <Link to={"/admin/products"} className="btn view mb-4" onClick={() => this.checkout()}>
                                            <i className="fas fa-plus-square mr-2"></i>Back
                                        </Link>} */}
                                        {/**/}
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
    return bindActionCreators({
        getListProductRequestAction,
        GetListBrandRequestAction,
        getListPetAction
    },dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductAdminComponent))