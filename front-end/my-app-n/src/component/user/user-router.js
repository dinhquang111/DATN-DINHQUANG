import React from 'react'
import UserProfileComponent from './user-profile-component.js/user-profile-component'
import UserInFomationComponent from './user-information/user-information-component'
const routes = [
    {
        path: '/profile',
        exact: true,
        main: () => <UserInFomationComponent />
    },
    {
        path: '/profile/edit',
        exact: false,
        main: () => <UserProfileComponent />
    }
]
export default routes