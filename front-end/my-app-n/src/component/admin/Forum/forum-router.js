import React from 'react'
import ListForumAdminComponent from './ListForum/list-forum-admin-component'
import AddForumAdminComponent from './AddForum/add-forum-admin-component'
import EditForumAdminComponent from './EditForum/edit-forum-admin-component'
import ListForumChillAdminComponent from './Forumchill/ListForum/list-forum-chill-admin-component'
const routes = [
    {
        path: '/admin/forums',
        exact: true,
        main: () => <ListForumAdminComponent />
    },
    {
        path: '/admin/forums/add',
        exact: false,
        main: () => <AddForumAdminComponent />

    },
    {
        path: '/admin/forums/chill/:id',
        exact: false,
        main: ({match}) => <ListForumChillAdminComponent match={match}/>

    },
    {
        path: '/admin/forums/edit/:id',
        exact: false,
        main: ({ match }) => <EditForumAdminComponent match={match} />
    },
]
export default routes