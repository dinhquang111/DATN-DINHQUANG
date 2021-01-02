import React from 'react'
import AddPetAdminComponent from './AddPet/add-pet-admin-component'
import ListPetAdminComponent from './ListPet/list-pet-admin-component'
import EditPetAdminComponent from './EditPet/edit-pet-admin-component'

const routes = [
    {
        path: "/admin/pets",
        exact: true,
        main: ({match}) => <ListPetAdminComponent match={match}/>
    },
    {
        path: "/admin/pets/addpet",
        exact: false,
        main: () => <AddPetAdminComponent />
    },
    {
        path: "/admin/pets/edit/:id",
        exact: false,
        main: () => <EditPetAdminComponent />
    }
]
export default routes