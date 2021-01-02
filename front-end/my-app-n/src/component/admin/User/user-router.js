import React from 'react'
import EditUserAdminComponent from './EditUser/edit-user-admin-component'
import ListUserAdminComponent from './ListUser/list-user-admin-component'
const routes = [
    {
        path: '/admin/users',
        exact: true,
        main: () => <ListUserAdminComponent />
    },
    {
        path: '/admin/users/edit/:id',
        exact: true,
        main: () => <EditUserAdminComponent />
    }
]
export default routes