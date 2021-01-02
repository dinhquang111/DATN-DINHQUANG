import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './forum-topic-detail-component.css'
import { getDetailTopicRequest } from '../../../store/actions/forum-action/getTopicAction'
import { bindActionCreators } from 'redux'
import CKEditor from 'ckeditor4-react';
import { AddTopicReplyRequest } from '../../../store/actions/forum-action/addTopicReplyAction'
import { getTopicChillActionRequest } from '../../../store/actions/forum-action/getTopicChillAction'
class ForumTopicDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            checkReplay: false,
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
            lastPage: 1,
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let { match } = this.props
        let { cid } = match.params
        this.props.getDetailTopicRequest(cid)
        this.props.getTopicChillActionRequest(cid)
    }
    Postreply = (Arrlenght) => {
        let token = localStorage.getItem('token')
        if (token) {
            this.setState({
                checkReplay: true,
                lastPage: Arrlenght
            })
        } else {
            alert("Vui lòng đăng nhập tài khoản")
        }
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleonSubmit = (event) => {
        event.preventDefault()
        let { match } = this.props
        let { fid } = match.params
        let { content, lastPage } = this.state
        let { _id } = this.props.topic
        let username = localStorage.getItem('name')
        let id_username = localStorage.getItem('id')
        let moment = require('moment')
        let created = moment(localStorage.getItem('create')).format('ll');
        let chill = {
            username: username,
            id_username,
            join: created,
            content: content,
            id_topic: _id,
            id_category: fid,
        }
        this.setState({
            checkReplay: false,
            content: ''
        })
        console.log(this.state.currentPage)
        this.props.AddTopicReplyRequest(chill)
    }
    render() {
        let userLevel = localStorage.getItem('level')
        ///// phan trang
        var moment = require('moment');
        let maintopic = this.props.topic
        const newsList = this.props.listchill
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
        const displaychill = currentTodos.map((chill, index) => {
            return <div className="container content-bg mb-4" key={index}>
                <div className="row mb-3">
                    <div className="col-sm-8">
                        <span className="d-block font-weight-bold">Re: {maintopic.title}</span>
                        <span>by {chill.username} <i className="fas fa-arrow-right color-arr"></i>  {moment(`${chill.created}`).format('ll')}</span>
                    </div>
                    <div className="col-sm-4 ">
                        <p className="float-right">Joined : {chill.join}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p className="border-content" dangerouslySetInnerHTML={{ __html: chill.content }}></p>
                    </div>
                </div>
            </div>
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        let Arrlenght = pageNumbers.length
        return (
            <div>
                <div className="topic-detail pt-5">
                    <div className="container mb-4">
                        <span className="d-block top-header"> <i className="far fa-clone font-star mr-1"></i> {maintopic.title} thread</span>
                    </div>
                    <div className="content">
                        {this.state.currentPage === 1 && <div className="container content-bg mb-4">
                            <div className="row mb-3">
                                <div className="col-sm-8">
                                    <span className="d-block font-weight-bold"><i className="fas fa-fire color-fire mr-2"></i> {maintopic.title}</span>
                                    <span><i className="fas fa-file color-file mr-2"></i> by {maintopic.username}   <i className="fas fa-arrow-right color-arr"></i>  {moment(`${maintopic.created}`).format('ll')}</span>
                                </div>
                                <div className="col-sm-4 ">
                                    <p className="float-right">Joined : {maintopic.join}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <p className="border-content" dangerouslySetInnerHTML={{ __html: maintopic.content }}>
                                    </p>
                                </div>
                            </div>
                        </div>}
                        {displaychill}

                        {!this.state.checkReplay&& userLevel>0 &&
                            <div className="container">
                                <button className="btn btn-color text-white mt-2" onClick={() => this.Postreply(pageNumbers.length)}><i className="fas fa-plus-circle"></i> Post a reply</button>
                            </div>}
                        {this.state.checkReplay && 
                            <form onSubmit={this.handleonSubmit} >
                                <div className="container content-bg mb-1 mt-3">
                                    <div className="upload-margin">
                                        <span className="title d-block mb-3 font-weight-bold">Reply</span>
                                        <CKEditor
                                            onChange={(event) => {
                                                this.setState({
                                                    content: event.editor.getData()
                                                })
                                            }}
                                            data={this.state.content}
                                        />
                                    </div>
                                    <div className="text-right btn-sb mt-3">
                                        <button type="button" className="btn  btn-color mb-2 button-submit " onClick={() => {
                                            this.setState({
                                                checkReplay: false
                                            })
                                        }}>Canel</button>
                                        <button type="submit" className="btn  btn-color mb-2 button-submit ml-3 "
                                            disabled={!this.state.content}
                                        >Post</button>
                                    </div>
                                </div>
                            </form>
                        }
                    </div>
                    <div className="container">
                        <div className="pagination-custom">
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
                        {/* <div className="news-per-page">
                            <select defaultValue="0" onChange={this.select} >
                                <option value="0" disabled>Get by</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                            </select>
                        </div> */}
                    </div>

                </div>

            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        topic: store.getDetailTopicReducers,
        listchill: store.getListChillReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDetailTopicRequest,
        AddTopicReplyRequest,
        getTopicChillActionRequest
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForumTopicDetail))