import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    console.log("Logout successfully");
  };
  return (
    <div className="nav">
      {localStorage.getItem("token") ? (
        <ul>
          <li onClick={handleLogOut}>Log Out </li>
        </ul>
      ) : (
        <ul>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <li>Register </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>Login </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
