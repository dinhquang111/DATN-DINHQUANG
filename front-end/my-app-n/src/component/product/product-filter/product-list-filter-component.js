import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './product-list-filter-component.css'
import { bindActionCreators } from 'redux'
import { getListProductRequestAction } from '../../../store/actions/admin-action/product-admin/getListProductAction'
import { SeacrchProductRequestAction } from '../../../store/actions/product-action/search-product-action'
class ProductListFilterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 9, /// tin tuc moi trang
        }
    }
    // c() {
    //     this.props.getListProductRequestAction()

    // }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    componentWillMount(){
        let {filterNameProduct,filterPet,filterBranch,filterCategory}=this.props.filterProduct
        if(!filterNameProduct&&!filterPet&&!filterBranch&&!filterCategory){
            this.props.history.push('/product')
        }
       
    }
    render() {
        var nf = new Intl.NumberFormat();
        let { listProductsFound } = this.props
        let { filterProduct, listProducts } = this.props
        if (filterProduct.filterNameProduct) {
            listProducts = listProducts.filter((product) => {
                return product.name.toLowerCase().indexOf(filterProduct.filterNameProduct.toLowerCase()) !== -1
            })
        }
        if (filterProduct.filterPet) {
            listProducts = listProducts.filter((product) => {
                if (filterProduct.filterPet === '-1' || filterProduct.filterPet === -1) {
                    return product
                } else {
                    
                    return product.id_pets.toLowerCase().indexOf(filterProduct.filterPet.toLowerCase()) !== -1
                }

            })
        }
        if (filterProduct.filterBranch) {
            
            listProducts = listProducts.filter((product) => {
                if (filterProduct.filterBranch === '-1' || filterProduct.filterBranch === -1) {
                    return product
                } else {
                     console.log(parseInt(product));
                    return product.id_brands.toLowerCase().indexOf(filterProduct.filterBranch.toLowerCase()) !== -1
                }

            })
        }
        if (filterProduct.filterCategory) {
            listProducts = listProducts.filter((product) => {
                console.log(product);
                if (filterProduct.filterCategory === '-1' || filterProduct.filterCategory === -1) {
                    return product
                } else {
                    return product.id_category.toLowerCase().indexOf(filterProduct.filterCategory.toLowerCase()) !== -1
                }
            })
        }
        const newsList = listProducts
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        let DListProductsFound2 = currentTodos.map((product, index) => {
            let imagesrc = "http://localhost:3000/" + product.image
            return <div  key={index}>
                {/* <div className="card" style={{ width: '15rem' }}>
                    <Link className="img" to={`/product/detail/${product._id}`} >
                        <div className="include-img">
                            <img src={imagesrc} alt="..." className="img-thumbnail card-img-top" />
                            <div className='d-inline'>
                                <p className="price">
                                    Giá : <b className="price-cost">{nf.format(product.price)}</b><b className="price-d">đ</b>
                                </p>
                            </div>

                        </div>

                    </Link>
                    <div className="card-body mt-3 mb-5">
                        <Link to={`/product/detail/${product._id}`} className="information-img" >
                            {product.name}
                        </Link>
                    </div>
                </div> */}
                 <Link className="img" to={`/product/detail/${product._id}`} >   
                        <div className="row m-0 item-row">
                                <div className="include-img col-5">
                                    <img src={imagesrc} alt="" />
                                </div>
                                <div className="col-7">
                                    <p className="price">
                                        Giá : <b className="price-cost">{ nf.format(product.price)}</b><b className="price-d">đ</b>
                                    </p>
                                    <Link to={`/product/detail/${product._id}`} className="information-img" >
                                        {product.name}
                                    </Link>
                                    <p className="information-img mt-5">
                                       Diện tích: {product.weight } m²
                                    </p>
                                </div>
                        </div>
                </Link>
            </div>
        })
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <div className="box-information">
                    <div className="row">
                        {DListProductsFound2 ? DListProductsFound2 : 'No data'}
                    </div>
                    <div className="row">
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
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        listProductsFound: store.SearchProductReducer,
        filterProduct: store.filterProductReducers,
        listProducts: store.listProductReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        SeacrchProductRequestAction,
        getListProductRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListFilterComponent))