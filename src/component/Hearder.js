import React, { useEffect } from "react";
import logo from '../icons_assets/Logo.svg'
import Nav from "./Nav";
import "../styles/Main.css"

const Header = () => {
    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = document.getElementById("myHeader");
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-100px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return (
    <header  id="myHeader">
        <div className="header2">
        <img src={logo} alt="logo"></img>
        <Nav />
        </div>
    </header>
    );
};
export default Header;