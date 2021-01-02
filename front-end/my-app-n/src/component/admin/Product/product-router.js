import React from 'react'
import AddProductAdminComponent from './AddProduct/add-product-admin-component'
import ListProductAdminComponent from './ListProduct/list-product-admin-component'
import DetailProductAdminComponent from './DetailProduct/detail-product-admin-component'
import EditProductAdminComponent from './EditProduct/edit-product-admin-component'
const router = [
    {
        path: "/admin/products",
        exact: true,
        main: ({ match }) => <ListProductAdminComponent match={match} />
    },
    {
        path: "/admin/products/addproduct",
        exact: true,
        main: () => <AddProductAdminComponent />
    },
    {
        path: "/admin/products/detailproduct/:id",
        exact: true,
        main: () => <DetailProductAdminComponent />
    },
    {
        path: "/admin/products/edit/:id",
        exact: true,
        main: () => <EditProductAdminComponent />
    }
]

export default router