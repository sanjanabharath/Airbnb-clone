import React from "react";
import logo from "./logo192.png"

const Header = () => {
    return (
        <div className="nav">
             <img src={logo} alt="logo" width="40px" />
             <ul className="container">
                <li>Pricing</li>
                <li>Contact Us</li>
                <li>About</li>
             </ul>
        </div>
    );

}

export default Header;