import React, { useEffect, useState } from 'react'
import GetUsers from './GetUsers';
import Modal from './Modal';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';

function DashBoard({onLogout}) {
  const navigate = useNavigate();
  const [output, setOutput] = useState(null)
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('')
  const [modal, setModal] = useState(false)

  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      const url = "https://shawanda-abiding-rayne.ngrok-free.dev/api/signout/"
      const headers = {
        'ngrok-skip-browser-warning': 'true', 
        "Access-Control-Request-Headers": "authorization"
      }
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      })
      const result = await response.json();
      console.log(result);
      localStorage.removeItem("token");
      navigate("/login")
    } catch (err) {
      console.error("Logout error:", err);
      // Still remove token and navigate even if API fails
      localStorage.removeItem("token");
      navigate("/login")
    }
  }

  const modalopen = () => {
    setModal(true);
  }

  const modalclose = () => {
    setModal(false);
  }

  const getalluser = async () => {
    setLoading(true)
    try {
      const url = 'https://shawanda-abiding-rayne.ngrok-free.dev/api/viewprofile/'
      const headers = {
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true', 
        "Access-Control-Request-Headers": "authorization"
      }
      
      if (!headers.Authorization || !token) {
        alert("Please add token")
        navigate("/login")
        return;
      }
      
      const response = await fetch(url, {
        method: 'GET',
        headers,
      })
      
      const result = await response.json();
      
      if (result.code === "token_not_valid") {
        navigate("/login")
        return;
      }

      console.log(result.data.user);
      setOutput(result.data.user);
    } catch (err) {
      console.error("Error fetching user:", err);
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  // Load user data on component mount
  useEffect(() => {
    if (token) {
      getalluser();
    } else {
      navigate("/login")
    }
  }, [])

  // Update preview image when output changes
  useEffect(() => {
    if (output?.profile_picture) {
      const pic = output.profile_picture;
      // Check if it's already a full URL
      if (pic.startsWith('http://') || pic.startsWith('https://')) {
        setPreview(pic);
      } else {
        // Add the base URL if it's a relative path
        const cleanPath = pic.startsWith("/") ? pic : "/" + pic;
        setPreview("https://shawanda-abiding-rayne.ngrok-free.dev" + cleanPath);
      }
    } else {
      // Default avatar
      setPreview("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
    }
  }, [output]);

  return (
    <div>
      <div className="dashboard-header">
        <div className="header-left">
          <h2 className="dashboard-title">Dashboard</h2>
        </div>

        <div className="header-right">
          <div className="profile-section">
            {loading ? (
              <div className="profile-loading">Loading...</div>
            ) : (
              <button 
                className="profile-btn" 
                onClick={() => output && setModal(!modal)}
                disabled={!output}
              >
                <img
                  src={preview}
                  alt="Profile"
                  className="profile-img"
                  onError={(e) => {
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }}
                />
              </button>
            )}

            {modal && output && (
              <div
                style={{
                  position: "fixed",
                  top: "70px",
                  right: "20px",
                  width: "250px",
                  background: "#ffffff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  borderRadius: "12px",
                  padding: "15px",
                  zIndex: 100,
                  fontFamily: "Poppins, sans-serif",
                  animation: "fadeIn 0.25s ease",
                }}
              >
                {/* USER PROFILE DETAILS */}
                <div
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    marginBottom: "12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "17px", fontWeight: "600", color: "#333" }}>
                    {output.first_name} {output.last_name}
                  </div>
                  <div style={{ fontSize: "14px", color: "#666", marginTop: "4px" }}>
                    {output.email}
                  </div>
                </div>

                {/* BUTTONS */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    onClick={() => {
                      setModal(false);
                      navigate("/edit-profile", {
                        state: {
                          firstname: output.first_name,
                          last_name: output.last_name,
                          email: output.email,
                          phone_number: output.phone_number,
                          profile_picture: output.profile_picture,
                          address: output.address,
                        },
                      })
                    }}
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #007bff",
                      background: "white",
                      color: "#007bff",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                      transition: "0.2s",
                    }}
                    
                  >
                    Edit Profile
                  </button>

                  <button
                    onClick={() => {
                      setModal(false);
                      navigate("/change-password")
                    }}
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #6c757d",
                      background: "white",
                      color: "#6c757d",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                      transition: "0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#6c757d"
                      e.target.style.color = "white"
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "white"
                      e.target.style.color = "#6c757d"
                    }}
                  >
                    Change Password
                  </button>

                  <button
                    onClick={handleLogout}
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                      transition: "0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#c82333"
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "#dc3545"
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* BACKDROP TO CLOSE MODAL */}
            {modal && output && (
              <div
                onClick={() => setModal(false)}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 99,
                }}
              />
            )}
          </div>
        </div>
      </div>

      <GetUsers />
    </div>
  )
}

export default DashBoard