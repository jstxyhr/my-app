import React from "react";
import "../styles/Main.css"
import footLogo from "../icons_assets/Logo.svg"


const Footer = () => {
  return (
      <footer>
          <div className="footerSection">
              <div className="footerLogo">
                  <img src={footLogo} alt="footer logo"/>
              </div>
              <div className="contactPart">
                  <h3>Contact</h3>
                  <div>Phone</div>
                  <div>Email</div>
                  <div>Address</div>
              </div>
              <div className="socialPart">
                  <h3>Social Media</h3>
                  <div>Ins</div>
                  <div>Linkedin</div>
              </div>
          </div>
      </footer>
  );
};
export default Footer;