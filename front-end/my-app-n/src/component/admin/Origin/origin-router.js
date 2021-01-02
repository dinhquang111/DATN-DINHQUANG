import React from 'react'
import AddOriginAdminComponent from './AddOrigin/add-origin-admin-component'
import ListOriginAdminComponent from './ListOrigin/list-origin-admin-component'
import EditOriginAdminComponent from './EditOrigin/edit-origin-admin-component'

const routes = [
    {
        path: "/admin/origins",
        exact: true,
        main: () => <ListOriginAdminComponent />
    },
    {
        path: "/admin/origins/add",
        exact: true,
        main: () =>  <AddOriginAdminComponent />
    },
    {
        path: "/admin/origins/edit/:id",
        exact: true,
        main: ({match}) => <EditOriginAdminComponent match={match}/>
    }
]
export default routes