import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OTP() {
  const {state}=useLocation();

  console.log(state.email);
  
  const navigate=useNavigate();
    const[otp,setotp]=useState(0)
    const chnagehandler=(e)=>{
 setotp(e.target.value);
    }
    console.log(otp);
    
    const userData={
        "email":state.email,
        "otp":otp,
    }
    console.log(JSON.stringify(userData));
    
    const  submitbtn =async()=>{ 
        try {
            const response=await fetch('https://shawanda-abiding-rayne.ngrok-free.dev/api/verifyemail/',{
         method: "POST",
          headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData ),
      })
      const result=await response.json();
    
      
      
      console.log("verifyemail or otp",result);

      if(result.success===true){
  navigate("/login");
      }
      else{
 toast.error(result.message,{
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
            console.log("Errror:",error);
            
        }
    }

  return (
   <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    background: "#f5f6fa",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      width: "100%",
      maxWidth: "320px",
      padding: "25px",
      background: "#ffffff",
      borderRadius: "14px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
    }}
  >
    <label
      style={{
        fontSize: "15px",
        fontWeight: 600,
        color: "#333",
      }}
    >
      Enter OTP to verify Email
    </label>

    <input
      type="text"
      onChange={chnagehandler}
      placeholder="Enter 6 Digit OTP"
      style={{
        padding: "12px 14px",
        border: "1.5px solid #ccc",
        borderRadius: "10px",
        fontSize: "15px",
        outline: "none",
        transition: "0.2s",
        textAlign: "center",
      }}
    />

    <button
      type="submit"
      onClick={submitbtn}
      style={{
        padding: "12px",
        background: "#667eea",
        color: "white",
        fontSize: "16px",
        fontWeight: 600,
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.25s",
      }}
    >
      Verify OTP
    </button>

    <ToastContainer />
  </div>
</div>


  )
}

export default OTP;
