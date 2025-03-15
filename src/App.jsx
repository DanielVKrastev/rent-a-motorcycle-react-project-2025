import { Routes, Route, Router } from 'react-router';

import './App.css';

import AdminDashboard from './components/admin/AdminDashboard';
import Dashboard from './components/admin/dashboard/Dashboard';
import UserTable from './components/admin/users/user-table/UserTable';
import MotorcycleTable from './components/admin/motorcycles/motorcycle-table/MotorcycleTable';
import Reservation from './components/admin/reservation/Reservation';
import CatalogMotorcycle from './components/catalog-motorcycle/CatalogMotorcycle';

import ScrollToTop from './utils/ScrollToTop';
import Home from './components/home/Home';
import About from './components/about/About';
import MotorcycleRent from './components/motorcycle-rent/MotorcycleRent';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ContactsHeader from './components/partials/contacts-header/ContactsHeader';
import Navbar from './components/partials/navbar/Navbar';
import Footer from './components/partials/footer/Footer';

function App() {
    return (
        <>
          <ContactsHeader />

          <Navbar />

          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/rent-a-motorcycle" element={<CatalogMotorcycle />}></Route>
              <Route path="/rent-a-motorcycle/motorcycle" element={<MotorcycleRent />}></Route>
              <Route path="/checkout/motorcycleId" element={<Checkout />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>

              <Route path="/admin" element={<AdminDashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UserTable />} />
                    <Route path="motorcycle" element={<MotorcycleTable />} />
                    <Route path="reservation" element={<Reservation />} />
              </Route>
          </Routes>

          <Footer />
        </>
    )
}

export default App;
