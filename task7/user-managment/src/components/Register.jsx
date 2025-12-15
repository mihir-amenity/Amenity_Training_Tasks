import React, { useState } from "react";
import api from "../Api";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes"

import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Register.css'
const Register = () => {
  // const API_URL = import.meta.env.VITE_API_KEY;

  console.log(import.meta.env.VITE_API_KEY)
  console.log("api Endpoinrt", routes.register);


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_2: "",
    phone: "",
    address: '',
    profile_pic: null,
  });
  const [show, setShow] = useState(false);
  const clickhandler = () => {
    setShow(!show);
    console.log(show);

  }
  const [showpassword, setShowpassword] = useState(false);
  const clickhandlers = () => {
    setShowpassword(!showpassword);
    console.log(showpassword);

  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Update text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update file field
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profile_pic: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const phone = "+91" + formData.phone

    const data = new FormData();
    data.append("email", formData.email);
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("password", formData.password);
    data.append("confirm_password", formData.password_2);
    data.append("phone_number", phone);
    data.append("address", formData.address);

    if (formData.profile_pic) {
      data.append("profile_picture", formData.profile_pic);
    }
    try {
      const response = await api.post(`${routes.register}`, data);
      console.log("Registration Success:", response.data);
      console.log("email", response.data.data.user.email);
      navigate("/verify-email", { state: { email: response.data.data.user.email } });
    } catch (err) {
      console.error("Backend Error:", err.response?.data);
      toast.error(err.response?.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      })
      if (err.response && err.response.data) {
        // setError(JSON.stringify(err.response.data));


      } else {
        setError("Network or server error");

      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    transition: "0.2s",
    background: "white",
    boxSizing: "border-box",
  };




  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "#f5f6fa",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "32px 28px",
          borderRadius: "14px",
          boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "28px",
            fontWeight: "700",
            textAlign: "center",
            color: "#1a202c",
          }}
        >
          Create Account
        </h2>

        {error && (
          <p
            style={{
              background: "#ffe6e6",
              color: "#cc0000",
              padding: "10px 14px",
              borderRadius: "8px",
              marginBottom: "16px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* First Name */}
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Last Name */}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Password */}
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ ...inputStyle, paddingRight: "45px" }}
            />

            <span
              onClick={clickhandler}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
                color: "#4a5568",
              }}
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Confirm Password */}
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showpassword ? "text" : "password"}
              name="password_2"
              placeholder="Confirm Password"
              value={formData.password_2}
              onChange={handleChange}
              required
              style={{ ...inputStyle, paddingRight: "45px" }}
            />



            <span
              onClick={clickhandlers}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
                color: "#4a5568",
              }}
            >
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Address"
            style={{
              padding: "12px",
              border: "2px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "14px",
            }}

          />

          {/* File Upload */}
          <input
            type="file"
            name="profile_pic"
            accept="image/*"
            onChange={handleFileChange}

            style={{
              padding: "12px",
              border: "2px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          />

          {/* Already have account */}
          <p style={{ textAlign: "center", fontSize: "14px", color: "#4a5568" }}>
            Already have an account?
            <a href="/login" style={{ marginLeft: "4px", color: "#667eea", fontWeight: "600" }}>
              Sign in
            </a>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.2s ease",
            }}
          >
            {loading ? "Registering..." : "Register Now"}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>

  );
};

export default Register;
