import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './product-list-menu.css'
import { getListCategoryAction } from '../../../store/actions/admin-action/category-admin/getListCategoryAction'
import { bindActionCreators } from 'C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/4.0/node_modules/redux'
import { SeacrchProductRequestAction } from '../../../store/actions/product-action/search-product-action'

class ProductListMenu extends Component {

    SeacrchProductRequest = (id) =>{
        this.props.SeacrchProductRequestAction(id)
    }
    componentDidMount(){
        let {match} = this.props
        let {id} = match.params
        console.log(id)
    }

    render() {
        let listCategory = this.props.listCategory.map((category, index) => {
            return <li key={index}>
                <Link to={`/product/search/${category._id}`} onClick= {()=>this.SeacrchProductRequest(category._id)}>
                    <label className="container" >
                        <input type="radio" name="radio"/>
                        <span className="title">{category.name}</span>
                        <span className="checkmark" />
                    </label>
                </Link>
            </li>
        })
        return (
            <div>
                <div className="product-menu-bg">
                    <div className="product-menu">
                        <Link to='/product' >Catelogy</Link>
                        <div className="list-menu mt-2">
                            <ul>
                                {listCategory}
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
        listCategory: store.ListcategoryReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListCategoryAction,
        SeacrchProductRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListMenu))