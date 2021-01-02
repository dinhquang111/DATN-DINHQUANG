import React from 'react'
import BlogListFindComponent from './blog-find/blog-list-find-component'
import BlogDetailComponent from './blog-detail/blog-detail-component'


const router = [
    {
        path : '/blog/search/:id',
        exact : false,
        main : ({match}) => <BlogListFindComponent match={match}/>
    },
    {
        path : '/blog/detail/:id',
        exact : false,
        main : ({match}) => <BlogDetailComponent match={match}/>
    }
]
export default router