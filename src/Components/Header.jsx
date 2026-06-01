import React from "react";
import "../Css/Header.css";
import { NavLink } from "react-router-dom";
import logo from '../assets/Inventra Logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} 
        className="logo-icon"
        alt="" />
        <h2>Inventra</h2>
      </div>

      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
        </NavLink>
        <a href="#features">Features</a>
        <NavLink to="/pricing" className={({ isActive }) => isActive ? "active" : ""}>
            Pricing
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About Us
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact Us
        </NavLink>
      </nav>

      <div className="header-actions">
        <button className="login-btn">Login</button>
        <button className="start-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;