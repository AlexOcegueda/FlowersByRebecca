import {Routes, Route} from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <>
      <NavBar />
        <Routes>\
          <Route path="/" element={<Home />}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/Contact" element={<ContactMe />}/>
        </Routes>
      <FooterBar />
    </>
  );
}

export default App;


