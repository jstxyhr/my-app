import React from "react";
import "../styles/Main.css"
import chefA from "../icons_assets/Mario and Adrian A.jpg"
import chefB from "../icons_assets/Mario and Adrian b.jpg"

const AboutUs = () => {
  return (
      <section className="aboutUs1">
          <div className="aboutUs2">
              <div className="textPart">
                  <h1  id="aboutUs-section">Little Lemon</h1>
                  <h3>Chicago</h3>
                  <p>
                      Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

                      To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                  </p>
              </div>
              <div className="imgPart">
                  <img src={chefA} alt="chefa" className="chefA"></img>
                  <img src={chefB} alt="chefb" className="chefB"></img>
              </div>
          </div>
      </section>
  );
};
export default AboutUs;