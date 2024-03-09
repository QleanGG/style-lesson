import React from 'react';
import { Link } from 'react-router-dom';
import './RegularNav.css'

function RegularNav() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Basic Nav</Link>
            <div className="nav-links">
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/services" className="nav-item">Services</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </div>
        </nav>
    );
}

export default RegularNav;
