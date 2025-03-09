import { Routes, Route } from 'react-router';

import ContactsHeader from './components/ContactsHeader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import About from './components/About';
import CatalogMoto from './components/CatalogMoto';
import MotorcycleRent from './components/motorcycle/MotorcycleRent';

function App() {
    return (
        <>
          <ContactsHeader />

          <Navbar />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/rent-a-motorcycle" element={<CatalogMoto />}></Route>
                <Route path="/rent-a-motorcycle/motorcycle" element={<MotorcycleRent />}></Route>
            </Routes>

          <Footer />
        </>
    )
}

export default App;
