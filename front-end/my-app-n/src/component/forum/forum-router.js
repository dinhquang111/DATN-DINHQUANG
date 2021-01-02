import React from 'react'
import ForumGeneralComponent from './forum-general/forum-general-component'
import ForumTopicComponent from './forum-topic/forum-topic-component'
import ForumTopicDetail from './forum-topic-detail/forum-topic-detail-component'
import ForumAddTopic from "./forum-add-topic/forum-add-topic";
const routes = [
    {
        path:'/forum',
        exact : true,
        main : ({match}) => <ForumGeneralComponent match={match}/>
    },
    {
        path:'/forum/topic/:fid',
        exact : false,
        main : ({match}) => <ForumTopicComponent match={match}/>
    },
    {
        path:'/forum/addtopic/:fid',
        exact : false,
        main : ()=>  <ForumAddTopic/>
    },
    {
        path:'/forum/detail/:fid/:cid',
        exact : false,
        main : () => <ForumTopicDetail/>
    }
]
export default routes
