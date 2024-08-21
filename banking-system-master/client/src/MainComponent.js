import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Customers from './views/Customers';
import Customer from './views/Customer';
import Transactions from './views/Transactions';
import AddCustomer from './views/AddCustomer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {StepContext} from './Context/StepContext';

export default function Main() {
  return (
    <StepContext>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<Customer />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add" element={<AddCustomer />} />
        </Routes>
        <Footer />
   
    </StepContext>
  );
}
