import React from 'react'
import Navbar from './Navbar.jsx'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import './App.css'
import Footer from './Footer.jsx'
import Menu from './Menu.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const App = () => {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/menu" exact element={<Menu/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  )
}

export default App
