import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GetUsers.css";
function GetUsers() {
  const navigate = useNavigate();
  const [user, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loadaing, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  // const getImageUrl = (profilePicture) => {
  //   if (!profilePicture || profilePicture.trim() === "") {
  //     return "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  //   }

  //   if (profilePicture.startsWith('http://') || profilePicture.startsWith('https://')) {
  //     return profilePicture
  //   }

  //   // Add base URL to relative path
  //   const cleanPath = profilePicture.startsWith("/") ? profilePicture : "/" + profilePicture
  //   return "https://shawanda-abiding-rayne.ngrok-free.dev" + cleanPath
  // }

  const getalluser = async () => {
    setLoading(true);
    try {
      const url = "https://shawanda-abiding-rayne.ngrok-free.dev/api/getusers/";

      const headers = {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Request-Headers": "authorization",
      };

      const response = await fetch(url, {
        method: "GET",
        headers,
      });
      const result = await response.json();
      console.log(result);
      if (result.code === "token_not_valid") {
        navigate("/login");
      }
      console.log("at api call", result.data.users);
      setUsers(result.data.users);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getalluser();
  }, []);

  return (
    <div className="user-container">
      {user.map((data) => (
        <div>
          {/* <p>{data.profile_picture}</p> */}
          <div className="user-card" key={data.id}>
            <img
              src={
                data.profile_picture?.includes("ngrok")
                  ? `${data.profile_picture}?ngrok-skip-browser-warning=true`
                  : data.profile_picture
              }
              alt={`${data.first_name} ${data.last_name}`}
              onError={(e) => {
                console.log(
                  "Image failed to load for user:",
                  data.profile_picture
                );
                e.target.src =
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
              }}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <p>
              <strong>ID:</strong> {data.id}
            </p>
            <p>
              <strong>Name:</strong> {data.first_name} {data.last_name}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Phone:</strong> {data.phone_number}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetUsers;
