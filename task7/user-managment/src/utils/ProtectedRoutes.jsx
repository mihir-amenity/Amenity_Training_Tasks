import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify';

  const ProtectedRoute = ({children}) => {
   const token=localStorage.getItem("token");
   if(!token){
      toast.info("please login to continue",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
               
                })
    return <Navigate to="/login"/>
   }
   return children;
  
}
export default ProtectedRoute;
