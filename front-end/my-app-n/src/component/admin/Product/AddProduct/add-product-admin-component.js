import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { addProductRequestAction } from '../../../../store/actions/admin-action/product-admin/addProductAction'
import { bindActionCreators } from 'redux'
import { GetListBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/getListBrandAction'
import { getListOriginAction } from '../../../../store/actions/admin-action/orgin-admin/getListOriginAction'
import { getListPetAction } from '../../../../store/actions/admin-action/pet-admin/getLisPetAction'
import { getListCategoryAction } from '../../../../store/actions/admin-action/category-admin/getListCategoryAction'

import CKEditor from 'ckeditor4-react';

import './add-product-admin-component.css'
class AddProductAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productImage: null,
            name: '',
            content: '',
            weight: '',
            price: '',
            id_brands: '',
            id_origins: '',
            id_pets: '',
            id_category: '',
            isCheck: false,
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        this.props.GetListBrandRequestAction();
        this.props.getListOriginAction();
        this.props.getListPetAction();
        this.props.getListCategoryAction();
    }

    handleonSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('id_brands', this.state.id_brands)
        data.append('id_origins', this.state.id_origins)
        data.append('id_pets', this.state.id_pets)
        data.append('id_category', this.state.id_category)
        data.append('name', this.state.name)
        data.append('productImage', this.state.productImage)
        data.append('content', this.state.content)
        data.append('weight', this.state.weight)
        data.append('price', this.state.price.toString())

        this.props.addProductRequestAction(data)
        this.setState({
            isCheck: true,
            productImage: null,
            name: '',
            content: '',
            weight: '',
            price: '',
            id_brands: '',
            id_origins: '',
            id_pets: '',
            id_category: ''
        })
        setTimeout(
            function () {
                this.props.history.goBack()
            }
                .bind(this),
            200
        );
    }

    render() {
        let { productImage, name, content, weight, price, id_brands, id_origins, id_pets, id_category } = this.state
        var listBrand = this.props.listBrands.map((brands, index) => {
            return <option key={index} value={brands._id}>{brands.name}</option>
        })
        var listOrigin = this.props.listOrigins.map((origins, index) => {
            return <option key={index} value={origins._id}>{origins.name}</option>
        })
        var listPet = this.props.listPets.map((pets, index) => {
            return <option key={index} value={pets._id}>{pets.name}</option>
        })
        var listCategory = this.props.listCategory.map((Category, index) => {
            return <option key={index} value={Category._id}>{Category.name}</option>
        })
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>Product</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-8 m-auto">
                                <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                    <div className="upload-margin">
                                        <span className="title pb-2">Name</span>
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
                                        <span className="title pb-2">Size (m²)</span><input className="form-control form-control-lg"
                                            name="weight" type="text"
                                            onChange={(event) => {
                                                this.setState({
                                                    weight: event.target.value
                                                })
                                            }}
                                            value={this.state.weight}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">price</span><input className="form-control form-control-lg"
                                            name="price" type="number"
                                            onChange={(event) => {
                                                this.setState({
                                                    price: event.target.value
                                                })
                                            }}
                                            value={this.state.price}
                                        />
                                    </div>
                                    <div>
                                        {/* Choose Pets */}
                                        <div className="input-group my-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Location</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01"
                                                name="id_pets" value={this.state.id_pets}
                                                onChange={(event) => {
                                                    this.setState({
                                                        id_pets: event.target.value
                                                    })
                                                }}
                                            >
                                                <option defaultValue>Choose...</option>
                                                {listPet}
                                            </select>
                                        </div>
                                        {/* End - Choose Pets */}
                                        {/* Choose Category */}
                                        <div className="input-group my-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01"
                                                name="id_category" value={this.state.id_category} defaultValue={'DEFAULT'}
                                                onChange={(event) => {
                                                    this.setState({
                                                        id_category: event.target.value
                                                    })
                                                }}
                                            >
                                                <option defaultValue>Choose...</option>
                                                {listCategory}
                                            </select>
                                        </div>
                                        {/* End - Choose Category*/}
                                        {/* Choose Brands*/}
                                        <div className="input-group my-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Area</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01"
                                                name="id_brands" value={this.state.id_brands}
                                                onChange={(event) => {
                                                    this.setState({
                                                        id_brands: event.target.value
                                                    })
                                                }}
                                            >
                                                <option defaultValue>Choose...</option>
                                                {listBrand}
                                            </select>
                                        </div>
                                        {/* End - Choose Brands*/}
                                        {/* Choose Origins*/}
                                        <div className="input-group my-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Project</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01"
                                                name="id_origins"
                                                value={this.state.id_origins}
                                                onChange={(event) => {
                                                    this.setState({
                                                        id_origins: event.target.value
                                                    })
                                                }}
                                            >
                                                <option defaultValue>Choose...</option>
                                                {listOrigin}
                                            </select>
                                        </div>
                                        {/* End - Choose Origins*/}
                                        {/*Upload*/}
                                        <div className="input-group upload-cusntom-upload my-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" >Upload</span>
                                            </div>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input"
                                                    name="productImage"
                                                    onChange={(event) => {
                                                        this.setState({
                                                            productImage: event.target.files[0]
                                                        })
                                                    }}

                                                />
                                                <p className="custom-file-label upload-file">{this.state.productImage ? this.state.productImage.name : "Choose file"}</p>
                                            </div>
                                        </div>
                                        {/*End-Upload*/}
                                    </div>

                                    {/*Content*/}
                                    <div className="upload-margin">
                                        <span className="title d-block mb-3">content</span>
                                        <CKEditor
                                            onChange={(event) => {
                                                this.setState({
                                                    content: event.editor.getData()
                                                })
                                            }}
                                            data={this.state.content}
                                        />
                                    </div>
                                    {/*End - Content*/}

                                    <div className="text-center btn-sb mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit" onClick={
                                            () => {
                                                this.props.history.goBack()
                                            }
                                        }>Back</button>
                                        <button type="submit" className="btn btn-primary btn-color mb-5 button-submit ml-3"
                                            disabled={!productImage || !name || !content || !weight || !price || !id_brands || !id_origins || !id_pets || !id_category}
                                        >Submit</button>

                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        listBrands: store.getListBrandReducers,
        listOrigins: store.listOriginReducer,
        listPets: store.listPetReducer,
        listCategory: store.ListcategoryReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addProductRequestAction,
        GetListBrandRequestAction,
        getListOriginAction,
        getListPetAction,
        getListCategoryAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProductAdminComponent));