import React from 'react'

function temporary() {
  return (
    <div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label 
                    style={{ 
                      fontSize: "14px", 
                      fontWeight: "600", 
                      color: "#2d3748",
                      marginLeft: "2px",
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
    </div>
  )
}

export default temporary
