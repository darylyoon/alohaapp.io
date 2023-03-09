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

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<BrowsePage/>}/>
        <Route path="/pdp" element={<Pdp/>}/>
      </Routes>
      {/* <Pdp/> */}
      {/* <Home/> */}
      <Checkout/>
    </div>
    
  );
}

export default App;
