import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaEye,FaEyeSlash} from 'react-icons/fa'


function ChangePassword() {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        old_password:'',
        new_password:'',
        confirm_new_password:''
        })
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

                  const[showconfirmpassword,setshowconfirmpassword]=useState(false);
                   const clickconfirm=()=>{
                    setshowconfirmpassword(!showconfirmpassword);
                    console.log(showconfirmpassword);
                    
                  }
        const token=localStorage.getItem("token");

        const changehandler=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value});
        }
        useEffect(()=>{
        console.log(formData);
        


        },[formData])


        const submithandler=async(e)=>{
            console.log("at the submit old",formData.old_password);
            console.log("new",formData.new_password);
            console.log("confirm",formData.confirm_new_password);
            
            
            
            e.preventDefault();
               try {
                        const response=await fetch('https://shawanda-abiding-rayne.ngrok-free.dev/api/changepassword/',{
                            method:"POST",
                            headers:{
                                 'Authorization': `Bearer ${token}`,
                                 "Content-Type": "application/json",
                                "ngrok-skip-browser-warning": "true",  
                            },
                          body: JSON.stringify({
                       old_password:formData.old_password,
                       new_password:formData.new_password,
                       confirm_new_password:formData.confirm_new_password
                    })
                        })
                        
                        const result=await response.json();
                        console.log("CHange password::",result);
                        console.log(result.message);
                        
                       
                         
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

                                    setTimeout(()=>{
                                       navigate("/dashboard")
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
    }

  return (
    <div  >
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
      <div style={{display:"flex",justifyContent:"center", padding: "25px"}}>
           <h2>Change Password </h2>
      </div>
   
    <div style={{ display: "flex", justifyContent: "center", padding: "20px", alignItems:"center" }}>
     
  <form
    onSubmit={submithandler}
    style={{
      width: "100%",
      maxWidth: "420px",
      padding: "28px",
      background: "#fff",
      borderRadius: "14px",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
    }}
  >

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
                      type={ showpassword ? "text" : "password"}
                      name="old_password"
                      placeholder="Enter Your Old password "
                      value={formData.old_password}
                      onChange={changehandler}
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
                      onClick={clickhandlers}
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
                      {showpassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                  </div>
                </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label 
                    style={{ 
                      fontSize: "14px", 
                      fontWeight: "600", 
                      color: "#2d3748",
                      marginLeft: "2px",
                      marginTop:"10px"
                    }}
                  >
                     New Password
                  </label>
      
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type={show ? "text" : "password"}
                      name="new_password"
                      placeholder="Enter your password"
                      value={formData.new_password}
                      onChange={changehandler}
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
                      {show ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                  </div>
                </div>

     <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label 
                    style={{ 
                      fontSize: "14px", 
                      fontWeight: "600", 
                      color: "#2d3748",
                      marginLeft: "2px",
                      marginTop:"10px"
                    }}
                  >
                     Confirm Password
                  </label>
      
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type={ showconfirmpassword ? "text" : "password"}
                      name="confirm_new_password"
                      placeholder="Enter Your Confirm New password "
                      value={formData.confirm_new_password}
                      onChange={changehandler}
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
                      onClick={clickconfirm}
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
                      {showconfirmpassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                  </div>
                </div>

    <button
      type="submit"
      style={{
        marginTop: "18px",
        padding: "12px",
        background: "#667eea",
        color: "white",
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
      }}
      
    >
      Reset Password
    </button>
  </form>
  <ToastContainer/>
</div>

</div>

  )
}

export default ChangePassword
