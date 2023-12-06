import React from "react";
import "../styles/Main.css"
import food from "../icons_assets/restauranfood.jpg"
import "@fontsource/markazi-text"
import "@fontsource/karla"

const Main = () => {
    return (
    <main>
        <section  className="heading">
            <div className="heading2">
            <article className="article1">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant,
                 focused on traditional recipes served with a modern twist.</p>
            <button className="reserveButton">Reserve a Table</button>
            </article>
            <img src={food} alt="food" className="food"></img>
            </div>
        </section>
    </main>
    );
};
export default Main;