import {Routes, Route} from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';
import NavBar from './components/NavBar/NavBar';
import FooterBar from './components/Footer/FooterBar';

function App() {
  return (
    <div className='App'> 
    <NavBar />
      <Routes>\
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Contact" element={<ContactMe />}/>
      </Routes>
    <FooterBar />
    </div>
  );
}

export default App;


