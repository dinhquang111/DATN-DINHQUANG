import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Slider from "react-slick";
import './product-list-slider.css'
// import { detailProduct } from '../../../store/actions/admin-action/product-admin/detailProductAction'
import { getListProductRequestAction } from '../../../store/actions/admin-action/product-admin/getListProductAction'
import { bindActionCreators } from 'redux';
class ProductListSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    componentDidMount() {
        this.props.getListProductRequestAction()
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        let { filterProduct, listProducts } = this.props
        // if (filterProduct.filterNameProduct) {
        //     listProducts = listProducts.filter((product) => {
        //         return product.name.toLowerCase().indexOf(filterProduct.filterNameProduct.toLowerCase()) !== -1
        //     })
        // }
        // if (filterProduct.filterPet) {
        //     listProducts = listProducts.filter((product) => {
        //         if (filterProduct.filterPet === '-1' || filterProduct.filterPet === -1) {
        //             return listProducts
        //         } else {
        //             return product.id_pets.toLowerCase().indexOf(filterProduct.filterNameProduct.toLowerCase()) !== -1
        //         }

        //     })
        // }
        var nf = new Intl.NumberFormat();
       
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        let i = 1
        let listTure = []
        listProducts.map((product, index) => {
            if (this.props.nameCategory._id === product.id_category) {

                listTure.push(product)
            }
        })
        let listProductWithCategorySilder = listTure.map((product, index) => {
            let imagesrc = "http://localhost:3000/" + product.image
            return <div key={index}>
                {/* <div className="detail">
                    <Link className="img" to={`/product/detail/${product._id}`} >
                        <span className="include-img">
                            <img src={imagesrc} alt="" />
                        </span>
                        <p className="price">
                            Giá : <b className="price-cost">{ nf.format(product.price)}</b><b className="price-d">đ</b>
                        </p>
                    </Link>
                    <Link to={`/product/detail/${product._id}`} className="information-img" >
                        {product.name}
                    </Link>
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
        return (
            <div>
                <div className="product-list-d">
                    {listTure.length !== 0 && <div className="d-list">
                        <div className="product-slider ">
                            <div className="mb-4">
                                <h2>{this.props.nameCategory.name}</h2>
                                <div className="button-slider mt-1">
                                    <button className="button mr-2" onClick={this.previous}>
                                        <i className="fas fa-chevron-left color-i"></i>
                                    </button>
                                    <button className="button " onClick={this.next}>
                                        <i className="fas fa-chevron-right color-i"></i>
                                    </button>
                                </div>
                            </div>
                            {listProductWithCategorySilder}
                            {/* <Slider ref={c => (this.slider = c)} {...settings}>
                                {listProductWithCategorySilder}
                            </Slider> */}
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        listProducts: store.listProductReducer,
        filterProduct: store.filterProductReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListProductRequestAction,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListSlider))