import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './list-forum-chill-admin-component.css'
import { deleleTopicRequestAction } from '../../../../../store/actions/admin-action/forum-action/deleteTopicAction'
import { getTopicRequestAction } from '../../../../../store/actions/forum-action/getTopicAction'
import { getAllTopicChillActionRequest } from '../../../../../store/actions/forum-action/getAllTopicChillAction'
class ListForumChillAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
            fid: ''
        }
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.getTopicRequestAction(id)
        this.props.getAllTopicChillActionRequest()
        this.setState({
            fid: id
        })
    }
    deleleTopic(id) {
        this.props.deleleTopicRequestAction(id)
    }
    // GetOneForum(id) {
    //     this.props.getOneForumRequestAction(id)
    // }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let moment = require('moment');
        let { Listtopics } = this.props
        const newsList = Listtopics
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        var i = 1;
        let display = currentTodos.map((topic, index) => {
            return <tr key={index} >
                <td className="align-middle text-center stt"><p className="d-table-cell align-middle ">{i++}</p></td>
                <td className="admin-brand-name check align-middle"><p className="d-table-cell align-middle ">{topic.title}</p></td>
                <td className="admin-brand-name align-middle "><p className="d-table-cell align-middle text-center">{topic.username}</p></td>
                <td className="admin-brand-name align-middle "><p className="d-table-cell align-middle text-center">{topic.views}</p></td>
                <td className="admin-brand-name align-middle "><p className="d-table-cell align-middle"> {moment(topic.created).format('llll')}</p></td>
                <td className="text-center align-middle">
                    <i className="fas fa-trash-alt bg-danger p-2 text-white rounded"
                        data-toggle="tooltip"
                        title="Delete"
                        data-placement="top"
                        onClick={() => this.deleleTopic(topic._id)}
                    ></i>
                </td>
            </tr>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="chill-upload-component-forum">
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            <th scope="col">UserPost</th>
                            <th scope="col">Views</th>
                            <th scope="col">Created</th>
                            <th colSpan="3" scope="col" className="text-center">Setting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.Listtopics.length > 0 && display}
                    </tbody>
                </table>
                {!this.props.Listtopics.length && <p className="text-center">No data</p>}
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
        Listtopics: store.getListTopicReducers,
        listChill: store.allTopicChillReducer

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTopicRequestAction,
        getAllTopicChillActionRequest,
        deleleTopicRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForumChillAdminComponent))