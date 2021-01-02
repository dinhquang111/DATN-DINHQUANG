import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './product-list-find-component.css'
import { bindActionCreators } from 'redux'
import { SeacrchProductRequestAction } from '../../../store/actions/product-action/search-product-action'
class ProductListFindComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, /// trang hien tai
            newsPerPage: 9, /// tin tuc moi trang
        }
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.SeacrchProductRequestAction(id)
    }
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        var nf = new Intl.NumberFormat();
        let { listProductsFound } = this.props
        const newsList = listProductsFound
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang
        let DListProductsFound2 = currentTodos.map((product, index) => {
            let imagesrc = "http://localhost:3000/" + product.image
            return <div  key={index} className="w-100">
                {/* <div className="card" style={{ width: '15rem' }}>
                    <Link className="img" to={`/product/detail/${product._id}`} >
                        <div className="include-img">
                            <img src={imagesrc} alt="..." className="img-thumbnail card-img-top" />
                            <div className='d-inline'>
                                <p className="price">
                                    Giáaaaas : <b className="price-cost">{nf.format(product.price)}</b><b className="price-d">đ</b>
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
                        {DListProductsFound2}
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
        listProductsFound: store.SearchProductReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        SeacrchProductRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListFindComponent))