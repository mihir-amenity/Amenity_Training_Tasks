import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../Api.js';
import './EditProfile.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
function EditProfile() {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const token = localStorage.getItem("token");
 
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');
 
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    phone_number: '',
    profile_picture: null, // IMPORTANT: Never store the URL here
  });
 
  // Load initial data and set preview
  useEffect(() => {
    setFormData({
      first_name: state.firstname,
      last_name: state.last_name,
      address: state.address,
      email: state.email,
      phone_number: state.phone_number,
      profile_picture: null, // Keep null so backend keeps old image if unchanged

      
    });
 
  //   if(state.profile_picture === null &&  preview ===''){
  //     setPreview("https://shawanda-abiding-rayne.ngrok-free.dev"+ state.profile_picture);
  //   }
  //   else{
  //  setPreview('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')
  //   }
   if (state.profile_picture && state.profile_picture.trim() !== '') {
      // Check if it's already a full URL
      if (state.profile_picture.startsWith('http://') || state.profile_picture.startsWith('https://')) {
        setPreview(state.profile_picture);
      } else {
        // Add base URL to relative path
        const cleanPath = state.profile_picture.startsWith('/') 
          ? state.profile_picture 
          : '/' + state.profile_picture;
        setPreview("https://shawanda-abiding-rayne.ngrok-free.dev" + cleanPath);
      }
      console.log("Preview URL:", "https://shawanda-abiding-rayne.ngrok-free.dev" + (state.profile_picture.startsWith('/') ? state.profile_picture : '/' + state.profile_picture));
    } else {
      // Use default avatar
      setPreview('https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
      console.log("Using default avatar - no profile picture found");
    }
    
    
  }, [state]);
 
  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 

  
  // Handle image change
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
 
    setFormData({
      ...formData,
      profile_picture: file,
    });
 
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
 
  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    try {
      const form = new FormData();
 
      form.append("first_name", formData.first_name);
      form.append("last_name", formData.last_name);
      form.append("address", formData.address);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone_number);
 
      // Append the file ONLY if user selected one
      if (formData.profile_picture instanceof File) {
        form.append("profile_picture", formData.profile_picture);
      }
 
      const url = "https://shawanda-abiding-rayne.ngrok-free.dev/api/editprofile/";
 
      const response = await axios.put(url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "multipart/form-data",
        },
      });
 
      console.log("response:", response.data);
 
      if (response.data.success === true) {
        toast.success("Updates Sucessfully")
      }
 
    } catch (error) {
      console.log("error", error);
      toast.error(error.response?.data?.message || "Error updating profile", {
        position: "top-right",
        autoClose: 5000,
      });
 
    } finally {
      setLoading(false);
    }
  };
 
  return (
<div className="edit-user-container">
    <button
    onClick={() => navigate(-1)}
    style={{
      background: "none",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
      marginBottom: "12px",
      color: "#4a5568",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    }}
  >
    ⬅ Back
  </button>
<img src={preview} className='image' onError={(e)=>{ console.error("Image failed to load:", e.target.src);
            e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';}} alt='Profile Preview' />
 
      <h2 className="edit-user-title">Edit User</h2>
 
      <form className="edit-user-form" onSubmit={handleSubmit}>
 
        <div className="form-group">
<label htmlFor="first_name">First Name:</label>
<input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="form-input"
          />
</div>
 
        <div className="form-group">
<label htmlFor="last_name">Last Name:</label>
<input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            className="form-input"
          />
</div>
 
        <div className="form-group">
<label htmlFor="address">Address:</label>
<input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="form-input"
          />
</div>
 
        <div className="form-group">
<label htmlFor="phone_number">Phone Number:</label>
<input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="form-input"
          />
</div>
 
        <div className="form-group">
<label htmlFor="email">Email:</label>
<input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            disabled
            className="form-input"
          />
</div>
 
        <div className="form-group">
<label htmlFor="profile_picture">Profile Picture:</label>
<input
            type="file"
            id="profile_picture"
            name="profile_picture"
            accept="image/*"
            onChange={handleFileChange}
            className="form-input file-input"
          />
</div>
 
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Editing..." : "Edit Profile"}
</button>
 
        <ToastContainer />
</form>
</div>
  );
}
 
export default EditProfile;