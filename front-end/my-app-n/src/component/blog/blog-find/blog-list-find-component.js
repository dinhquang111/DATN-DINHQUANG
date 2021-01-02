import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './blog-list-find-component.css'
import { bindActionCreators } from 'redux'
// import { DetailBlogAction } from '../../../store/actions/blog-action/detailBlogAction'
import { getBlogByCategoryRequestAction } from '../../../store/actions/blog-action/getBlogByCategoryAction'
class BlogListFindComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 6, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        let { match, getBlogByCategoryRequestAction } = this.props
        let { id } = match.params
        getBlogByCategoryRequestAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let moment = require('moment')
        let { listBlogsFound } = this.props
        const newsList = listBlogsFound
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        let DisplaylistBlogsFound = currentTodos.map((blog, index) => {
            let imagesrc = "http://localhost:3000/" + blog.image
            return <div className="d-inline mgl" key={index}>
                <div className="card" style={{ width: '24rem' }}>
                    <Link className="img" to={`/blog/detail/${blog._id}`} >
                        <div className="include-img">
                            <img src={imagesrc} alt="..." className="img-thumbnail card-img-top" />
                            <span className='d-inline'>
                                <p className="price">
                                    <span className="d-block">{moment(`${blog.created}`).format('dddd')}</span>
                                    <span>{moment(`${blog.created}`).format('ll')}</span>
                                </p>
                            </span  >
                        </div>
                    </Link>
                    <div className="card-body ">
                        <Link className="blog-card-title" to={`/blog/detail/${blog._id}`} ><h3>{blog.title}</h3></Link>
                        <p className="blog-card-introduce">
                            {blog.introduction}
                        </p>
                        <Link to={`/blog/detail/${blog._id}`} className="information-img blog-card-detail" >
                            Chi tiết
                        </Link>
                    </div>
                </div>
            </div>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <div className="box-information mb-5 m-auto">
                    <div className="row">
                        {DisplaylistBlogsFound}
                    </div>
                    <div className="row float-right mr-5 mb-5">
                        <div className="pagination-custom container mt-3 ">
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
           
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        listBlogsFound: store.Blogbycategoryreducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getBlogByCategoryRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogListFindComponent))