import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="n-wraper">
      <div className="n-left">
        <h1 className="n-title">Shanto</h1>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-class-list">
          <ul className="n-ul">
            <li className="n-li">Home</li>
            <li className="n-li">Service</li>
            <li className="n-li">Experience</li>
            <li className="n-li">Portfolio</li>
            <li className="n-li">Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
