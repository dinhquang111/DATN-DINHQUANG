import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './forum-topic-component.css'
import { getTopicRequestAction } from '../../../store/actions/forum-action/getTopicAction'
import { bindActionCreators } from 'redux'
import TopicComponent from './topic-component/topic-component'
import { getAllTopicChillActionRequest } from '../../../store/actions/forum-action/getAllTopicChillAction'
class ForumTopicComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkToken: '',
            currentPage: 1, /// trang hien tai
            newsPerPage: 10, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        let { match } = this.props;
        let { fid } = match.params
        this.props.getTopicRequestAction(fid)
        this.props.getAllTopicChillActionRequest()


    }
    AddTopic = (fid) => {
        let token = localStorage.getItem('token')
        if (token) {
            this.props.history.push(`/forum/addtopic/${fid}`)
        } else {
            alert("Vui lòng đăng nhập tài khoản")
        }
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        var moment = require('moment');
        moment().format('llll');
        let { match, Listtopics } = this.props;
        let { fid } = match.params
        const newsList = Listtopics
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
        let displayListTopic = currentTodos.map((topic, index) => {
            let time = moment(topic.created).format('llll')
            return <div key={index}>
                <TopicComponent _id={topic._id} title={topic.title} time={time} username={topic.username} view={topic.views}></TopicComponent>
            </div>
        })
        let forums = this.props.ListForums.map((forum, index) => {
            if (forum._id === fid) {
                return <span className="d-block top-header" key={index}> <i className="far fa-folder-open"></i> {forum.name}</span>
            }
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        let userLevel = localStorage.getItem('level')
        return (
            <div>
                <div className="topic">
                    <div className="container mb-4 pt-4">
                        {forums}
                        {userLevel > 0 &&<button type='button' className="btn btn-color text-white mt-2" onClick={() => this.AddTopic(fid)}><i className="far fa-edit"></i> Post a new topic</button>}
                    </div>
                    <div className="color-form">
                        <div className="form-main container">
                            <div className="form-information">
                                <div className="topiclist shadow bg-white ">
                                    <div>
                                        <ul className="information-main ">
                                            <li className="header-name">Topics</li>
                                            <li className="topics text-color text-center">Replies</li>
                                            <li className="posts text-color text-center">Views</li>
                                            <li className="last-post text-color pl-3">Last post</li>
                                        </ul>
                                        {displayListTopic}
                                        {/* <ul className="information-category w-100 d-table position-relative">
                                                <div className="bg-last 
                                                    d-table-cell align-middle">
                                                    <li className="header-name">
                                                        <span className="d-block hd-color">first forum</span>
                                                        <span className="dec-color">Description</span>
                                                    </li>
                                                    <li className="topics text-color text-center">4</li>
                                                    <li className="posts text-color text-center">9</li>
                                                    <li className="last-post text-color pl-3">
                                                        <span className="d-block">by abc -></span>
                                                        <span>Web Apr 09,2019 2:28 pm</span>
                                                    </li>
                                                </div>
                                            </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>

            </div>
        )
    }
}
const mapToStateProps = (store) => {
    return {
        Listtopics: store.getListTopicReducers,
        ListForums: store.getListForumsReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTopicRequestAction,
        getAllTopicChillActionRequest
    }, dispatch)
}

export default withRouter(connect(mapToStateProps, mapDispatchToProps)(ForumTopicComponent))