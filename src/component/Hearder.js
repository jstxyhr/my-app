import React from "react";
import logo from '../icons_assets/Logo.svg'
import Nav from "./Nav";
import "../styles/Main.css"

const Header = () => {
    return (
    <header>
        <div className="header2">
        <img src={logo} alt="logo"></img>
        <Nav />
        </div>
    </header>
    );
};
export default Header;