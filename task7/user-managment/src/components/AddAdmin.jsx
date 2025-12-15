import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './EditProfile.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddAdmin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    profile_picture: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, profile_picture: e.target.files[0] });
    }
  }
  useEffect(() => {
    console.log(formData);
  }, [formData])


  const submithandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const url = "https://shawanda-abiding-rayne.ngrok-free.dev/api/adduser/"
      const response = await axios.post(url, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        address: formData.address,
        password: formData.password,
        confirm_password: formData.confirm_password,
        phone_number: "+91" + formData.phone_number,
        profile_picture: formData.profile_picture,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true',
          "Content-Type": "multipart/form-data",
        },
      })

      console.log(response.data);
      if (response.data.success) {
        navigate("/admin")
      }
      else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        })
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      })

    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className='edit-user-container'>
      <h2 className="edit-user-title">Add person</h2>
      <form className="edit-user-form" onSubmit={submithandler} >
        <div className='form-group'>
          <label>First Name</label>
          <input type='text' name='first_name' value={formData.first_name} className="form-input" onChange={handleChange} placeholder='Enter name' />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type='text' name='last_name' value={formData.last_name} className="form-input" onChange={handleChange} placeholder='Enter Last Name' />
        </div>
        <div className='form-group'>
          <label> Email</label>
          <input type='email' name='email' value={formData.email} placeholder='Enter email' className="form-input" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label>Address</label>
          <input type='textarea' name='address' value={formData.address} placeholder='Enter address' className="form-input" onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label>Phone NO</label>
          <input type="text" name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className='className="form-group'>
          <label>Profile Picture</label>
          <input
            type="file"
            name="profile_picture"
            accept="image/*"
            onChange={handleFileChange}
            className="form-input file-input"
          />
        </div>
        <button className="submit-btn" type='submit' disabled={loading}>{loading ? "Adding data " : "Submit"}</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AddAdmin
