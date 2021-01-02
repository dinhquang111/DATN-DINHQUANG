import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './list-user-admin-component.css'
import { getListPetAction } from '../../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { DeletePetAction } from '../../../../store/actions/admin-action/pet-admin/deletePetAction'
import { getOnePetRequestAction } from '../../../../store/actions/admin-action/pet-admin/getOnePetAction'
import { getAllUserRequestAction } from '../../../../store/actions/user-action/getalluserAction'
class ListUserAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        this.props.getListPetAction()
        this.props.getAllUserRequestAction()
    }
    DeleteOrgin(id) {
        this.props.DeletePetAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let { listUser } = this.props
        const newsList = listUser
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
        let userLevel = localStorage.getItem('level')
        let moment = require('moment');
        var i = 1;
        let display = currentTodos.map((user, index) => {
            if (user.level < 4 && userLevel == 4) {
                return <tr key={index} >
                    <td className="align-middle text-center"><p>{i++}</p></td>
                    <td className="align-middle"><p>{user.username}</p></td>
                    <td className="align-middle"><p>{user.name}</p></td>
                    <td className="align-middle text-center"><p>
                        {user.level === 3 ? 'Mod' : user.level === 2 ? 'Poster' : user.level === 1 ? 'Normal user' : user.level === 0 ? 'User banned' : ''}
                    </p></td>
                    <td className="align-middle text-center"><p>{moment(user.created).format('llll')}</p></td>
                    <td className="text-center align-middle">
                        <Link to={`/admin/users/edit/${user._id}`} ><i className="fas fa-edit bg-warning p-2 text-white rounded "
                            data-toggle="tooltip"
                            title="Edit"
                            data-placement="top"></i></Link>
                    </td>
                    {/* <td className="text-center align-middle"><i className="fas fa-trash-alt bg-danger p-2 text-white rounded" data-toggle="tooltip" title="Delete" data-placement="top" onClick={() => this.DeleteOrgin(Pet._id)}></i></td> */}
                </tr>
            } else if (user.level < 2 && userLevel == 3) {
                return <tr key={index} >
                    <td className="align-middle text-center"><p>{i++}</p></td>
                    <td className="align-middle"><p>{user.username}</p></td>
                    <td className="align-middle"><p>{user.name}</p></td>
                    <td className="align-middle text-center"><p> {user.level === 3 ? 'Mod' : user.level === 2 ? 'Poster' : user.level === 1 ? 'Normal user' : user.level === 0 ? 'User banned' : ''}</p></td>
                    <td className="align-middle text-center"><p>{moment(user.created).format('llll')}</p></td>
                    <td className="text-center align-middle">
                        <Link to={`/admin/users/edit/${user._id}`} ><i className="fas fa-edit bg-warning p-2 text-white rounded "
                            data-toggle="tooltip"
                            title="Edit"
                            data-placement="top"></i></Link>
                    </td>
                    {/* <td className="text-center align-middle"><i className="fas fa-trash-alt bg-danger p-2 text-white rounded" data-toggle="tooltip" title="Delete" data-placement="top" onClick={() => this.DeleteOrgin(Pet._id)}></i></td> */}
                </tr>
            }
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="upload-component">
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Account</th>
                            <th scope="col">Name</th>
                            <th scope="col">level</th>
                            <th scope="col">created</th>
                            <th colSpan="3" scope="col" className="text-center">Setting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {display}
                    </tbody>
                </table>

                {/* pagination */}
                <div className="pagination-custom container mt-4">
                    <ul id="page-numbers">
                        {
                            pageNumbers.map(number => {
                                if (this.state.currentPage === number) {
                                    return (
                                        <li key={number} id={number} className="active">
                                            {number}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={number} id={number} onClick={this.chosePage} >
                                            {number}
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
                {/* end-pagination */}
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        listPet: store.listPetReducer,
        listUser: store.listUserReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListPetAction,
        DeletePetAction,
        getOnePetRequestAction,
        getAllUserRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListUserAdminComponent))