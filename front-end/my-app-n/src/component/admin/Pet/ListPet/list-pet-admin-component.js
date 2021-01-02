import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './list-pet-admin-component.css'
import { getListPetAction } from '../../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { DeletePetRequestAction } from '../../../../store/actions/admin-action/pet-admin/deletePetAction'
import {getOnePetRequestAction} from '../../../../store/actions/admin-action/pet-admin/getOnePetAction'
class ListPetAdminComponent extends Component {
    componentDidMount() {
        this.props.getListPetAction()
    }
    DeleteOrgin(id) {
        this.props.DeletePetRequestAction(id)
    }
    render() {
        var i = 1;
        let display = this.props.listPet.map((Pet, index) => {
            return <tr key={index} >
                <td className="align-middle text-center"><p>{i++}</p></td>
                <td className="align-middle"><p>{Pet.name}</p></td>
                <td className="text-center align-middle">
                    <Link to={`/admin/pets/edit/${Pet._id}`} ><i className="fas fa-edit bg-warning p-2 text-white rounded " 
                    data-toggle="tooltip"
                     title="Edit" 
                     data-placement="top"></i></Link>
                </td>
                <td className="text-center align-middle"><i className="fas fa-trash-alt bg-danger p-2 text-white rounded" data-toggle="tooltip" title="Delete" data-placement="top" onClick={() => this.DeleteOrgin(Pet._id)}></i></td>
            </tr>
        })
        return (
            <div className="upload-component">
                <Link to={"/admin/pets/addpet"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Property Location
                </Link>
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
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
        listPet: store.listPetReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        getListPetAction, 
        DeletePetRequestAction,
        getOnePetRequestAction 
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPetAdminComponent))