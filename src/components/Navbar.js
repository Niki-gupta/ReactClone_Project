import React from 'react';
import './style.css';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#internship">Internship</a></li>
                <li><a href="#mocktest">Mocktest</a></li>
                <li><a href="#about">About</a></li>
                <li><button className="get-started">Get Started</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;
