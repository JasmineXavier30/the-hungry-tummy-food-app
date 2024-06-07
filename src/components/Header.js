import { useState } from "react";
import logo from "../../images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation(); // to get passed form values (state obj)
    const navigate = useNavigate();
    const loginFormData = location.state || null;

    const handleLoginLogout = () => {
        if (loginFormData) {
            navigate("/")
        } else {
            navigate("/login")
        }
    }

    const header = 
        <div className="header-container">
            <img id="logo" src={logo} alt="logo" />
            <nav className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><button className="btn" onClick={handleLoginLogout}>{loginFormData ? "Logout" : "Login"}</button></li>
                    {loginFormData ? <li>Welcome {loginFormData.username}!</li> : ""}
                </ul>
            </nav>
        </div>;

    return header;
}

export default Header;