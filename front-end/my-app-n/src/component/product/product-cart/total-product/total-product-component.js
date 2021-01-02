import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './total-product-component.css'
class TotalProductComponent extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        var nf = new Intl.NumberFormat();
  
        let count = 0
        this.props.product.map((item, index) => {
            count += parseInt(item.product.price) * parseInt(item.quantity)
        })
        let display =  nf.format(count) + "đ"
        return (
           
                <div className="total d-inline ">
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TotalProductComponent))