import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import h1 from '../../../../image/Product/h1.jpg'
import { UpdateProducAction } from '../../../../store/actions/productcartAction'
import { DeleteProductCartAction } from '../../../../store/actions/productcartAction'
import { bindActionCreators } from 'redux'
import './card-product-component.css'
class CardProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.product.quantity
        }
    }
    onUpdataQuanlity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                count: quantity
            })
            this.props.UpdateProducAction(product, quantity)
        }
        this.props.history.push("/cart");
    }
    onDeleteProduct= (product) =>{
        this.props.DeleteProductCartAction(product)
    }
    render() {
        let { product } = this.props
        console.log(product.product.image)
        var nf = new Intl.NumberFormat();
        nf.format(product.price)
        return (
            <div>
                <div className="row my-4 border p-3 boxShadow">
                    <div className="col-sm-3">
                        <img src={`http://localhost:3000/${product.product.image}`} className="img-thumbnail" />
                    </div>
                    <div className="col-sm-5 information">
                        <p className="name mt-2">{product.product.name.toUpperCase()}</p>
                        <button type="button" className="btn btn-delete-cs mt-2"
                        onClick={()=>this.onDeleteProduct(product.product)}
                        >Delete</button>
                    </div>
                    <div className="col-sm-4 d-table with-table">
                        <div className="d-table-cell align-middle text-right">
                            <div className="position-relative d-inline price">{ nf.format(product.product.price)}<span className="position-absolute unit">đ</span></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        UpdateProducAction,
        DeleteProductCartAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardProductComponent))