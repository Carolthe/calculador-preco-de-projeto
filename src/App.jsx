import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'

function App() {
  return (

<Router> 
  <nav> 
    <ul> 
      <li>
        <Link to="/" >Home</Link>
        </li> 
        <li>
          <Link to="/company">Empresa</Link>
          </li> 
          <li>
            <Link to="/contact">Contato</Link>
            </li> 
            </ul> 
            </nav> 
            <Routes> 
              <Route path="/" element={<Home />} /> 
              <Route path="/company" element={<Company />} /> 
              <Route path="/contact" element={<Contact />} /> 
              </Routes> 
              </Router> 

  )
}

export default App
