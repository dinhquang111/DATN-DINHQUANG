import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter,Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {DeleteBrandRequestAction} from '../../../../store/actions/admin-action/brand-admin/deleteBrandAction'
import { GetOneBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/getOneBrandAction'
import { GetListBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/getListBrandAction'
import './list-brand-admin-component.css'
class ListBrandAdminComponent extends Component {
    componentWillMount() {
        this.props.GetListBrandRequestAction()
    }
    GetOneBrand(id){
        this.props.GetOneBrandRequestAction(id)
    }
    DeleteBrand(id){
        this.props.DeleteBrandRequestAction(id)
    }
    render() {
        var i = 1;
        let display = this.props.listBrands.map((brands, index) => {
            return <tr key={index} >
                <td className="align-middle text-center"><p>{i++}</p></td>
                <td className="admin-brand-name align-middle"><p>{brands.name}</p></td>
                <td className="admin-brand-name align-middle"><p >{brands.introduction}</p></td>
                <td className="admin-brand-name align-middle"><p>{brands.context}</p></td>
                <td className="text-center align-middle">
                    <Link to={`/admin/brands/edit/${brands._id}`}>
                        <i className="fas fa-edit bg-warning p-2 text-white rounded "
                            data-toggle="tooltip"
                            title="Edit" data-placement="top"
                            onClick={()=>this.GetOneBrand(brands._id)}
                            ></i>
                    </Link>
                </td>
                <td className="text-center align-middle">
                    <i className="fas fa-trash-alt bg-danger p-2 text-white rounded" 
                    data-toggle="tooltip" 
                    title="Delete" 
                    data-placement="top"
                    onClick={()=>this.DeleteBrand(brands._id)}
                    ></i>
                    </td>
            </tr>
        })
        return (
            <div className="upload-component">
                <Link to={"/admin/brands/add"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Brand
                </Link>
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Introduction</th>
                            <th scope="col">Context</th>
                            <th colSpan="3" scope="col" className="text-center">Setting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {display}
                    </tbody>
                </table>

                {/* pagination */}
                {/* <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item ">
                            <a href={1} className="page-link py-2 px-3">
                                <span>&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a href={1} className="page-link py-2 px-3">
                                1
                                                        </a>
                        </li>   <li className="page-item">
                            <a href={1} className="page-link py-2 px-3">
                                2
                                                        </a>
                        </li>
                        <li className="page-item">
                            <a href={1} className="page-link py-2 px-3">
                                <span>&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav> */}
                {/* end-pagination */}
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        listBrands:store.getListBrandReducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        GetListBrandRequestAction,
        GetOneBrandRequestAction,
        DeleteBrandRequestAction
     }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListBrandAdminComponent))