import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}){

      const navigate = useNavigate()
      const [loader, setLoader] = useState("")
      const authStatus = useSelector((state) => state.auth.status)

      useEffect(() => {
        //Todo , make it more easy to understand

        // if(authStatus == true){
        //     navigate("/")
        // } else if(authStatus == false){
        //     navigate("/login")
        // }

        // let authValue = authStatus === true ? true : fa

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
      }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}