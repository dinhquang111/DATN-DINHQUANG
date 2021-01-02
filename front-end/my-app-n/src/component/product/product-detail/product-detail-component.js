import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
// import { getlistBrandAction } from '../../../store/actions/getlistBrandAction'
import { getListPetAction } from '../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { getListOriginAction } from '../../../store/actions/admin-action/orgin-admin/getListOriginAction'
import { AddProductIntoList } from '../../../store/actions/productcartAction'
import { GetListBrandRequestAction } from '../../../store/actions/admin-action/brand-admin/getListBrandAction'
import { getDetaiProductRequestAction } from '../../../store/actions/admin-action/product-admin/detailProductAction'
import './product-detail-component.css'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
class ProductDetailComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    componentWillMount() {
        this.props.GetListBrandRequestAction()
        this.props.getListPetAction()
        this.props.getListOriginAction()
    }
    componentDidMount() {
        const { match } = this.props
        const { id } = match.params
        this.props.getDetaiProductRequestAction(id)
    }
    AddProductIntoList(product) {
        this.props.AddProductIntoList(product, parseInt(this.state.count))
        this.setState({
            count: 1
        })
        this.notify()
    }
     notify = () => toast.success('⭐ You added into tick! ⭐', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    render() {
        var nf = new Intl.NumberFormat();

        let pet = this.props.listPets.map((pet, index) => {
            if (this.props.detailProduct.id_pets === pet._id) {
                return pet.name
            }

        })
        let brand = this.props.listBrand.map((brand, index) => {
            if (this.props.detailProduct.id_brands === brand._id) {
                return brand.name
            }

        })
        let origin = this.props.listOrigins.map((origin, index) => {
            if (this.props.detailProduct.id_origins === origin._id) {
                return origin.name
            }
        })


        return (
            <div>
                <div className="detail-height">
                    <div className="row">
                        <div className="col-sm-6 detail-admin mt-2">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-11 ml-4 d-table border">
                                <img src={`http://localhost:3000/${this.props.detailProduct.image}`} className="img-fluid" alt="Responsive image" />
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
                                                    {nf.format(this.props.detailProduct.price)}
                                                    <span className="position-absolute unit">đ</span></td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Total area:</td>
                                                <td>{brand}</td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Project:</td>
                                                <td>{origin}</td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Location:</td>
                                                <td>{pet}</td>
                                            </tr>
                                            <tr>
                                                <td className="overall-list">Year:</td>
                                                <td>{this.props.detailProduct.weight}</td>
                                            </tr>
                                        </tbody></table>
                                    <button type="button" className="btn ml-5 mt-3 btn-buy"  onClick={() => this.AddProductIntoList(this.props.detailProduct)}> <i className="fab fa-buffer mr-2" />Add to Tick</button>
                                    <div>
                                        <ToastContainer className="zIndex"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="detail-information-product">
                            <p className="intro">Product Details</p>
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
        listBrand: store.getListBrandReducers,
        listPets: store.listPetReducer,
        listOrigins: store.listOriginReducer,
        carts: store.CartReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        GetListBrandRequestAction,
        getListPetAction,
        getListOriginAction,
        AddProductIntoList,
        getDetaiProductRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent))