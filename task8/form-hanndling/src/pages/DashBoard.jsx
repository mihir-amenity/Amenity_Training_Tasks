import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/Loginslice";

 
const Dashboard = () => {


  const user=localStorage.getItem("user");
  const dispatch = useDispatch();
 

  return (
    <div className="min-h-screen bg-gray-50">
     
      
      <nav className="bg-blue-600 shadow-md w-full">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <div className="w-32">
              <button  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition cursor-pointer" onClick={() => dispatch(logout())}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
 
     
      <main className="max-w-4xl mx-auto p-8 mt-6">
        
         <p> DashBoard Content</p>
         <h2> Hello {user}</h2>
      
      </main>
    </div>
  );
};
 
export default Dashboard;