import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetListBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/getListBrandAction'
import { getListPetAction } from '../../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { bindActionCreators } from 'redux'
import {getListOriginAction} from '../../../../store/actions/admin-action/orgin-admin/getListOriginAction'
import {getDetaiProductRequestAction,editBlogWithFileRequestAction} from '../../../../store/actions/admin-action/product-admin/detailProductAction'

import './detail-product-admin-component.css'

class DetailProductAdminComponent extends Component {
    componentDidMount() {
        this.props.GetListBrandRequestAction()
        this.props.getListPetAction()
        this.props.getListOriginAction()
        let {match} = this.props
        let {id} = match.params
        this.props.getDetaiProductRequestAction(id)
    }
    render() {
        let pet = this.props.listPets.map((pet, index) => {
            if (this.props.detailProduct.id_pets === pet._id) {
                return pet.name
            }

        })
        let brand = this.props.listBrands.map((brand, index) => {
            if (this.props.detailProduct.id_brands === brand._id) {
                return brand.name
            }
        })
        let origin = this.props.listOrigins.map((origin,index)=>{
            if(this.props.detailProduct.id_origins === origin._id){
                return origin.name
            }
        })
        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 detail-admin">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-9 ml-4 d-table">
                                    <div className="image-product text-center ">
                                        <div className="image-product-border d-table-cell align-middle">
                                            <img src={`http://localhost:3000/${this.props.detailProduct.image}`} atl="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-6 detail-admin mt-2">
                            <div className="information-product">
                                <h2>{this.props.detailProduct.name}</h2>
                                <div className="overall mt-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="overall-list">Price:</td>
                                                <td className="position-relative">
                                                    {this.props.detailProduct.price}
                                                    <span className="position-absolute unit">đ</span></td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Brand:</td>
                                                <td>{brand}</td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Origin:</td>
                                                <td>{origin}</td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Pet:</td>
                                                <td>{pet}</td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Weight:</td>
                                                <td>{this.props.detailProduct.weight}</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="detail-information-product">
                            <p className="intro">product details</p>
                            <p dangerouslySetInnerHTML={{ __html: this.props.detailProduct.content }}></p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (store) => {
    return {
        detailProduct: store.detailProductReducer,
        listBrands: store.getListBrandReducers,
        listPets: store.listPetReducer,
        listOrigins: store.listOriginReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        GetListBrandRequestAction,
        getListPetAction,
        getListOriginAction,
        getDetaiProductRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailProductAdminComponent))