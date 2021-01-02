import React from 'react'
import AddBrandAdminComponent from './AddBrand/add-brand-admin-component'
import ListBrandAdminComponent from './ListBrand/list-brand-admin-component'
import EditBrandAdminComponent from './EditBrand/edit-brand-admin-component'
const router = [
    {
        path: '/admin/brands',
        exact: true,
        main: ({match}) => <ListBrandAdminComponent match={match}/>
    },
    {
        path: '/admin/brands/add',
        exact: false,
        main: () => <AddBrandAdminComponent />
    },
    {
        path: '/admin/brands/edit/:id',
        exact: false,
        main: () =><EditBrandAdminComponent />
    }
]
export default router