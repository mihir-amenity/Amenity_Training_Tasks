import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css'



function AdminDashBoard() {
    const navigate=useNavigate()
     const [user,setUsers]=useState([]);
    const token=localStorage.getItem("token");
      const getalluser = async () => {
    try {
      const url = 'https://shawanda-abiding-rayne.ngrok-free.dev/api/getusers/'
    
      const headers = {
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true', 
         "Access-Control-Request-Headers": "authorization"
      }
       
      const response = await fetch(url, {
        method: 'GET',
        headers,
      })
      const result = await response.json();
      console.log(result);
      console.log("at api call",result.data.users);
       setUsers(result.data.users)
    } catch (err) {
      console.log(err);
      
    }
  }
    useEffect(()=>{
   getalluser()
  },[])
    
  useEffect(()=>{
    console.log("usr after api call or updated user",user);
    
  },[user])
  
  const deleteHandler=async(id)=>{ 
console.log("i need to delete user is ",id);

try {
    const url=`https://shawanda-abiding-rayne.ngrok-free.dev/api/deleteuser/${id}/`
    const response= await axios.delete(url,{
          headers:{
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true',
    }
    })
    console.log(response);
    getalluser()

} catch (error) {
    console.log(error);
    
}   
  }
  return (
 <div className="admin-dashboard">
  <h2 className="admin-title">Welcome to Admin</h2>

  <button className="add-user-btn" onClick={() => navigate("/adduserdata")}>
    Add User
  </button>

  <div className="user-list">
    {user.map((data) => (
      <div className="user-card" key={data.id}>
        <div className="user-info">
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>First Name:</strong> {data.first_name}</p>
          <p><strong>Last Name:</strong> {data.last_name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone_number}</p>
        </div>
        <div className="user-image">
          <img
            src={`https://shawanda-abiding-rayne.ngrok-free.dev/${data.profile_picture}`}
            alt="Profile"
          />
        </div>
        <div className="user-actions">
          <button
            className="edit-btn"
            onClick={() =>
              navigate(`/edit/${data.id}`, {
                state: {
                  firstname: data.first_name,
                  last_name: data.last_name,
                  email: data.email,
                  phone_number: data.phone_number,
                  profile_picture: data.profile_picture,
                  address: data.address,
                },
              })
            }
          >
            Edit User
          </button>
          <button className="delete-btn" onClick={() => deleteHandler(data.id)}>
            Delete User
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default AdminDashBoard
