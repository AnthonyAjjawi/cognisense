import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-bar">
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign-Up</Link></li>
                <li><Link to="/signin">Sign-In</Link></li>
                <li><Link to="/aichat">AI Chat</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
