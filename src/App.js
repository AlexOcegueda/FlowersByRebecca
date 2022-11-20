import {Routes, Route} from 'react-router-dom'
import './App.css'

// components 
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';

// pages
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Prom from './pages/services/Prom';
import Weddings from './pages/services/Weddings';

function App() {
  return (
    <>
      <NavBar />
        <Routes>\
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<ContactMe />}/>
          <Route path='/Weddings' element={<Weddings />}></Route>
          <Route path='/Prom' element={<Prom />}></Route>
        </Routes>
      <FooterBar />
    </>
  );
}

export default App;


