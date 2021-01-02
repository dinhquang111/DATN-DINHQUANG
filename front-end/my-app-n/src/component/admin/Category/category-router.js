import React from 'react'
import AddCategoryAdminComponent from './AddCategory/add-category-admin-component'
import ListCategoryAdminComponent from './ListCategory/list-category-admin-component'
import EditOriginAdminComponent from './EditCategory/edit-category-admin-component'

const routes = [
    {
        path: '/admin/categorys',
        exact: true,
        main: () => <ListCategoryAdminComponent />
    },
    {
        path: '/admin/categorys/add',
        exact: false,
        main: () => <AddCategoryAdminComponent />
    }, {
        path: '/admin/categorys/edit/:id',
        exact: false,
        main: ({match}) =>  <EditOriginAdminComponent match={match}/>
    }
]
export default routes
