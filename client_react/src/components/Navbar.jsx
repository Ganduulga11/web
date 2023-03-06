import React from "react";
import "./Navbar.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const history = useNavigate();

    return (
        <div className="navbar-container">
            <div>Logo</div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </div>
            <div>
                <button onClick={() => history("/login")}>Sign in</button>
                <button onClick={() => history("/signup")}>Sign up</button>
            </div>
        </div>
    );
}

export default Navbar;
