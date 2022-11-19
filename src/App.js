import {Routes, Route} from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div className='App'>  
      <Routes>\
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Contact" element={<ContactMe />}/>
      </Routes>
    </div>
  );
}

export default App;


