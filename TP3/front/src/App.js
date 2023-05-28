import './App.css';
import About from './pages/About';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact'
import {BrowserRoutes, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRoutes>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/About' element={<About/>} />    
    </Routes>    
    </BrowserRoutes>
    
  );
}

export default App;
