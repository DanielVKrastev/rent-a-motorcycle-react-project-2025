import { Routes, Route, Router } from 'react-router';

import './App.css';

import AdminDashboard from './components/admin/AdminDashboard';
import Dashboard from './components/admin/dashboard/Dashboard';
import UserTable from './components/admin/users/user-table/UserTable';
import MotorcycleTable from './components/admin/motorcycles/motorcycle-table/MotorcycleTable';
import Reservations from './components/admin/reservations/Reservations';
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
import UserSettings from './components/user-settings/UserSettings';
import PageNotFound from './components/page-not-found/PageNotFound';

import PrivateGuard from './guards/PrivateGuard';
import PrivateAdminGuard from './guards/PrivateAdminGuard';
import Logout from './components/logout/Logout';
import UserProvider from './providers/UserProvider';


function App() {

  return (
      <UserProvider>
          <ContactsHeader />

          <Navbar />

          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/rent-a-motorcycle" element={<CatalogMotorcycle />}></Route>
              <Route path="/rent-a-motorcycle/:motorcycleId" element={<MotorcycleRent />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/logout" element={<Logout />}></Route>

              <Route element={<PrivateGuard />}>
                <Route path="/checkout/:motorcycleId" element={<Checkout />}></Route>
                <Route element={<PrivateAdminGuard />}>
                  <Route path="/admin" element={<AdminDashboard />}>
                      <Route index element={<Dashboard />} />
                      <Route path="users" element={<UserTable />} />
                      <Route path="motorcycle" element={<MotorcycleTable />} />
                      <Route path="reservation" element={<Reservations />} />
                  </Route>
                  </Route>
                <Route path="/user-settings" element={<UserSettings />} />
              </Route>

              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>

          <Footer />
      </UserProvider>
  )
}

export default App;
