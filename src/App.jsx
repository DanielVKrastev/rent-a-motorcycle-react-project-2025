import { Routes, Route, Router } from 'react-router';

import './App.css';

import ContactsHeader from './components/ContactsHeader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CatalogMoto from './components/CatalogMoto';
import MotorcycleRent from './components/motorcycle/MotorcycleRent';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Register from './components/register/Register';

import AdminDashboard from './components/admin/AdminDashboard';
import Dashboard from './components/admin/dashboard/Dashboard';
import UserTable from './components/admin/users/user-table/UserTable';

import ScrollToTop from './utils/ScrollToTop';
import MotorcycleTable from './components/admin/motorcycles/motorcycle-table/MotorcycleTable';

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

              <Route path="/admin" element={<AdminDashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UserTable />} />
                    <Route path="motorcycle" element={<MotorcycleTable />} />
              </Route>
          </Routes>

          <Footer />
        </>
    )
}

export default App;
