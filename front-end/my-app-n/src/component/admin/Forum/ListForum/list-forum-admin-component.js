import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './list-forum-admin-component.css'
import { getOneForumRequestAction } from '../../../../store/actions/admin-action/forum-action/getOneForumAction'
import { getListForumAction } from "../../../../store/actions/admin-action/forum-action/getlistForumAction"
import { DeleteForumAction } from "../../../../store/actions/admin-action/forum-action/deleteForumAction"
class ListForumAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        this.props.getListForumAction()
    }
    DeleteForum(id) {
        this.props.DeleteForumAction(id)
    }
    GetOneForum(id) {
        this.props.getOneForumRequestAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let { listforum } = this.props;
        const newsList = listforum
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
        var i = 1;
        let display = currentTodos.map((forum, index) => {
            return <tr key={index} >
                <td className="align-middle text-center stt"><p className="d-table-cell align-middle ">{i++}</p></td>
                <td className="admin-brand-name align-middle ">{forum.id_parents !== '0' ? <Link className="d-table-cell align-middle" to={`/admin/forums/chill/${forum._id}`}>{forum.name}</Link> : forum.name}</td>
                <td className="admin-brand-name align-middle">
                    {forum.id_parents === "0" ? "none" :
                        this.props.listforum.map((forump, indexn) => {
                            if (forum.id_parents === forump._id) {
                                return <p className="d-table-cell align-middle " key={indexn}>{forump.name}</p>
                            }
                        })
                    }
                </td>
                <td className="text-center align-middle">
                    <Link to={`/admin/forums/edit/${forum._id}`} onClick={() => this.GetOneForum(forum._id)}><i className="fas fa-edit bg-warning p-2 text-white rounded " data-toggle="tooltip" title="Edit" data-placement="top"></i></Link>
                </td>
                <td className="text-center align-middle">
                    <i className="fas fa-trash-alt bg-danger p-2 text-white rounded"
                        data-toggle="tooltip"
                        title="Delete"
                        data-placement="top"
                        onClick={() => this.DeleteForum(forum._id)}
                    ></i>
                </td>
            </tr>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="upload-component-forum">
                <Link to={"/admin/forums/add"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Forums
                </Link>
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Parents</th>
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
        listforum: store.getListForumsReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getOneForumRequestAction,
        getListForumAction,
        DeleteForumAction,
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForumAdminComponent))