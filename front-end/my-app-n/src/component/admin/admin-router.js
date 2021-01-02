import React from 'react'
import BrandAdminComponent from './Brand/brand-admin-component'
import OriginAdminComponent from './Origin/origin-admin-component'
import PetAdminComponent from './Pet/pet-admin-component'
import ProductAdminComponent from './Product/product-admin-component'
import CategoryAdminComponent from './Category/category-admin-component'
import BlogAdminComponent from "./Blog/blog-admin-component"
import ForumAdminComponent from "./Forum/forum-admin-component"
import UserAdminComponent from './User/user-admin-component'
const routes = [
    {
        path: '/admin/users',
        exact: false,
        main: () => <UserAdminComponent />
    },
    {
        path: '/admin/brands',
        exact: false,
        main: () => <BrandAdminComponent />

    }, {
        path: '/admin/origins',
        exact: false,
        main: () => <OriginAdminComponent />

    }, {
        path: '/admin/pets',
        exact: false,
        main: () => <PetAdminComponent />

    }, {
        path: '/admin/products',
        exact: false,
        main: () => <ProductAdminComponent />

    }, {
        path: '/admin/categorys',
        exact: false,
        main: () => <CategoryAdminComponent />

    }, {
        path: '/admin/blogs',
        exact: false,
        main: () => <BlogAdminComponent />

    }, {
        path: '/admin/forums',
        exact: false,
        main: () => <ForumAdminComponent />
    },
]
export default routes