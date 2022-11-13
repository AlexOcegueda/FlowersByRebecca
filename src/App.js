import GlobalStyle from './globalStyle';
import {Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>  
      <GlobalStyle />
      <Routes>\
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
