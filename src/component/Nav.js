import React from "react";
import "../styles/Main.css"
import "@fontsource/karla"
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";


const Nav = () => {
    return (
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
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