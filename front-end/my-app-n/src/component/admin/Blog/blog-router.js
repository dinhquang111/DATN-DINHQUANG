import React from 'react'
import AddBlogAdminComponent from './AddBlog/add-blog-admin-component'
import ListBlogAdminComponent from './ListBlog/list-blog-admin-component'
import DetailBlogAdminComponent from './DetailBlog/detail-blog-admin-component'
import EditBlogAdminComponent from './EditBlog/edit-blog-admin-component'
const routes = [
    {
        path: '/admin/blogs',
        exact: true,
        main: () => <ListBlogAdminComponent />
    },
    {
        path: '/admin/blogs/add',
        exact: false,
        main: () => <AddBlogAdminComponent />
    },
    {
        path: '/admin/blogs/detail/:id',
        exact: false,
        main: ({match}) => <DetailBlogAdminComponent match={match}/>
    },
    {
        path: '/admin/blogs/edit/:id',
        exact: false,
        main: ({match}) => <EditBlogAdminComponent match={match}/>
    }

]
export default routes