import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

const AppRoutes = () => (
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/booking" element={<BookingPage />} />
    </Routes>
);

export default AppRoutes;
