import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { DeleteBlogRequestAction } from '../../../../store/actions/blog-action/deleteBlogAction'
import { getAllblogsAction } from "../../../../store/actions/blog-action/getAllBlogAction";
import { getCategoryBlogAction } from '../../../../store/actions/blog-action/getCategoryBlogAction'
import { getDetailBlogRequestAction } from "../../../../store/actions/blog-action/getDetailBlogAction";
import './list-blog-admin-component.css'
class ListBlogAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 9, /// tin tuc moi trang
        }
    }
    componentWillMount() {
        this.props.getAllblogsAction()
        this.props.getCategoryBlogAction()
    }
    DeleteBlog(id) {
        this.props.DeleteBlogRequestAction(id)
    }
    DetailBlog(id) {
        this.props.getDetailBlogRequestAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let { listBlog } = this.props
        const newsList = listBlog
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        var i = 1;
        let display = currentTodos.map((Blog, index) => {
            const indexs = "http://localhost:3000/" + Blog.image
            return <tr key={index} >
                <td className="align-middle text-center"><p>{i++}</p></td>
                <td className="admin-brand-name align-middle www">
                    <Link className='text-decoration-none' to={`/admin/blogs/detail/${Blog._id}`}>{Blog.title}</Link>
                </td>
                {/* <td className="admin-brand-name align-middle" dangerouslySetInnerHTML={{ __html: Blog.content }}>
                </td> */}
                <td className="admin-brand-name align-middle"><p>{Blog.introduction}</p></td>
                <td className="admin-brand-name align-middle">
                    {this.props.listCategory.map((category, index) => {
                        if (category._id === Blog.id_categoryblog) {
                            return <p key={index}>{category.name}</p>
                        }
                    })}
                </td>
                <td className="text-center"><img className="image-brand" src={indexs} /></td>
                {/* <td className="text-center align-middle"><Link to={`/admin/blogs/detail/${Blog._id}`} className="btn view" onClick={() => this.DetailBlog(Blog._id)}>Detail</Link></td> */}
                <td className="text-center align-middle"><Link to={`/admin/blogs/edit/${Blog._id}`} onClick={() => this.DetailBlog(Blog._id)}>
                    <i className="fas fa-edit bg-warning p-2 text-white rounded " data-toggle="tooltip" title="Edit" data-placement="top"></i></Link>
                </td>
                <td className="text-center align-middle"><i className="fas fa-trash-alt bg-danger p-2 text-white rounded" data-toggle="tooltip" title="Delete" data-placement="top" onClick={() => this.DeleteBlog(Blog._id)}></i></td>
                {/* <td>{index}</td> */}
            </tr>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="upload-component">
                <Link to={"/admin/blogs/add"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Blog
                </Link>
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            {/* <th scope="col">Content</th> */}
                            <th scope="col">Introduction</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
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
        listBlog: store.AllBlogsReducers,
        listCategory: store.categoryblogreducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllblogsAction,
        getCategoryBlogAction,
        getDetailBlogRequestAction,
        DeleteBlogRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListBlogAdminComponent))