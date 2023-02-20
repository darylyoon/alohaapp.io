import './App.css';
import BrowsePage from './pages/browse';
import Navbar from './components/navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pdp from './pages/pdp';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Navbar/>
      <Pdp/>
      {/* <Home/> */}
    </div>
    
  );
}

export default App;
