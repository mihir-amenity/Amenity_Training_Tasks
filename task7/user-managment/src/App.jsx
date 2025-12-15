import React, { useState } from "react";
import OTP from "./components/otp";
import Signin from "./components/Signin";
import GetUsers from "./components/GetUsers";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Link,Navigate, redirect } from 'react-router-dom';
import DashBoard from "./components/DashBoard";
import ProtectedRoute from "./utils/ProtectedRoutes"
import CookieReader from "./components/CookieReader";
import ForgetPassword from "./components/ForgetPassword"
import EditProfile from "./components/EditProfile";
import AdminDashBoard from "./components/AdminDashBoard";
import EditAdmin from "./components/EditAdmin.jsx"
import AddAdmin from "./components/AddAdmin.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NotFound from "./components/NotFound.jsx";
function App() {


  const[isAuthenticated,setIsAuthenticated]=useState(false);
  const onLogin=()=>{
    setIsAuthenticated(true)
  }
  const onLogout=()=>{
    setIsAuthenticated(false);
  }
  const [formData, setFormData] = useState({
    first_name: "Parth",
    last_name: "Vaghela",
    email: "milusolanki07@gmail.com",
    address: "Shreenath Residency, Ahmedabad",
    password: "Parth@2025",
    confirm_password: "Parth@2025",
    phone_number: "+919876543210",
  });

  const [profile_picture, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async () => {
  try {
    const data = new FormData();

    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("email", formData.email);
    data.append("address", formData.address);
    data.append("password", formData.password);
    data.append("confirm_password", formData.confirm_password);
    data.append("phone_number", formData.phone_number); 
    if (profile_picture) {
      data.append("profile_picture", profile_picture);
    }

    const response = await fetch(
      "https://shawanda-abiding-rayne.ngrok-free.dev/api/signup/",
      {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        body: data,
      }
    );
    const result = await response.json();
    console.log("Signup successful:", result);

  } catch (error) {
    console.error("Signup error:", error);
    console.log(error.message);
     if (error.response) {
    const text = await error.response.text();
    console.log("SERVER RESPONSE:", text);
  }
  }
};


  return (
    <div >
     

      {/* <input type="file" onChange={handleFileChange} /> */}

      {/* <button onClick={handleSubmit}>Submit</button> */}
      {/* <OTP/> */}
      {/* <Signin/>
      <Register/> */}
      {/* <GetUsers/> */}

      <BrowserRouter>
       <ToastContainer/>
      <Routes>
    
      <Route path="/dashboard" 
                           element={
                            <ProtectedRoute><DashBoard/> </ProtectedRoute>
                                     }/>
       <Route path="/" element={<Register/>}/>
       <Route path="/login"  element={<Signin />}/>
       <Route path="/token" element={<GetUsers/>}/>
       <Route path="/verify-email" element={<OTP/>}/>
      <Route path="/forget-password"element={<ForgetPassword/>} />
      <Route path="/resetpassword/:id" element={<ResetPassword/>}/>
      <Route path="/edit-profile" element={<ProtectedRoute><EditProfile/></ProtectedRoute>}/>
      <Route path="/admin" element={<ProtectedRoute><AdminDashBoard/></ProtectedRoute>}/>
      <Route path="/edit/:id" element={<ProtectedRoute><EditAdmin/></ProtectedRoute>}/>
     <Route path="/adduserdata" element={<ProtectedRoute><AddAdmin/></ProtectedRoute>}/>
     <Route path="/change-password" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}/>
     <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
