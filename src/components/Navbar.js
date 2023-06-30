import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand">StreamIt</NavLink>
            <div className="nav-links">
                <NavLink to="/plans" className={location.pathname === "/plans" ? "activeLink" : ""}>Plans</NavLink>
                <NavLink to="/movies-shows" className={location.pathname === "/movies-shows" ? "activeLink" : ""}>Movies & Shows</NavLink>
                <NavLink to="/subscribe" className={location.pathname === "/subscribe" ? "activeLink" : ""}>Subscribe</NavLink>
            </div>
            <div className="auth-buttons">
                <NavLink to="/login" className="login-button">Log In</NavLink>
                <NavLink to="/signup" className="signup-button">Sign Up</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
