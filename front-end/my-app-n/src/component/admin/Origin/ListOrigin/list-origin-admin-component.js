import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './list-origin-admin-component.css'
import { getListOriginAction } from '../../../../store/actions/admin-action/orgin-admin/getListOriginAction'
import { DeleteOriginAction } from '../../../../store/actions/admin-action/orgin-admin/deleteOriginAction'
import { getOneOriginRequestAction } from '../../../../store/actions/admin-action/orgin-admin/getOneOriginAction'
class ListOriginAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        this.props.getListOriginAction()
    }
    DeleteOrgin(id) {
        this.props.DeleteOriginAction(id)
    }
    GetOneOrigins(id) {
        this.props.getOneOriginRequestAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let { listOrigin } = this.props
        const newsList = listOrigin
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        var i = 1;
        let display = currentTodos.map((Origin, index) => {
            return <tr key={index} >
                <td className="align-middle text-center"><p>{i++}</p></td>
                <td className="admin-brand-name align-middle"><p>{Origin.name}</p></td>
                <td className="text-center align-middle">
                    <Link to={`/admin/origins/edit/${Origin._id}`} onClick={() => this.GetOneOrigins(Origin._id)}><i className="fas fa-edit bg-warning p-2 text-white rounded " data-toggle="tooltip" title="Edit" data-placement="top"></i></Link>
                </td>
                <td className="text-center align-middle"><i className="fas fa-trash-alt bg-danger p-2 text-white rounded" data-toggle="tooltip" title="Delete" data-placement="top" onClick={() => this.DeleteOrgin(Origin._id)}></i></td>
            </tr>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="upload-component-origin">
                <Link to={"/admin/origins/add"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Project
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
                <div className="pagination-custom container mt-4 mb-4">
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
        listOrigin: store.listOriginReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListOriginAction,
        DeleteOriginAction,
        getOneOriginRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListOriginAdminComponent))