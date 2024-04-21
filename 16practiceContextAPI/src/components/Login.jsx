import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../contextAPI/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <div>
            <input
            type='text'
            value={username}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            />

            <input
            type='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <button onSubmit={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
