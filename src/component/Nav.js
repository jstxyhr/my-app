import React from "react";
import "../styles/Main.css"
import "@fontsource/karla"
import { Link } from 'react-router-dom'


const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

const Nav = () => {
    return (
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#about" onClick={ handleClick("aboutUs")}>About</a>
                        </li>
                        <li>
                            <a href="#menu" onClick={ handleClick("menu") }>Menu</a>
                        </li>
                        <li>
                            <Link to="/booking">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/order-online">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
};
export default Nav;