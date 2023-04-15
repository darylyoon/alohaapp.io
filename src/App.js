import './App.css';
import BrowsePage from './pages/browse';
import Navbar from './components/navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pdp from './pages/pdp';
import Home from './pages/home';
import Checkout from './pages/checkout';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './pages/confirmation';
import Login from './pages/login';
import Logout from './pages/logout';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Stripe from './pages/stripePayment'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<BrowsePage/>}/>
        <Route path="/pdp/:exp_id" element={<Pdp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path='/stripe' element={<Stripe/>} />
        <Route path="/confirmation/:booking_id" element={<Confirmation/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>

  );
}

export default App;
