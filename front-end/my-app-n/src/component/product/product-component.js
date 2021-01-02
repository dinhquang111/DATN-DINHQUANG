import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import './product-component.css'
import ProductListMenu from '../product/product-list-menu/product-list-menu'
import MenuComponent from '../menu-header/menu-component'
import ProductListSlider from '../product/product-slider-component/product-list-slider'
import { bindActionCreators } from 'redux'
import FooterComponent from '../footer/footer-component'
import { GetListBrandRequestAction } from '../../store/actions/admin-action/brand-admin/getListBrandAction'
import { getListProductRequestAction } from '../../store/actions/admin-action/product-admin/getListProductAction'
import { getListPetAction } from '../../store/actions/admin-action/pet-admin/getLisPetAction'
import { getListCategoryAction } from '../../store/actions/admin-action/category-admin/getListCategoryAction'
import { FilterProduct } from '../../store/actions/product-action/search-product-action'
import routes from './product-router'
class ProductComponent extends Component {
    a;
    constructor(props) {
        super(props);
        this.state = {
            filterNameProduct: '',
            filterCategory: -1,
            filterBranch: -1,
            filterPet: -1
        }
    }
    componentWillMount() {
        this.props.getListProductRequestAction()
        setTimeout(() => {
            this.a()
        }, 1000);
    }
    componentDidMount() {
        this.props.getListPetAction()
        this.props.getListCategoryAction()
        this.props.GetListBrandRequestAction()
        this.props.getListProductRequestAction()
    }
    showContentRouter = (routes) => {
        let result = null
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.main}
                />
            })
        }
        return result
    }
    a=()=>{
        let { listCategory, listBrand } = this.props
        let listProductWithCategory = listCategory.map((category, index1) => {
            return <div key={index1}><ProductListSlider nameCategory={category} /></div>
        })
    }
    filterProduct = () => {
        
        let { FilterProduct } = this.props
        let { filterNameProduct, filterPet, filterCategory, filterBranch } = this.state
        let filter = {
            filterNameProduct, filterPet, filterCategory, filterBranch
        }
        console.log(filter)
        FilterProduct(filter)
        this.setState({
            filterNameProduct: '',
            filterPet: -1,
            filterCategory: -1,
            filterBranch: -1
        })
        this.props.history.push('/product/filter')
    }
    render() {
        let { listCategory, listBrand } = this.props
        let showlistBrand = listBrand.map((branch, index) => {
            return <option key={index} value={branch._id}>{branch.name} </option>
            // m²
        })
        let showlistPet = this.props.listPet.map((pets, index) => {
            return <option key={index} value={pets._id}>{pets.name}</option>
        })
        let showlistCategory = listCategory.map((category, index) => {
            return <option key={index} value={category._id}>{category.name}</option>
        })
        let listProductWithCategory = listCategory.map((category, index1) => {
            return <div key={index1}><ProductListSlider nameCategory={category} /></div>
        })
        return (
            <div>
                <MenuComponent />
                <div className="product">
                    <div className="product-hd">
                        <div className="product-bg"></div>
                        <div className="product-title">
                            <div className="product-content">
                                <h2 className="header">Properties</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product-search mb-5 ">
                        <div className="product-search-hd">
                            <div className="product-formSearch">
                                <div className="container">
                                    <h4 className="mb-4">
                                        Find property
                                    </h4>
                                    <div className="row">
                                        <div className="col-sm">
                                            <div className="forms">
                                                <div className="input-group mb-3 muti-input">
                                                    <input type="text" className="form-control"
                                                        name="filterNameProduct" type="text"
                                                        placeholder="Name property"
                                                        onChange={(event) => {
                                                            this.setState({
                                                                filterNameProduct: event.target.value
                                                            })
                                                        }}
                                                        value={this.state.filterNameProduct}
                                                    />
                                                    <select className="custom-select" id="inputGroupSelect01"
                                                        name="filterPet"
                                                        value={this.state.filterPet}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                filterPet: event.target.value
                                                            })
                                                        }}>
                                                        <option value={-1}>All property location</option>
                                                        {showlistPet}
                                                    </select>
                                                    <select className="custom-select" id="inputGroupSelect01"
                                                        name="filterCategory"
                                                        value={this.state.filterCategory}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                filterCategory: event.target.value
                                                            })
                                                        }}
                                                    >
                                                        <option value={-1}>Choose the price range</option>
                                                        {showlistCategory}
                                                    </select>
                                                    <select className="custom-select" id="inputGroupSelect01"
                                                        name="filterBranch"
                                                        value={this.state.filterBranch}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                filterBranch: event.target.value
                                                            })
                                                        }}
                                                    >
                                                        <option value={-1}>Total area</option>
                                                        {showlistBrand}
                                                    </select>
                                                </div>
                                                <div className="search">
                                                    <button className="btn btn-search" onClick={() => this.filterProduct()}>
                                                        <i className="fas fa-search"></i> Find</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container product-main mt-5">
                        <div className="row">
                            {/* <div className="col-sm-3 product-list-menu">
                                <ProductListMenu />
                            </div> */}
                            <div className="col-sm-11">
                                <Switch>
                                    <Route exact path={"/product"}>
                                        {listProductWithCategory}
                                    </Route>
                                    {this.showContentRouter(routes)}
                                </Switch>
                              
                            </div>
                        </div>
                    </div>
               
                </div>
            </div >
        )
    }
}
const mapStatetoProps = (store) => {
    return {
        listCategory: store.ListcategoryReducer,
        listProducts: store.listProductReducer,
        listPet: store.listPetReducer,
        listProductsFound: store.SearchProductReducer,
        listBrand: store.getListBrandReducers,
        filterProduct: store.filterProductReducers

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListProductRequestAction,
        GetListBrandRequestAction,
        getListPetAction,
        getListCategoryAction,
        FilterProduct
    }, dispatch)
}
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ProductComponent))