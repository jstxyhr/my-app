import React from "react";
import "../styles/Main.css"
import Header from "./Hearder";
import Footer from "./Footer";

const OrderOnline = () => {
  return (
      <div className="orderOnline">
          <Header />
          <div className="comingSection">
              Coming Soon!
          </div>
          <Footer />
      </div>
  );
};
export default OrderOnline;