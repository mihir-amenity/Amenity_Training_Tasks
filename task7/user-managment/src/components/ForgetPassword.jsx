import React, { useState } from 'react'
 import './ForgetPassowrd.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaEye,FaEyeSlash} from 'react-icons/fa'
function ForgetPassword() {
  const navigate=useNavigate();
    const[mail,setemail]=useState('');
    const [step, setStep] = useState(1);
    const[loadaing,setLoading]=useState(false);
      //  const[otp,setotp]=useState(0)
      console.log("mail is ::",mail);
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
     

    const submithandler=async(e)=>{
      setLoading(true)
       e.preventDefault();
       try {
          const response=await fetch('https://shawanda-abiding-rayne.ngrok-free.dev/api/forgetpassword/',{
            method:"POST",
            headers:{
           "Content-Type": "application/json",
           "ngrok-skip-browser-warning": "true",  
            },
            body:JSON.stringify({email:mail})
        })
         const result=await response.json();
        console.log("signin sucess",result);
          localStorage.setItem("email",mail);
        if(result.success===false){
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
                else{
                 
                             toast.success(result.message,{
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
       finally{
        setLoading(false);
       }
    }
     const  emails=localStorage.getItem("email");
     console.log("emails are ::",emails);
     
     const[formData,setFormData]=useState({
        otp:'',
        new_password:'',
        confirm_new_password:''
       })
      
       
     const changehandler=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value});
            
       } 
    // const  validatepassword=async(e)=>{
    //     console.log(formData);
        
    //     e.preventDefault();
    //     try {
    //         const response=await fetch('https://shawanda-abiding-rayne.ngrok-free.dev/api/resetpassword/',{
    //             method:"POST",
    //             headers:{
    //                  "Content-Type": "application/json",
    //                 "ngrok-skip-browser-warning": "true",  
    //             },
    //           body: JSON.stringify({
    //       email: mail,   
    //       otp: formData.otp,
    //       new_password: formData.new_password,
    //       confirm_new_password: formData.confirm_new_password
    //     })
    //         })
    //         const result=await response.json();
    //         console.log("forgot password",result);
    //         console.log(result.success);
             
    //         if(result.success==true){ 
    //         navigate("/login")
    //         }
    //         else{
    //            toast.error(result.message,{
    //                       position: "top-right",
    //                       autoClose: 5000,
    //                       hideProgressBar: false,
    //                       closeOnClick: true,
    //                       pauseOnHover: true,
    //                       draggable: true,
    //                       progress: undefined,
                         
    //                       })
    //         }
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    
    
  return (
    <div>
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
    <div className="fp-page">
   
 
    <form onSubmit={submithandler} className="fp-form fp-email-form">
      <label className="fp-label">Enter Email:</label>
      <input
        type="email"
        name="mail"
        value={mail}
        onChange={(e) => setemail(e.target.value)}
        className="fp-input"
        placeholder='Enter Email'
        required
      />
     
      <button type="submit" className="fp-button" disabled={loadaing}> {loadaing ?"Submitting...":"Submit"}</button>
    </form>
  
  

  {/* {step === 2 && (
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
  )} */}
  <ToastContainer/>
</div>
</div>

  )
}

export default ForgetPassword;
