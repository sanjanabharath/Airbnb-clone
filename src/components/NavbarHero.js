import React from "react";
import logo from "../images/experiences.png"


const NavbarHero = () => {
    return(
        <div>
            <img src={logo} className="hero--img" alt="experiences"/>
            <div className="main--content"><h1>Online Experiences</h1>
            <p id="side--line">Join unique interactive activities led by<br/>one-of-a-kind hosts—all without leaving home.</p></div>
        </div>
    )
}

export default NavbarHero;