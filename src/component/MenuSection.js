import salad from "../icons_assets/greek salad.jpg"
import bruchetta from "../icons_assets/bruchetta.svg"
import lemon from "../icons_assets/lemon dessert.jpg"
import delivery from "../icons_assets/delivery.jpg"
import "@fontsource/karla"

const MenuSection = () => {
    return (
        <section className="menuSection">
            <div className="menu1">
                <div className="dish1">
                    <img src={salad} alt="salad" className="salad"></img>
                    <div className="priceBox">
                    <h3 className="dishName">Greek salad</h3>
                    <p className="price">$12.99</p>
                    </div>
                    <p className="dishDes">The famous greek salad of crispy lettuce, peppers, olives and
                        our Chicago style feta cheese, garnished with crunchy garlic and
                        rosemary croutons.
                    </p>
                    <div>
                    <a className="order" href="#order-online">Order a delivery <img src={delivery} alt="delivery" className="delivery"></img></a>
                    </div>
                </div>
                <div className="dish2">
                <img src={bruchetta} alt="bruchetta" className="bruchetta"></img>
                    <div className="priceBox">
                    <h3 className="dishName">Bruchetta</h3>
                    <p className="price">$5.99</p>
                    </div>
                    <p className="dishDes">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned
                        with salt and olive oil.
                    </p>
                    <div>
                    <a className="order" href="#order-online">Order a delivery <img src={delivery} alt="delivery" className="delivery"></img></a>
                    </div>
                </div>
                <div className="dish3">
                    <img src={lemon} alt="lemon" className="lemon"></img>
                    <div className="priceBox">
                    <h3 className="dishName">Lemon Dessert</h3>
                    <p className="price">$5.00</p>
                    </div>
                    <p className="dishDes">
                        This comes straight from grandma's recipe book, every last ingredient has been sourced
                        and is as authentic as can be imagined.
                    </p>
                    <div>
                    <a className="order" href="#order-online">Order a delivery <img src={delivery} alt="delivery" className="delivery"></img></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;