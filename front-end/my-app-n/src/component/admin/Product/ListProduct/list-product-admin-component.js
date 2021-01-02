import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getListProductRequestAction } from '../../../../store/actions/admin-action/product-admin/getListProductAction'
import { GetListBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/getListBrandAction'
import { getListPetAction } from '../../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { DeleteProductRequestAction } from '../../../../store/actions/admin-action/product-admin/deleteProductAction'
import { getDetaiProductRequestAction } from '../../../../store/actions/admin-action/product-admin/detailProductAction'
import './list-product-admin-component.css'
class ListProductAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 5, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        this.props.getListProductRequestAction()
        this.props.GetListBrandRequestAction()
        this.props.getListPetAction()
    }
    DeleteProduct(id) {
        this.props.DeleteProductRequestAction(id)
    }
    DetailProduct(id) {
        this.props.getDetaiProductRequestAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        var nf = new Intl.NumberFormat();
    
        let { listProducts } = this.props
        const newsList = listProducts
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang

        var i = 1;
        let display = currentTodos.map((products, index) => {
            const indexs = "http://localhost:3000/" + products.image
            return <tr key={index} >
                <td className="align-middle text-center"><p>{i++}</p></td>
                <td className="admin-brand-name align-middle"><Link 
                to={`/admin/products/detailproduct/${products._id}`}
                className="text-decoration-none"
                >{products.name && products.name.toUpperCase()}</Link></td>
                <td className="admin-brand-name align-middle "><p>{products.weight}</p></td>
                <td className="admin-brand-name align-middle text-center"><p>{    nf.format(products.price)} đ</p></td>
                <td className="admin-brand-name align-middle text-center">
                    {this.props.listBrands.map((brands, index) => {
                        if (brands._id === products.id_brands) {
                            return <p key={index}>{brands.name}</p>
                        }
                    })}
                </td>
                <td className="admin-brand-name align-middle text-center">
                    {this.props.listPet.map((pets, index) => {
                        if (pets._id === products.id_pets) {
                            return <p key={index}>{pets.name}</p>
                        }
                    })}
                </td>
                <td><img className="image-brand" src={indexs} /></td>
                <td className="text-center align-middle">
                    <Link to={`/admin/products/detailproduct/${products._id}`} className="btn view" onClick={() => this.DetailProduct(products._id)}>Detail</Link></td>
                <td className="text-center align-middle"><Link to={`/admin/products/edit/${products._id}`}>
                    <i className="fas fa-edit bg-warning p-2 text-white rounded " data-toggle="tooltip" title="Edit" data-placement="top"></i>
                </Link>
                </td>
                <td className="text-center align-middle"><i className="fas fa-trash-alt bg-danger p-2 text-white rounded" data-toggle="tooltip" title="Delete" data-placement="top" onClick={() => this.DeleteProduct(products._id)}></i></td>
                {/* <td>{index}</td> */}
            </tr>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="upload-component">
                <Link to={"/admin/products/addproduct"} className="btn view mb-4" >
                    <i className="fas fa-plus-square mr-2"></i>Add Product
                </Link>
                <table className="table table-bordered  table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Content</th> */}
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                            <th scope="col">Brands</th>
                            <th scope="col">Pets</th>
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
        listProducts: store.listProductReducer,
        listBrands: store.getListBrandReducers,
        listPet: store.listPetReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListProductRequestAction,
        GetListBrandRequestAction,
        getListPetAction,
        DeleteProductRequestAction,
        getDetaiProductRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListProductAdminComponent))