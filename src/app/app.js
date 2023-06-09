import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from './pages/home'
import Products from './pages/products';
import Contact from './pages/contact';
import About from './pages/about';
import Sell from './pages/sell';
import Register from './pages/register';

// import global components
import Footer from './global/footer';
import Navbar from './global/navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/sell' element={<Sell />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App