import { Routes, Route, Router } from 'react-router';

import ContactsHeader from './components/ContactsHeader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import About from './components/About';
import CatalogMoto from './components/CatalogMoto';
import MotorcycleRent from './components/motorcycle/MotorcycleRent';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Register from './components/register/Register';

import ScrollToTop from './utils/ScrollToTop';

function App() {
    return (
        <>
          <ContactsHeader />

          <Navbar />

          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/rent-a-motorcycle" element={<CatalogMoto />}></Route>
              <Route path="/rent-a-motorcycle/motorcycle" element={<MotorcycleRent />}></Route>
              <Route path="/checkout/motorcycleId" element={<Checkout />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
          </Routes>

          <Footer />
        </>
    )
}

export default App;
