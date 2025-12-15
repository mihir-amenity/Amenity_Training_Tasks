import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  './ChangePassword.css'
function ResetPassword() {

 
     const{id}=useParams();
     console.log(id);
     
 
    const[show,setShow]=useState(false);   
                const clickhandler=()=>{
                setShow(!show);
                console.log(show);
                
              }
              const[showpassword,setShowpassword]=useState(false);
          
           const clickhandlers=()=>{
                setShowpassword(!showpassword);
                console.log(showpassword);
                
              }

              const mail=localStorage.getItem("email");
  console.log(mail);
  
              const[formData,setFormData]=useState({
                      otp:'',
                      new_password:'',
                      confirm_new_password:''
                     })
                    
                     
                   const changehandler=(e)=>{
                          setFormData({...formData,[e.target.name]:e.target.value});
                          
                     } 
                  const  validatepassword=async(e)=>{
                      console.log(formData);
                      
                      e.preventDefault();
                      try {
                          const response=await fetch(`https://shawanda-abiding-rayne.ngrok-free.dev/api/resetpassword/${id}/`,{
                              method:"POST",
                              headers:{
                                   "Content-Type": "application/json",
                                  "ngrok-skip-browser-warning": "true",  
                              },
                        body: JSON.stringify({
                        email: mail,   
                        otp: formData.otp,
                        new_password: formData.new_password,
                        confirm_new_password: formData.confirm_new_password
                      })
                          })
                          const result=await response.json();
                          console.log("forgot password",result);
                          console.log(result.success);
                           
                          if(result.success==true){ 
                            toast.success(result.message,{
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                       
                                        })
                        //   navigate("/login")
                        setTimeout(()=>{
                               navigate("/login")
                        },5000)
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
                          console.log(error);
                          
                      }
                  }


  return (
    <div className='fp-main-box'>
  
    <div className='fp-page'>
        <h2> Enter Detail For Password Reset</h2>
      <form className="fp-form fp-reset-form">
      <label className="fp-label">OTP</label>
      <input
        type="text"
        name="otp"
        value={formData.otp}
        onChange={changehandler}
        className="fp-input otp"
        required
      />

      <label className="fp-label">Password:</label>
       <div className="password-field">
      <input
        type={showpassword ? "text" : "password"}
        name="new_password"
        value={formData.new_password}
        onChange={changehandler}
        className="fp-input"
        required
      />
       <span className="toggle-icon" onClick={clickhandlers}>
          {showpassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>

      <label className="fp-label">Confirm Password:</label>
       <div className="password-field">
      <input
        type={show ? "text" : "password"}
        name="confirm_new_password"
        value={formData.confirm_new_password}
        onChange={changehandler}
        className="fp-input"
        required
      />
       <span className="toggle-icon" onClick={clickhandler}>
          {show ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>

      <button onClick={validatepassword} type="submit" className="fp-button">Reset Password</button>
    </form>
    <ToastContainer/>
    </div>
    </div>
  )
}

export default ResetPassword
