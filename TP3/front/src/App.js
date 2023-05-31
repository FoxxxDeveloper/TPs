import './App.css';
import About from './pages/About';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/About' element={<About/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
