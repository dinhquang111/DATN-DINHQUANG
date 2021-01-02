import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './user-list-menu.css'
import { getListCategoryAction } from '../../../store/actions/admin-action/category-admin/getListCategoryAction'
import { bindActionCreators } from 'C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/4.0/node_modules/redux'
import { SeacrchProductRequestAction } from '../../../store/actions/product-action/search-product-action'

class UserListMenu extends Component {

    SeacrchProductRequest = (id) => {
        this.props.SeacrchProductRequestAction(id)
    }


    render() {
        let id = localStorage.getItem('id')
        let user = [
            {
                name: 'account information',
                _id: id
            },
            {
                name: 'edit information',
                _id: id
            }
        ]
        // let listCategory = user.map((category, index) => {
        //     return <li key={index}>
        //         <Link>
        //             <label className="container" >
        //                 <span className="title">{category.name}</span>
        //             </label>
        //         </Link>
        //     </li>
        // })
        return (
            <div>
                <div className="product-menu-bg">
                    <div className="product-menu">
                        {/* <div >Catelogy</div> */}
                        <div className="list-menu mt-2 pt-3 pb-1">
                            <ul>
                                <li >
                                    <Link to={'/profile'}>
                                        <label className="container" >
                                            <span className="title new">General</span>
                                        </label>
                                    </Link>
                                </li>
                                <li >
                                    <Link to={'/profile/edit'}>
                                        <label className="container" >
                                            <span className="title new ">Edit</span>
                                        </label>
                                    </Link>
                                </li>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserListMenu))