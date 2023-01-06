import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import "../css/homepage.css";

function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <Content />
    </div>
  );
}

export default Homepage;
