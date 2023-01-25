import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/personal-website';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      
      <div className="Header">
        <div id="Header-Left">
          <h1>Vincent</h1>
        </div>
        
        <div id="Header-Right">

            <Link id="Header-Right-Link" to="/personal-website">HOME</Link>
            <Link id="Header-Right-Link" to="/contact">CONTACT</Link>    
        </div>
      </div>
      <div className="Line"></div>

      <Routes>       
          <Route path="/personal-website" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
