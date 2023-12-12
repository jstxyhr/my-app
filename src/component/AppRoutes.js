import React, {useReducer} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from "./ConfirmedBooking";
import OrderOnline from "./OrderOnline";
const AppRoutes = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };
    const initialTimes = []
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    function updateTimes(state, date) {
        return fetchAPI(new Date(date))
    }

    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(true)) {
            navigate("/confirmed")
        }
    }


    return (
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
    <Route path="/confirmed" element={<ConfirmedBooking />} />
    <Route path="/order-online" element={<OrderOnline />} />
    <Route path="/login" element={<OrderOnline />} />
    </Routes>
    );
};

export default AppRoutes;
