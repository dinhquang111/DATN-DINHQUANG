import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './product-purchase-component.css'
import MenuComponent from '../../menu-header/menu-component'
import TotalProductPurchaseComponent from './total-product-purchase/total-product-purchase'
import FooterComponent from '../../footer/footer-component'
class ProductPurchaseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        if (!localStorage.getItem("token")) {
            this.props.history.push('/')
        }
    }
    render() {
        let count = 0
        let { cart } = this.props
        let totalItem = 0
        console.log(cart)
        let displayItem = cart.map((item, index) => {
            totalItem += item.quantity
            return <div key={index} className="row">
                <div className="col-sm-6"> <p>{item.quantity} x {item.product.name} </p></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-4 ml-auto"> {parseInt(item.quantity) * parseInt(item.product.price)} đ</div>

            </div>
        })
        // let display = count + "đ"
        return (

            <div>
                <MenuComponent />
                <div className="purchase mb-5">
                    <div className="purchase-hd">
                        <div className="purchase-bg"></div>
                        <div className="purchase-title">
                            <div className="purchase-content">
                                <h2 className="header"></h2>
                            </div>
                        </div>
                    </div>
                    <div className=" blog-main container mt-5 mgb">
                        <div className="row">
                            <div className="col-sm-8 m-auto" >
                                <div>
                                    <div className="purchase-cart">
                                        <div className="mgt">
                                            <div className="total-cart d-table shadow p-3 rounded">
                                                <div className="d-table-cell align-middle">
                                                    <div className="upload-margin text-center font-s">
                                                        <span className="title pb-2 ">Information</span>
                                                    </div>
                                                    <div className="row">
                                                        <div className='col-sm-10 m-auto pb-4'>
                                                            <div className="upload-margin">
                                                                <span className="title pb-2">Order name</span>
                                                                <input className="form-control form-control-lg"
                                                                    name="name" type="text"
                                                                    value={this.state.name}
                                                                    onChange={(event) => {
                                                                        this.setState({
                                                                            name: event.target.value
                                                                        })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="upload-margin">
                                                                <span className="title pb-2">Address</span>
                                                                <input className="form-control form-control-lg"
                                                                    name="address" type="text"
                                                                    value={this.state.address}
                                                                    onChange={(event) => {
                                                                        this.setState({
                                                                            address: event.target.value
                                                                        })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="upload-margin">
                                                                <span className="title pb-2">Number Phone</span>
                                                                <input className="form-control form-control-lg"
                                                                    name="numberphone" type="number"
                                                                    value={this.state.numberphone}
                                                                    onChange={(event) => {
                                                                        this.setState({
                                                                            numberphone: event.target.value
                                                                        })
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div>
                                    <div className="purchase-cart">
                                        <div className="mgt">
                                            <div className="total-cart d-table shadow p-3 rounded">
                                                <div className="d-table-cell align-middle">
                                                    <div className="border-bottom"><h4 className="d-inline-block count-h font-weight-bold ">Total products :  {totalItem}</h4></div>
                                                    <h4 className="d-inline-block count-h mt-3">{displayItem}</h4>
                                                    <div className="border-top"  ><h4 className="d-inline count-h mt-3 ">Total: </h4> <TotalProductPurchaseComponent product={this.props.cart} /><span className="float-right mt-3"></span></div> </div>
                                            </div>
                                            {/* <div className="btn-order mt-3 ">
                                                <button type="button" className="btn w-100" onClick={() => this.CheckOrder()}><span>Order</span></button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPurchaseComponent))