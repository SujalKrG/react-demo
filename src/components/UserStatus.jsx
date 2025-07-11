import React from 'react'

const UserStatus = ({isAdmin}) => {
    const isLoggedIn = true;

    if(isLoggedIn && isAdmin){
        return <h1>Welcome, Admin!</h1>
    }
    else{
        return <h1>Welcome, User</h1>
    }
}

export default UserStatus