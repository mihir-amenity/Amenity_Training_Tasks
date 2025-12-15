import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditAdmin() {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
   const[loadaing,setLoading]=useState(false);
    const[formData,setFormData]=useState({
        first_name:'',
        last_name:'',
        address:'',
        email:'',
        phone_number:'',
        profile_picture:null,
    })
    const {id }=useParams();
    const {state}=useLocation();
    console.log(id);
    console.log(state);

   useEffect(()=>{
    setFormData({
        first_name:state.firstname,
        last_name:state.last_name,
        address:state.address,
        email:state.email,
        phone_number:state.phone_number,
        profile_picture:state.profile_picture,
    })
   },[state])

   useEffect(()=>{
console.log(formData);

   },[formData])


   const submithandler=async(e)=>{
    setLoading(true);
 e.preventDefault();
 
   try {
       const url = `https://shawanda-abiding-rayne.ngrok-free.dev/api/edituser/${id}/`
     
 const response =await axios.put(url,formData,{
  
    headers:{
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true', 
        "Content-Type": "multipart/form-data",
    },
    
 })

console.log(response.data);
navigate("/admin")


   } catch (error) {
    console.log(error.response);
     toast.error(error.response.data.message,{
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                           
                            })
                 
    
   }
   finally{
    setLoading(false)
   }
    }

    const filehandlechange=(e)=>{
        if(e.target.files[0])
        setFormData({...formData,profile_picture:e.target.files[0]});
    } 

    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
      
  return (
    <div className='edit-user-container'>
      <h2 className="edit-user-title">Edit Admin</h2>
      <form  className="edit-user-form" onSubmit={submithandler}>
        <div className='form-group'>
        <label>First Name</label>
        <input type='text' name='first_name' value={formData.first_name} onChange={changeHandler} className="form-input"/>
         </div>
          <div className='form-group'>
        <label>Last name:</label>
        <input type='text'  value={formData.last_name} name='last_name' className="form-input" onChange={changeHandler}/>
        </div>
         <div className='form-group'>
        <label>Email:</label>
        <input type='text' value={formData.email} name='email' className="form-input" onChange={changeHandler}/>
        </div>
         <div className='form-group'>
        <label>Address:</label>
        <input type='textarea' value={formData.address} name='address'  className="form-input" onChange={changeHandler}/>
        </div>
         <div className='form-group'>
        <label>phone No:</label>
        <input type='text' value={formData.phone_number} name='phone_no'  className="form-input"  onChange={changeHandler}/>
        </div>
         <div className='form-group'>
        <label>Input file</label>
        <input type='file' name='profile_picture'  className="form-input file-input"  onChange={filehandlechange}/>
        </div>
        <button className="submit-btn" disabled={loadaing} >
          {
            loadaing ?"Editing ..":" Submit"
          }
         </button>
       
      </form>
<ToastContainer/>
    </div>
  )
}

export default EditAdmin
