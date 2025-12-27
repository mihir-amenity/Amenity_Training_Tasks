import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {

    const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
    console.log(isAuthenticated)

  return (
    <div>
      {isAuthenticated?children:<Navigate to={"/login"}/>}
    </div>
  )
}

export default ProtectedRoutes
