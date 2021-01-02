import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './list-category-admin-component.css'
import { getOneCategoryAction } from '../../../../store/actions/admin-action/category-admin/getOneCategoryAction'
import { getListCategoryAction } from '../../../../store/actions/admin-action/category-admin/getListCategoryAction'
import { DeleteCategoryAction } from '../../../../store/actions/admin-action/category-admin/deleteCategorytion'
class ListCategoryAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        this.props.getListCategoryAction()
    }
    DeleteCategory(id) {
        this.props.DeleteCategoryAction(id)
    }
    GetOneCategory(id) {
        this.props.getOneCategoryAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        let { listCategory } = this.props
        const newsList = listCategory
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        var i = 1;
        let display = currentTodos.map((Category, index) => {
            return <tr key={index} >
                <td className="align-middle text-center"><p>{i++}</p></td>
                <td className="admin-brand-name align-middle"><p>{Category.name}</p></td>
                <td className="text-center align-middle">
                    <Link to={`/admin/categorys/edit/${Category._id}`} onClick={() => this.GetOneCategory(Category._id)}><i className="fas fa-edit bg-warning p-2 text-white rounded " data-toggle="tooltip" title="Edit" data-placement="top"></i></Link>
                </td>
                <td className="text-center align-middle">
                    <i className="fas fa-trash-alt bg-danger p-2 text-white rounded"
                        data-toggle="tooltip"
                        title="Delete"
                        data-placement="top"
                        onClick={() => this.DeleteCategory(Category._id)}
                    ></i>
                </td>
            </tr>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="upload-component-catelogy">
                <Link to={"/admin/categorys/add"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Price range
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
        listCategory: store.ListcategoryReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListCategoryAction,
        DeleteCategoryAction,
        getOneCategoryAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListCategoryAdminComponent))