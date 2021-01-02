import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import MenuComponent from '../../menu-header/menu-component'
import TotalProductComponent from './total-product/total-product-component'
import CardProductComponent from './card-product/card-product-component'
import './product-cart.css'
import FooterComponent from "../../footer/footer-component";
class Productcart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            cart: this.props.cart
        }
    }
    CheckOrder = ()=>{
        if( localStorage.getItem("token")){
            this.props.history.push('/purchase')
        }else{
            alert("Vui lòng đăng nhập tài khoản")
        }
    }
    render() {
        let total = 0;
        let displayCard = this.props.cart.map((product, index) => {
            return <CardProductComponent product={product} key={index} />
        })
        console.log(this.state.cart)
        return (
            <div>
                <MenuComponent />
                <div className="product">
                    <div className="product-hd">
                        <div className="product-bg"></div>
                        <div className="product-title">
                            <div className="product-content">
                                <h2 className="header">Analysis History</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product-header mt-4">
                        <div className="container">
                            <div className="introduct"><h4>Recent Analysis History</h4></div>
                        </div>
                    </div>
                    {this.state.cart.length ? <div className="product-cart">
                        <div className="container">
                            <div className="row">
                                    {displayCard}
                            </div>
                        </div>
                    </div> : <div className="container incl mb-5 border shadow-sm rounded mt-4">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="no-item-cart text-center">
                                        <span className="mascot-image"></span>
                                        <p className="message">You have no items in your shopping cart</p>
                                        <Link to="/product" className="btn btn-next mb-4">Product</Link>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                <FooterComponent></FooterComponent>
            </div >
        )
    }
}
const mapStateToProps = (store) => {
    return {
        cart: store.CartReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Productcart))