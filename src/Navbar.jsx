import React, { useState } from 'react'
import logo from './Images/logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const[showLinks,setShowLinks] = useState(false);
    const click = () =>{
    setShowLinks(!showLinks);
    }
  return (
    <div className='navbar'>
    <div className='leftSide' id={showLinks?"open":"close"}>
        <img src={logo}/> 
        <div className='hiddenLinks'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>   
        </div>
    </div>
    <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> 
        <button onClick={click}><ReorderIcon/></button>   
    </div>
    </div>
  )
}   

export default Navbar
