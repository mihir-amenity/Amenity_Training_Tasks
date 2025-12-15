import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signin.css'
import { routes } from "../../routes"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Signin() {


  const navigate = useNavigate();
  const [loadaing, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  console.log(formData);
  const [show, setShow] = useState(false);
  const clickhandler = () => {
    setShow(!show);
    console.log(show);

  }
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profile_picture: e.target.files[0] });
    }
    else {

      setFormData({ ...formData, profile_picture: "https://shawanda-abiding-rayne.ngrok-free.dev/" + state.profile_picture })
    }
  }
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const submithandler = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {

      const response = await fetch(`${routes.login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase(),
          password: formData.password,
        }),
      })
      const result = await response.json();
      console.log("signin sucess", result);
      if (result.success === false) {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        })
      }
      console.log("message", result.message);
      console.log("sucess   ", result.success);


      // onLogin(formData.email, formData.password);
      console.log("token:", result.data.access_token);
      localStorage.setItem("token", result.data.access_token);
      console.log("userrole is ", result.data.role);


      if (result.data.role === "Superuser") {
        navigate("/admin")
      }
      else {
        navigate("/dashboard")

      }


    } catch (error) {
      console.log(error);
      toast.error(error, {
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
  const forgetpasswordHandler = async (e) => {
    try {
      const response = await fetch('https://shawanda-abiding-rayne.ngrok-free.dev/api/forgetpassword', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(formData.email)
      })
    } catch (error) {

    }

  }



  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        // background: "#f7f7fb",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "32px 26px",
          width: "100%",
          maxWidth: "360px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            marginBottom: "24px",
            fontSize: "28px",
            fontWeight: "700",
            textAlign: "center",
            color: "#1a202c",
          }}
        >
          Sign In
        </h3>

        <form
          onSubmit={submithandler}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          {/* Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#2d3748",
                marginLeft: "2px",
              }}
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handlechange}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "2px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
          {/* Password */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#2d3748",
                marginLeft: "2px",
              }}
            >
              Password
            </label>

            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handlechange}
                required
                style={{
                  width: "100%",
                  padding: "14px 50px 14px 16px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "10px",
                  fontSize: "15px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button
                type="button"
                onClick={clickhandler}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "#718096",
                  background: "none",
                  border: "none",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => e.target.style.color = "#667eea"}
                onMouseLeave={(e) => e.target.style.color = "#718096"}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <button
            type="button"
            onClick={() => navigate("/forget-password")}
            style={{
              background: "none",
              border: "none",
              color: "#667eea",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              alignSelf: "flex-end",
              marginTop: "-8px",
            }}
          >
            Forgot Password?
          </button>

          {/* Sign Up Link */}
          <p style={{ textAlign: "center", fontSize: "14px", color: "#4a5568" }}>
            Don’t have an account?
            <a href="/" style={{ color: "#667eea", fontWeight: "600", marginLeft: "4px" }}>
              Sign up
            </a>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loadaing}
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
              transition: "0.2s",
            }}
          >
            {loadaing ? "Signing in..." : "Sign In"}
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>

  )
}

export default Signin
