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
import UserSettings from './components/admin/user-settings/UserSettings';
import PageNotFound from './components/page-not-found/PageNotFound';

import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import { saveUserData } from './utils/userUtils';
import PrivateGuard from './guards/PrivateGuard';

function App() {
  const [user, setUser] = useState([]);

  const userLoginHandler = (userData) => {
    setUser(userData);
    saveUserData(userData);
  }

  console.log(user);
  

  return (
    <>
      <UserContext.Provider value={{userLoginHandler, user}} >
          <ContactsHeader />

          <Navbar />

          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/rent-a-motorcycle" element={<CatalogMotorcycle />}></Route>
              <Route path="/rent-a-motorcycle/motorcycle" element={<MotorcycleRent />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>

              <Route element={<PrivateGuard />}>
                <Route path="/checkout/motorcycleId" element={<Checkout />}></Route>
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UserTable />} />
                    <Route path="motorcycle" element={<MotorcycleTable />} />
                    <Route path="reservation" element={<Reservation />} />
                </Route>
                <Route path="/user-settings" element={<UserSettings />} />
              </Route>

              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>

          <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App;
