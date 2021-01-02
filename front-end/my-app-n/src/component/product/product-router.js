import React from "react";
import ProductDetailComponent from './product-detail/product-detail-component'
import ProductListFindComponent from './product-list-find/product-list-find-component'
import ProductListFilterComponent from './product-filter/product-list-filter-component'
const routes = [
    {
        path: '/product/search/:id',
        exact: false,
        main: ({ match }) => <ProductListFindComponent match={match} />
    },
    {
        path: '/product/detail/:id',
        exact: false,
        main: ({ match }) => <ProductDetailComponent match={match} />
    },
    {
        path: '/product/filter',
        exact :false,
        main : ()=><ProductListFilterComponent />
    }
]
export default routes