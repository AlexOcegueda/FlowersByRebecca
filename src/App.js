import GlobalStyle from './globalStyle';
import {Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className='App'>  
      <GlobalStyle />
      <Routes>\
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
      </Routes>
    </div>
  );
}

export default App;
