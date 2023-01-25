import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">

      <div className="Header">
        <div id="Header-Left">
          <h1>Vincent</h1>
        </div>
        
        <div id="Header-Right">

            <Link id="Header-Right-Link" to="/">HOME</Link>
            <Link id="Header-Right-Link" to="/contact">CONTACT</Link>    
        </div>
      </div>
      <div className="Line"></div>

      <Routes>       
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
