import React from "react";
import "../styles/Main.css"
import Header from "./Hearder";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

const BookingPage = (props) => {
  return (
      <div className="bookingPage">
          <Header/>
          <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
          <Footer/>
      </div>
  );
};
export default BookingPage;