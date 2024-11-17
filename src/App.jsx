import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Projetos from './components/pages/Projetos'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'
import logo from "../src/img/logo.png"
import NewProject from './components/pages/NewProject'

function App() {
  return (
<Router> 
<div className=' bg-zinc-900 sm:h-[75px] px-[7%] items-center flex'>
    <Link to="/" className=''><img src={logo} alt="Moeda" className='sm:w-11' /></Link>
  <div className='flex justify-end items-center sm:gap-7  text-white w-full'> 
    <Link to="/" className=' hover:text-yellow-400' >Home</Link>
    <Link to="/projetos" className=' hover:text-yellow-400'>Projetos</Link>
    <Link to="/company" className=' hover:text-yellow-400'>Empresa</Link>
    <Link to="/contact" className=' hover:text-yellow-400'>Contato</Link>

  </div> 
  </div>
    <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/projetos" element={<Projetos />} /> 
        <Route path="/company" element={<Company />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/newproject" element={<NewProject/>}/>
    </Routes> 
   <Footer />
  </Router>  
  )
}

export default App
