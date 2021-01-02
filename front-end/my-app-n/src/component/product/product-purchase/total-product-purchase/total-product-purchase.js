import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './total-product-purchase.css'
class TotalProductPurchaseComponent extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let count = 0
        this.props.product.map((item, index) => {
            count += parseInt(item.product.price) * parseInt(item.quantity)
        })
        let display = count + "đ"
        return (
           
                <div className="total d-inline float-right">
                    {display}
                </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TotalProductPurchaseComponent))