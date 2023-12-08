import { useState} from "react";
import React from 'react';

const BookingForm = (props) => {

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("")
    const [times, setTimes] = useState("")

    const handleFirstNameChange = (e) => {
        setfName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setlName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleGuestChange = (e) => {
        setGuests(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
    }

    const handleTimesChange = (e) => {
        setTimes(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e)
    }

    const isFormValid = () => {
        return (isValidEmail(email) && date !== "" && fName !== "" && lName !== "" && occasion !== "" && times !== "")
    }
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="bookingSection">
            <form className="bookingForm" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First name:</label>
                <input id="first-name" name="first-name" type="text" value={fName} onChange={handleFirstNameChange} required/>
                <label htmlFor="last-name">Last name:</label>
                <input id="last-name" name="last-name" type="text" value={lName} onChange={handleLastNameChange} required/>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" value={email} onChange={handleEmailChange} required/>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={times} onChange={handleTimesChange} required>
                    <option value="">Select an Time</option>
                    {props.availableTimes.map(times => {
                        return <option key={times}>{times}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} key={occasion} onChange={handleOccasionChange} required>
                    <option value="">Select an Option</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" className="bookingButton" disabled={!isFormValid()}>Make Your reservation</button>
            </form>
        </section>
    );
};
export default BookingForm;
