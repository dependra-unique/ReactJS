import React from 'react'
import { useContext } from 'react'
import UserContext from '../contextAPI/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <p>Abe tu context mein hi nhi hai</p>

    return <div>Welcome: {user.username}</div>   
    
}

export default Profile
